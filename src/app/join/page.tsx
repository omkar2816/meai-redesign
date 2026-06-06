"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const joinSchema = z.object({
  companyName: z.string().min(2, "Company Name is required"),
  fullName: z.string().min(2, "Full Name is required"),
  businessActivity: z.string().min(2, "Business Activity is required"),
  designation: z.string().min(2, "Designation is required"),
  email: z.string().email("Invalid email address"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  mobileNumber: z.string().min(10, "Valid Mobile Number is required"),
  eventAlerts: z.boolean().default(false).optional(),
  businessDirectory: z.boolean().default(false).optional(),
  channelPartner: z.boolean().default(false).optional(),
  businessEnquiry: z.boolean().default(false).optional(),
});

type JoinFormData = z.infer<typeof joinSchema>;

export default function JoinPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<JoinFormData>({
    resolver: zodResolver(joinSchema),
    defaultValues: {
      eventAlerts: false,
      businessDirectory: false,
      channelPartner: false,
      businessEnquiry: false,
    },
  });

  const onSubmit = async (data: JoinFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);

    toast.success("Application Submitted Successfully!", {
      description: "We've received your request to join MEAI. Our team will contact you shortly.",
    });

    reset();
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-20 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-[#403A8B]/10 to-transparent pointer-events-none" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-[#F5C400]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 left-20 w-96 h-96 bg-[#F28C1B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-6"
            >
              <img src="/logo/logo.png" alt="MEAI Logo" className="h-20 w-auto" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4"
            >
              Join <span className="text-[#403A8B] dark:text-[#F5C400]">MEAI</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-slate-600 dark:text-slate-400"
            >
              Become a part of India&apos;s leading Manufacturing & Export Growth Ecosystem.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-8 md:p-12"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="companyName" className="text-slate-700 dark:text-slate-300">Company Name</Label>
                  <Input
                    id="companyName"
                    placeholder="Enter your company name"
                    className="bg-white/50 dark:bg-slate-800/50 h-12 text-base"
                    {...register("companyName")}
                  />
                  {errors.companyName && <p className="text-sm text-red-500">{errors.companyName.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-slate-700 dark:text-slate-300">Full Name</Label>
                  <Input
                    id="fullName"
                    placeholder="Enter your full name"
                    className="bg-white/50 dark:bg-slate-800/50 h-12 text-base"
                    {...register("fullName")}
                  />
                  {errors.fullName && <p className="text-sm text-red-500">{errors.fullName.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="businessActivity" className="text-slate-700 dark:text-slate-300">Business Activity</Label>
                  <Input
                    id="businessActivity"
                    placeholder="E.g. Manufacturing, Export, Retail"
                    className="bg-white/50 dark:bg-slate-800/50 h-12 text-base"
                    {...register("businessActivity")}
                  />
                  {errors.businessActivity && <p className="text-sm text-red-500">{errors.businessActivity.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="designation" className="text-slate-700 dark:text-slate-300">Designation</Label>
                  <Input
                    id="designation"
                    placeholder="Your role in the company"
                    className="bg-white/50 dark:bg-slate-800/50 h-12 text-base"
                    {...register("designation")}
                  />
                  {errors.designation && <p className="text-sm text-red-500">{errors.designation.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-700 dark:text-slate-300">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    className="bg-white/50 dark:bg-slate-800/50 h-12 text-base"
                    {...register("email")}
                  />
                  {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mobileNumber" className="text-slate-700 dark:text-slate-300">Mobile Number</Label>
                  <Input
                    id="mobileNumber"
                    type="tel"
                    placeholder="+91"
                    className="bg-white/50 dark:bg-slate-800/50 h-12 text-base"
                    {...register("mobileNumber")}
                  />
                  {errors.mobileNumber && <p className="text-sm text-red-500">{errors.mobileNumber.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city" className="text-slate-700 dark:text-slate-300">City</Label>
                  <Input
                    id="city"
                    placeholder="Enter your city"
                    className="bg-white/50 dark:bg-slate-800/50 h-12 text-base"
                    {...register("city")}
                  />
                  {errors.city && <p className="text-sm text-red-500">{errors.city.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="state" className="text-slate-700 dark:text-slate-300">State</Label>
                  <Input
                    id="state"
                    placeholder="Enter your state"
                    className="bg-white/50 dark:bg-slate-800/50 h-12 text-base"
                    {...register("state")}
                  />
                  {errors.state && <p className="text-sm text-red-500">{errors.state.message}</p>}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
                <h3 className="text-lg font-semibold mb-4 text-slate-800 dark:text-slate-200">Interests & Preferences</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
                  <div className="flex items-center space-x-2 py-2 px-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <Controller
                      name="eventAlerts"
                      control={control}
                      render={({ field }) => (
                        <Checkbox
                          id="eventAlerts"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="w-4 h-4"
                        />
                      )}
                    />
                    <Label htmlFor="eventAlerts" className="text-slate-600 dark:text-slate-400 font-normal text-base cursor-pointer">Receive Event Alerts</Label>
                  </div>
                  <div className="flex items-center space-x-2 py-2 px-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <Controller
                      name="businessDirectory"
                      control={control}
                      render={({ field }) => (
                        <Checkbox
                          id="businessDirectory"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="w-4 h-4"
                        />
                      )}
                    />
                    <Label htmlFor="businessDirectory" className="text-slate-600 dark:text-slate-400 font-normal text-base cursor-pointer">List in Business Directory</Label>
                  </div>
                  <div className="flex items-center space-x-2 py-2 px-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <Controller
                      name="channelPartner"
                      control={control}
                      render={({ field }) => (
                        <Checkbox
                          id="channelPartner"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="w-4 h-4"
                        />
                      )}
                    />
                    <Label htmlFor="channelPartner" className="text-slate-600 dark:text-slate-400 font-normal text-base cursor-pointer">Become a Channel Partner</Label>
                  </div>
                  <div className="flex items-center space-x-2 py-2 px-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <Controller
                      name="businessEnquiry"
                      control={control}
                      render={({ field }) => (
                        <Checkbox
                          id="businessEnquiry"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="w-4 h-4"
                        />
                      )}
                    />
                    <Label htmlFor="businessEnquiry" className="text-slate-600 dark:text-slate-400 font-normal text-base cursor-pointer">Submit a Business Enquiry</Label>
                  </div>
                </div>
              </div>

              <div className="pt-6 flex justify-end">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-[#403A8B] hover:bg-[#403A8B]/90 text-white px-10 py-6 rounded-full text-lg font-semibold shadow-lg transition-transform active:scale-95"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
