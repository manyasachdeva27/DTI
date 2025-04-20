
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { format, addDays } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const PeriodCalculator = () => {
  const [lastPeriodDate, setLastPeriodDate] = useState<Date | undefined>(undefined);
  const [cycleLength, setCycleLength] = useState("28");
  const [periodLength, setPeriodLength] = useState("5");
  const [results, setResults] = useState<{
    nextPeriod: Date | null;
    ovulationDate: Date | null;
    fertileWindowStart: Date | null;
    fertileWindowEnd: Date | null;
  } | null>(null);

  const handleCalculate = () => {
    if (!lastPeriodDate) return;

    const cycleLengthNum = parseInt(cycleLength);
    const periodLengthNum = parseInt(periodLength);
    
    // Calculate next period date
    const nextPeriod = addDays(lastPeriodDate, cycleLengthNum);
    
    // Calculate ovulation date (typically 14 days before the next period)
    const ovulationDate = addDays(nextPeriod, -14);
    
    // Calculate fertile window (typically 5 days before ovulation to 1 day after)
    const fertileWindowStart = addDays(ovulationDate, -5);
    const fertileWindowEnd = addDays(ovulationDate, 1);
    
    setResults({
      nextPeriod,
      ovulationDate,
      fertileWindowStart,
      fertileWindowEnd,
    });
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold gradient-heading mb-4">Period Calculator</h1>
          <p className="text-lg text-muted-foreground">
            Track your menstrual cycle and predict your next period, fertile window, and ovulation days.
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
                  <Label htmlFor="period-length">Average period length (days)</Label>
                  <Select value={periodLength} onValueChange={setPeriodLength}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select period length" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 10 }, (_, i) => i + 1).map((days) => (
                        <SelectItem key={days} value={days.toString()}>
                          {days} days
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
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
              <h2 className="text-xl font-semibold mb-4">Your Results</h2>
              
              {results ? (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-sakhi-50 p-4 rounded-lg">
                      <h3 className="font-medium text-sakhi-700">Next Period</h3>
                      <p className="text-2xl font-semibold">
                        {format(results.nextPeriod!, "MMMM d, yyyy")}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Mark your calendar!
                      </p>
                    </div>
                    
                    <div className="bg-sakhi-50 p-4 rounded-lg">
                      <h3 className="font-medium text-sakhi-700">Period Duration</h3>
                      <p className="text-2xl font-semibold">
                        {periodLength} days
                      </p>
                      <p className="text-sm text-muted-foreground">
                        From {format(results.nextPeriod!, "MMM d")} to {format(addDays(results.nextPeriod!, parseInt(periodLength) - 1), "MMM d")}
                      </p>
                    </div>
                    
                    <div className="bg-sakhi-50 p-4 rounded-lg">
                      <h3 className="font-medium text-sakhi-700">Ovulation Day</h3>
                      <p className="text-2xl font-semibold">
                        {format(results.ovulationDate!, "MMMM d, yyyy")}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Peak fertility
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
                  </div>
                  
                  <div className="mt-6 bg-white p-4 rounded-lg border border-sakhi-100">
                    <h3 className="font-medium text-sakhi-700 mb-2">Disclaimer</h3>
                    <p className="text-sm text-muted-foreground">
                      This calculator provides estimates based on the information you've entered. 
                      Actual cycle timing can vary. For medical advice or if trying to conceive 
                      or avoid pregnancy, please consult with a healthcare professional.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center text-muted-foreground">
                  <CalendarIcon className="h-12 w-12 mb-4 text-sakhi-200" />
                  <p>Enter your cycle information and click Calculate to see your results.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 bg-white p-6 rounded-xl border border-sakhi-100 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Understanding Your Cycle</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-medium text-sakhi-700 mb-2">Period Tracking</h3>
              <p className="text-muted-foreground">
                Tracking your period helps you understand your body's patterns and prepare for 
                upcoming cycles. Regular tracking can help identify irregularities that may 
                need medical attention.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-sakhi-700 mb-2">Ovulation</h3>
              <p className="text-muted-foreground">
                Ovulation typically occurs 14 days before your next period starts. During 
                ovulation, an egg is released from your ovary and is available for fertilization 
                for about 24 hours.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-sakhi-700 mb-2">Fertile Window</h3>
              <p className="text-muted-foreground">
                The fertile window includes the 5 days before ovulation and the day of ovulation. 
                This is when pregnancy is most likely to occur if you have unprotected sex.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-sakhi-700 mb-2">Cycle Length</h3>
              <p className="text-muted-foreground">
                The length of your menstrual cycle is counted from the first day of one period to 
                the first day of the next. The average cycle length is 28 days, but can range from 
                21 to 35 days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeriodCalculator;
