"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { CalendarIcon, CheckCircle2, Clock, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const appointmentSchema = z.object({
  fullName: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  phone: z.string().trim().min(10, "Enter a valid phone number").max(30, "Phone number is too long"),
  email: z.string().trim().email("Enter a valid email address").max(255, "Email is too long"),
  vehicleDetails: z.string().trim().min(3, "Enter your vehicle year, make, and model").max(200, "Vehicle details are too long"),
  service: z.string({ required_error: "Please select a service" }),
  preferredDate: z.date({ required_error: "Please select a preferred date" }),
  preferredTime: z.string({ required_error: "Please select a preferred time" }),
});

type AppointmentValues = z.infer<typeof appointmentSchema>;

const services = [
  { value: "brake-repair", label: "Brake Repairs & Inspections" },
  { value: "engine-diagnostics", label: "Engine Diagnostics & Tune-Ups" },
  { value: "oil-change", label: "Oil Changes & Routine Maintenance" },
  { value: "heating-ac", label: "Heating & A/C Service" },
  { value: "transmission-suspension", label: "Transmission & Suspension Repair" },
  { value: "other", label: "Other / Not Sure" },
];

const timeSlots = [
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];

interface AppointmentModalProps {
  children: React.ReactNode;
  defaultService?: string;
}

export function AppointmentModal({ children, defaultService }: AppointmentModalProps) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<AppointmentValues>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      vehicleDetails: "",
      service: defaultService || "",
      preferredTime: "",
    },
  });

  function onSubmit(values: AppointmentValues) {
    // In a real app, send this to your backend
    console.log("Appointment request:", values);
    setSubmitted(true);
  }

  function handleOpenChange(nextOpen: boolean) {
    setOpen(nextOpen);
    if (!nextOpen) {
      // Reset form and success state when modal closes
      setTimeout(() => {
        setSubmitted(false);
        form.reset();
      }, 200);
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[520px] max-h-[90vh] overflow-y-auto bg-[#0f172a] border-white/10 p-0">
        <div className="p-6">
          <DialogHeader className="text-left mb-6">
            <DialogTitle className="text-2xl font-bold text-white">
              {submitted ? "Request Received" : "Request an Appointment at Moses Auto Service & Repair"}
            </DialogTitle>
            <DialogDescription className="text-gray-400">
              {submitted
                ? "We will contact you shortly to confirm your appointment."
                : "Fill out the form below and the team at Moses Auto Service & Repair will reach out to confirm your visit."}
            </DialogDescription>
          </DialogHeader>

          {submitted ? (
            <div className="flex flex-col items-center justify-center py-10 text-center space-y-6">
              <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-green-500" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">Thank You!</h3>
                <p className="text-gray-400 max-w-sm">
                  Your appointment request has been submitted. A member of our team will call you soon to confirm your date and time.
                </p>
              </div>
              <Button
                onClick={() => setOpen(false)}
                className="bg-[#ef4444] hover:bg-[#dc2626] text-white px-8 py-3 rounded-xl font-bold"
              >
                Done
              </Button>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Full Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John Smith"
                            {...field}
                            className="bg-[#1e293b] border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-[#ef4444]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Phone</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="(214) 555-1234"
                            {...field}
                            className="bg-[#1e293b] border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-[#ef4444]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="john@example.com"
                          {...field}
                          className="bg-[#1e293b] border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-[#ef4444]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="vehicleDetails"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Vehicle Details</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g. 2019 Honda Accord"
                          {...field}
                          className="bg-[#1e293b] border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-[#ef4444]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Service Required</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-[#1e293b] border-white/10 text-white focus:ring-[#ef4444]">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-[#1e293b] border-white/10">
                          {services.map((service) => (
                            <SelectItem
                              key={service.value}
                              value={service.value}
                              className="text-white focus:bg-[#ef4444] focus:text-white"
                            >
                              {service.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="preferredDate"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel className="text-gray-300">Preferred Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full justify-start text-left font-normal bg-[#1e293b] border-white/10 text-white hover:bg-[#1e293b]/80 hover:text-white focus:ring-[#ef4444]",
                                  !field.value && "text-gray-500"
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0 bg-[#0f172a] border-white/10" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
                              initialFocus
                              className="p-3 pointer-events-auto"
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="preferredTime"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Preferred Time</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-[#1e293b] border-white/10 text-white focus:ring-[#ef4444]">
                              <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-gray-500" />
                                <SelectValue placeholder="Select time" />
                              </div>
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-[#1e293b] border-white/10">
                            {timeSlots.map((time) => (
                              <SelectItem
                                key={time}
                                value={time}
                                className="text-white focus:bg-[#ef4444] focus:text-white"
                              >
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#ef4444] hover:bg-[#dc2626] text-white py-4 rounded-xl text-base font-bold transition-colors"
                >
                  Request Appointment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </Form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
