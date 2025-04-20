import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PCOSTest from "@/components/PCOSTest";

const doctors = [
  {
    id: 1,
    name: "Dr. Priya Sharma",
    specialty: "Gynecologist",
    experience: "15+ years",
    languages: ["English", "Hindi"],
    availability: ["Monday", "Wednesday", "Friday"],
    image: null
  },
  {
    id: 2,
    name: "Dr. Ananya Desai",
    specialty: "Obstetrician",
    experience: "12+ years",
    languages: ["English", "Gujarati", "Hindi"],
    availability: ["Tuesday", "Thursday", "Saturday"],
    image: null
  },
  {
    id: 3,
    name: "Dr. Meera Patel",
    specialty: "Reproductive Endocrinologist",
    experience: "10+ years",
    languages: ["English", "Hindi", "Marathi"],
    availability: ["Monday", "Tuesday", "Thursday"],
    image: null
  }
];

const consultationTypes = [
  { id: "video", label: "Video Consultation" },
  { id: "inperson", label: "In-Person Consultation" },
  { id: "phone", label: "Phone Consultation" }
];

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", 
  "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
];

const Consultation = () => {
  const [selectedDoctor, setSelectedDoctor] = useState<string>("");
  const [consultationType, setConsultationType] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [concerns, setConcerns] = useState("");
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!selectedDoctor || !consultationType || !selectedDate || !selectedTime || !name || !email || !phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields to book your consultation.",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, this would send data to a booking system
    toast({
      title: "Consultation Booked",
      description: `Your ${consultationType} consultation has been scheduled for ${format(selectedDate, "MMMM d, yyyy")} at ${selectedTime}.`,
    });
    
    // Reset form
    setSelectedDoctor("");
    setConsultationType("");
    setSelectedDate(undefined);
    setSelectedTime("");
    setName("");
    setEmail("");
    setPhone("");
    setConcerns("");
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 animate-fade-in">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold gradient-heading mb-4">Health Services</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Schedule consultations, get AI assistance for general queries, or take our PCOS risk assessment test.
          </p>
        </div>

        <Tabs defaultValue="booking" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 max-w-[600px] mx-auto">
            <TabsTrigger value="booking">Book Appointment</TabsTrigger>
            <TabsTrigger value="ai-chat">AI Assistant</TabsTrigger>
            <TabsTrigger value="pcos-test">PCOS Test</TabsTrigger>
          </TabsList>

          <TabsContent value="booking">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1 space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Why Choose Us</h2>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-sakhi-500 mr-2 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <div>
                          <span className="font-medium">Experienced Specialists</span>
                          <p className="text-sm text-muted-foreground">
                            Our team consists of highly qualified doctors with extensive experience in women's health.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-sakhi-500 mr-2 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <div>
                          <span className="font-medium">Comprehensive Care</span>
                          <p className="text-sm text-muted-foreground">
                            We provide holistic healthcare services addressing all aspects of women's health.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-sakhi-500 mr-2 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <div>
                          <span className="font-medium">Patient-Centered Approach</span>
                          <p className="text-sm text-muted-foreground">
                            We listen to your concerns and develop personalized treatment plans.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-sakhi-500 mr-2 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <div>
                          <span className="font-medium">Flexible Consultation Options</span>
                          <p className="text-sm text-muted-foreground">
                            Choose between in-person, video, or phone consultations based on your preference.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Our Specialists</h2>
                    <div className="space-y-5">
                      {doctors.map((doctor) => (
                        <div key={doctor.id} className="flex items-start space-x-3">
                          <div className="w-12 h-12 rounded-full bg-sakhi-100 flex items-center justify-center text-sakhi-500">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-medium">{doctor.name}</h3>
                            <p className="text-sm text-sakhi-600">{doctor.specialty}</p>
                            <p className="text-xs text-muted-foreground">
                              {doctor.experience} | {doctor.languages.join(", ")}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="md:col-span-2">
                <Card>
                  <CardContent className="p-6 md:p-8">
                    <h2 className="text-xl font-semibold mb-6">Book Your Appointment</h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="doctor">Select Doctor</Label>
                          <Select value={selectedDoctor} onValueChange={setSelectedDoctor}>
                            <SelectTrigger className="w-full mt-1">
                              <SelectValue placeholder="Choose a doctor" />
                            </SelectTrigger>
                            <SelectContent>
                              {doctors.map((doctor) => (
                                <SelectItem key={doctor.id} value={doctor.id.toString()}>
                                  {doctor.name} - {doctor.specialty}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <Label>Consultation Type</Label>
                          <RadioGroup
                            value={consultationType}
                            onValueChange={setConsultationType}
                            className="flex flex-col space-y-2 mt-1"
                          >
                            {consultationTypes.map((type) => (
                              <div key={type.id} className="flex items-center space-x-2">
                                <RadioGroupItem value={type.id} id={type.id} />
                                <Label htmlFor={type.id} className="cursor-pointer">
                                  {type.label}
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label>Appointment Date</Label>
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-full justify-start text-left mt-1",
                                    !selectedDate && "text-muted-foreground"
                                  )}
                                >
                                  <CalendarIcon className="mr-2 h-4 w-4" />
                                  {selectedDate ? (
                                    format(selectedDate, "PPP")
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                  mode="single"
                                  selected={selectedDate}
                                  onSelect={setSelectedDate}
                                  initialFocus
                                  disabled={(date) => {
                                    // Disable past dates and weekends
                                    return (
                                      date < new Date(new Date().setHours(0, 0, 0, 0)) ||
                                      date.getDay() === 0
                                    );
                                  }}
                                  className="p-3 pointer-events-auto"
                                />
                              </PopoverContent>
                            </Popover>
                          </div>
                          
                          <div>
                            <Label htmlFor="time">Preferred Time</Label>
                            <Select value={selectedTime} onValueChange={setSelectedTime}>
                              <SelectTrigger className="w-full mt-1">
                                <SelectValue placeholder="Select time slot" />
                              </SelectTrigger>
                              <SelectContent>
                                {timeSlots.map((time) => (
                                  <SelectItem key={time} value={time}>
                                    {time}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="font-semibold">Your Information</h3>
                        
                        <div>
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            placeholder="Enter your full name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="mt-1"
                            required
                          />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="email">Email Address</Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="you@example.com"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="mt-1"
                              required
                            />
                          </div>
                          
                          <div>
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input
                              id="phone"
                              placeholder="Enter your phone number"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              className="mt-1"
                              required
                            />
                          </div>
                        </div>
                        
                        <div>
                          <Label htmlFor="concerns">Health Concerns (Optional)</Label>
                          <Textarea
                            id="concerns"
                            placeholder="Briefly describe your health concerns or questions for the doctor"
                            rows={4}
                            value={concerns}
                            onChange={(e) => setConcerns(e.target.value)}
                            className="mt-1"
                          />
                        </div>
                      </div>
                      
                      <div className="bg-sakhi-50 p-4 rounded-lg text-sm">
                        <p className="text-foreground/80">
                          Your privacy is important to us. All information provided will be kept confidential 
                          and used only for the purpose of your consultation.
                        </p>
                      </div>
                      
                      <div className="flex justify-end">
                        <Button type="submit" className="bg-sakhi-500 hover:bg-sakhi-600">
                          Book Consultation
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="ai-chat" className="min-h-[600px]">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-6">
              <style>
                {`
                  .chat-container {
                    background: #FFFFFF;
                    border-radius: 16px;
                    overflow: hidden;
                  }

                  /* Custom styles for the iframe content */
                  iframe {
                    --chat-background: #FFFFFF;
                    --user-message-background: #F5F5FF;
                    --bot-message-background: #F0F0FF;
                    --message-text-color: #333333;
                    --input-background: #FFFFFF;
                    --input-border-color: #4B6BFB;
                    --input-border-radius: 24px;
                    --send-button-color: #4B6BFB;
                    --send-button-hover: #3451DB;
                    --quick-replies-background: #F5F5FF;
                    --quick-replies-text: #4B6BFB;
                    --quick-replies-border: #E6E6FF;
                    --quick-replies-hover-bg: #E6E6FF;
                  }

                  /* Message bubble styles */
                  .message-bubble {
                    border-radius: 20px;
                    padding: 12px 16px;
                    margin: 4px 0;
                    max-width: 80%;
                  }

                  /* Input field styles */
                  .chat-input {
                    border: 2px solid #4B6BFB;
                    border-radius: 24px;
                    padding: 12px 20px;
                    box-shadow: 0 2px 4px rgba(75, 107, 251, 0.1);
                  }

                  /* Quick reply button styles */
                  .quick-reply {
                    background: #F5F5FF;
                    border: 1px solid #E6E6FF;
                    border-radius: 20px;
                    color: #4B6BFB;
                    padding: 8px 16px;
                    margin: 4px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                  }

                  .quick-reply:hover {
                    background: #E6E6FF;
                  }
                `}
              </style>
              <div className="chat-container">
                <iframe
                  src="https://denser.ai/u/embed/5f4080d3-9d9d-4dfe-a537-7a605b9bb02d"
                  className="w-full border-none rounded-lg transition-all duration-300"
                  style={{
                    minHeight: "700px",
                    backgroundColor: "#FFFFFF",
                  }}
                  allow="microphone"
                ></iframe>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="pcos-test">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-semibold mb-2">PCOS Risk Assessment</h2>
                <p className="text-muted-foreground">
                  Take this quick assessment to understand your risk level for Polycystic Ovary Syndrome (PCOS). 
                  This is not a diagnosis but can help identify if you should consult a healthcare provider.
                </p>
              </div>
              <PCOSTest />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Consultation;
