"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type SignInFormData = z.infer<typeof signInSchema>;

export default function SignInPage() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data: SignInFormData) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Sign In data:", data);
    
    toast.success("Signed In Successfully!", {
      description: "Welcome back to the MEAI ecosystem.",
    });
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 py-20 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-[#403A8B]/10 to-transparent pointer-events-none" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-[#F5C400]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#F28C1B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-md mx-auto bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-8"
        >
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <Link href="/">
                <img src="/logo/MEAI.png" alt="MEAI India" className="h-16 w-auto" />
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
              Sign In to <span className="text-[#403A8B] dark:text-[#F5C400]">MEAI</span>
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Enter your details below to access your dashboard.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-700 dark:text-slate-300">Email Address</Label>
              <Input 
                id="email" 
                type="email"
                placeholder="you@company.com" 
                className="bg-white/50 dark:bg-slate-800/50 h-12"
                {...register("email")}
              />
              {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-slate-700 dark:text-slate-300">Password</Label>
                <Link href="#" className="text-sm text-[#403A8B] dark:text-[#F5C400] hover:underline font-medium">
                  Forgot password?
                </Link>
              </div>
              <Input 
                id="password" 
                type="password"
                placeholder="••••••••" 
                className="bg-white/50 dark:bg-slate-800/50 h-12"
                {...register("password")}
              />
              {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
            </div>

            <Button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-[#403A8B] to-[#F28C1B] hover:opacity-90 text-white h-12 rounded-xl text-lg font-semibold shadow-lg transition-transform active:scale-95"
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Don&apos;t have an account?{" "}
              <Link href="/join" className="text-[#403A8B] dark:text-[#F5C400] font-semibold hover:underline inline-flex items-center">
                Sign Up <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
