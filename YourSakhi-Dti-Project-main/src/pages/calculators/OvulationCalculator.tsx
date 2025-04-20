
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { format, addDays, subDays } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const OvulationCalculator = () => {
  const [lastPeriodDate, setLastPeriodDate] = useState<Date | undefined>(undefined);
  const [cycleLength, setCycleLength] = useState("28");
  const [lutealPhase, setLutealPhase] = useState("14");
  const [results, setResults] = useState<{
    ovulationDate: Date | null;
    fertileWindowStart: Date | null;
    fertileWindowEnd: Date | null;
    nextPeriod: Date | null;
  } | null>(null);

  const handleCalculate = () => {
    if (!lastPeriodDate) return;

    const cycleLengthNum = parseInt(cycleLength);
    const lutealPhaseNum = parseInt(lutealPhase);
    
    // Calculate ovulation date
    // Ovulation typically occurs (cycle length - luteal phase) days after the start of the last period
    const ovulationDay = cycleLengthNum - lutealPhaseNum;
    const ovulationDate = addDays(lastPeriodDate, ovulationDay);
    
    // Calculate fertile window (typically 5 days before ovulation to 1 day after)
    const fertileWindowStart = subDays(ovulationDate, 5);
    const fertileWindowEnd = addDays(ovulationDate, 1);
    
    // Calculate next period date
    const nextPeriod = addDays(lastPeriodDate, cycleLengthNum);
    
    setResults({
      ovulationDate,
      fertileWindowStart,
      fertileWindowEnd,
      nextPeriod,
    });
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold gradient-heading mb-4">Ovulation Calculator</h1>
          <p className="text-lg text-muted-foreground">
            Predict your most fertile days to help you plan for pregnancy or avoid it.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="md:col-span-1">
            <CardContent className="p-6">
              <form 
                className="space-y-4" 
                onSubmit={(e) => {
                  e.preventDefault();
                  handleCalculate();
                }}
              >
                <div className="space-y-2">
                  <Label htmlFor="last-period">First day of last period</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !lastPeriodDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {lastPeriodDate ? (
                          format(lastPeriodDate, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={lastPeriodDate}
                        onSelect={setLastPeriodDate}
                        initialFocus
                        className="p-3 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="cycle-length">Average cycle length (days)</Label>
                  <Select value={cycleLength} onValueChange={setCycleLength}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select cycle length" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 15 }, (_, i) => i + 21).map((days) => (
                        <SelectItem key={days} value={days.toString()}>
                          {days} days
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">
                    The average menstrual cycle is 28 days, but can range from 21 to 35 days.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="luteal-phase">Luteal phase length (days)</Label>
                  <Select value={lutealPhase} onValueChange={setLutealPhase}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select luteal phase length" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 6 }, (_, i) => i + 12).map((days) => (
                        <SelectItem key={days} value={days.toString()}>
                          {days} days
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">
                    The luteal phase is the time between ovulation and the start of your period. It's typically 14 days.
                  </p>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-sakhi-500 hover:bg-sakhi-600"
                  disabled={!lastPeriodDate}
                >
                  Calculate
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <Card className="md:col-span-2">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Your Fertility Window</h2>
              
              {results ? (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-sakhi-50 p-4 rounded-lg">
                      <h3 className="font-medium text-sakhi-700">Ovulation Day</h3>
                      <p className="text-2xl font-semibold">
                        {format(results.ovulationDate!, "MMMM d, yyyy")}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        The day your body releases an egg
                      </p>
                    </div>
                    
                    <div className="bg-sakhi-50 p-4 rounded-lg">
                      <h3 className="font-medium text-sakhi-700">Fertile Window</h3>
                      <p className="text-2xl font-semibold">
                        {format(results.fertileWindowStart!, "MMM d")} - {format(results.fertileWindowEnd!, "MMM d")}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Days with higher chance of conception
                      </p>
                    </div>
                    
                    <div className="bg-sakhi-50 p-4 rounded-lg">
                      <h3 className="font-medium text-sakhi-700">Next Period</h3>
                      <p className="text-2xl font-semibold">
                        {format(results.nextPeriod!, "MMMM d, yyyy")}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        When your next cycle begins
                      </p>
                    </div>
                    
                    <div className="bg-sakhi-50 p-4 rounded-lg">
                      <h3 className="font-medium text-sakhi-700">Most Fertile Days</h3>
                      <p className="text-2xl font-semibold">
                        {format(subDays(results.ovulationDate!, 1), "MMM d")} - {format(results.ovulationDate!, "MMM d")}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Peak fertility days
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 bg-white p-4 rounded-lg border border-sakhi-100">
                    <h3 className="font-medium text-sakhi-700 mb-2">Understanding Your Results</h3>
                    <p className="text-sm text-muted-foreground">
                      Your ovulation day is when an egg is released and is available for fertilization for about 24 hours. 
                      Sperm can survive for up to 5 days in a woman's body, which is why your fertile window starts 
                      5 days before ovulation. If you're trying to conceive, having intercourse every 1-2 days during your 
                      fertile window will maximize your chances.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center text-muted-foreground">
                  <CalendarIcon className="h-12 w-12 mb-4 text-sakhi-200" />
                  <p>Enter your cycle information and click Calculate to see your fertility window.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 bg-white p-6 rounded-xl border border-sakhi-100 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Understanding Ovulation & Fertility</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-medium text-sakhi-700 mb-2">Signs of Ovulation</h3>
              <ul className="list-disc list-outside pl-5 text-muted-foreground space-y-1">
                <li>Increase in basal body temperature</li>
                <li>Changes in cervical mucus (becomes clearer, slippery, and stretchy)</li>
                <li>Mild pelvic or lower abdominal pain (mittelschmerz)</li>
                <li>Increased sex drive</li>
                <li>Slight spotting</li>
                <li>Changes in the position and firmness of the cervix</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-sakhi-700 mb-2">Tracking Methods</h3>
              <ul className="list-disc list-outside pl-5 text-muted-foreground space-y-1">
                <li><span className="font-medium">Calendar Method:</span> Tracking menstrual cycles over several months</li>
                <li><span className="font-medium">Basal Body Temperature:</span> Taking temperature daily to detect the rise after ovulation</li>
                <li><span className="font-medium">Cervical Mucus Method:</span> Observing changes in vaginal discharge</li>
                <li><span className="font-medium">Ovulation Predictor Kits:</span> Home tests that detect hormone surges</li>
                <li><span className="font-medium">Fertility Monitors:</span> Electronic devices to track fertility signs</li>
              </ul>
            </div>
            
            <div className="md:col-span-2">
              <h3 className="font-medium text-sakhi-700 mb-2">Important Notes</h3>
              <p className="text-muted-foreground">
                This calculator provides estimates based on averages and the information you've provided. Every woman's body is unique, 
                and cycles can vary from month to month due to factors like stress, illness, travel, or medications. For the most 
                accurate tracking, consider using multiple methods and consulting with a healthcare provider, especially if you're 
                trying to conceive or have irregular cycles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OvulationCalculator;
