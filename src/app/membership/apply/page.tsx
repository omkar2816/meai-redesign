"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const applySchema = z.object({
  companyName: z.string().min(2, "Company Name is required"),
  fullName: z.string().min(2, "Full Name is required"),
  businessActivity: z.string().min(2, "Business Activity is required"),
  designation: z.string().min(2, "Designation is required"),
  email: z.string().email("Invalid email address"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  mobileNumber: z.string().min(10, "Valid Mobile Number is required"),
  membershipType: z.string().min(1, "Please select a membership plan"),
  turnoverCategories: z.array(z.string()).min(1, "Please select at least one enterprise category"),
});

type ApplyFormData = z.infer<typeof applySchema>;

const turnoverCategories = [
  "Small Enterprises (A) (Turnover upto to Rs.50 crs.)",
  "Small Enterprises (B) (Turnover from Rs.51 crs. to Rs.100 crs.)",
  "Mid-sized Enterprises (A) (Turnover fromRs. 101 crs. to Rs.250 crs.)",
  "Mid-sized Enterprises (B) (Turnover from Rs. 251 crs.to Rs.500 crs.)",
  "Mid-Corporates (Turnover fromRs. 501 crs. to Rs 1000 crs.)",
  "Corporates Category (A) (Turnover fromRs. 1001 crs. to Rs.3000 crs.)",
  "Corporates Category (B) (Turnover from Rs. 3001 crs. to Rs.5000 crs.)",
  "Corporates, MNCs, Financial & Insurance Institutions (Turnover above Rs. 5001 crs.)"
];

export default function ApplyMembershipPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ApplyFormData>({
    resolver: zodResolver(applySchema),
    defaultValues: {
      membershipType: "",
      turnoverCategories: [],
    }
  });

  const onSubmit = async (data: ApplyFormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Membership Application submitted:", data);
    
    toast.success("Application Submitted Successfully!", {
      description: "We've received your request to apply for MEAI Membership. Our team will contact you shortly.",
    });
    
    reset();
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-20 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-[#403A8B]/10 to-transparent pointer-events-none" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-[#F5C400]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 left-20 w-96 h-96 bg-[#F28C1B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4"
            >
              Apply for <span className="text-[#403A8B] dark:text-[#F5C400]">Membership</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-slate-600 dark:text-slate-400"
            >
              Choose your plan and become an official member of the MEAI ecosystem.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-8 md:p-12"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              
              {/* Membership Plan Selection */}
              <div className="pb-6 border-b border-slate-200 dark:border-slate-800">
                <h3 className="text-xl font-semibold mb-6 text-slate-800 dark:text-slate-200">1. Select Membership Plan</h3>
                <Controller
                  name="membershipType"
                  control={control}
                  render={({ field }) => (
                    <RadioGroup 
                      onValueChange={field.onChange} 
                      value={field.value}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                      <Label
                        htmlFor="annual"
                        className={`flex flex-col items-center justify-between rounded-xl border-2 p-6 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors ${field.value === 'annual' ? 'border-[#403A8B] bg-[#403A8B]/5 dark:bg-[#403A8B]/10' : 'border-slate-200 dark:border-slate-700'}`}
                      >
                        <RadioGroupItem value="annual" id="annual" className="sr-only" />
                        <div className="text-xl font-bold text-slate-900 dark:text-white mb-2">Annual Membership</div>
                        <p className="text-sm text-slate-500 text-center font-normal">Standard benefits and full ecosystem access for 1 year.</p>
                      </Label>
                      <Label
                        htmlFor="premium"
                        className={`flex flex-col items-center justify-between rounded-xl border-2 p-6 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors ${field.value === 'premium' ? 'border-[#F5C400] bg-[#F5C400]/5 dark:bg-[#F5C400]/10' : 'border-slate-200 dark:border-slate-700'}`}
                      >
                        <RadioGroupItem value="premium" id="premium" className="sr-only" />
                        <div className="text-xl font-bold text-slate-900 dark:text-white mb-2">Premium Membership</div>
                        <p className="text-sm text-slate-500 text-center font-normal">Priority support, exclusive networking, and VIP event access.</p>
                      </Label>
                    </RadioGroup>
                  )}
                />
                {errors.membershipType && <p className="text-sm text-red-500 mt-2">{errors.membershipType.message}</p>}
              </div>

              {/* Personal Details (Same as Join) */}
              <div>
                <h3 className="text-xl font-semibold mb-6 text-slate-800 dark:text-slate-200">2. Company Details</h3>
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
              </div>

              {/* Enterprise Categories */}
              <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
                <h3 className="text-xl font-semibold mb-6 text-slate-800 dark:text-slate-200">3. Select Enterprise Category</h3>
                <Controller
                  name="turnoverCategories"
                  control={control}
                  render={({ field }) => (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {turnoverCategories.map((category, idx) => {
                        const isChecked = field.value?.includes(category);
                        return (
                          <div key={idx} className="flex items-center space-x-3 p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                            <Checkbox 
                              id={`category-${idx}`} 
                              checked={isChecked}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  field.onChange([...(field.value || []), category]);
                                } else {
                                  field.onChange((field.value || []).filter(val => val !== category));
                                }
                              }}
                            />
                            <Label htmlFor={`category-${idx}`} className="text-slate-700 dark:text-slate-300 font-normal cursor-pointer flex-1 text-sm leading-snug">
                              {category}
                            </Label>
                          </div>
                        );
                      })}
                    </div>
                  )}
                />
                {errors.turnoverCategories && <p className="text-sm text-red-500 mt-2">{errors.turnoverCategories.message}</p>}
              </div>

              <div className="pt-6 flex justify-end">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-gradient-to-r from-[#403A8B] to-[#F28C1B] hover:opacity-90 text-white px-10 py-6 rounded-full text-lg font-semibold shadow-lg transition-transform active:scale-95"
                >
                  {isSubmitting ? "Submitting..." : "Apply Now"}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
