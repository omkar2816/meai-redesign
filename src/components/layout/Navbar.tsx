"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown, Activity, Globe, Zap, Users, ArrowRight, Gift, List, FileText, Info, Target, Award, Image, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

const aboutItems = [
  { title: "About MEAI", href: "/about", icon: Info, description: "Learn about our mission and history." },
  { title: "Vision & Mission", href: "/about#vision", icon: Target, description: "Our roadmap for India's growth." },
  { title: "Leadership", href: "/about#leadership", icon: Award, description: "Meet the team driving our initiatives." },
  { title: "Gallery", href: "/gallery", icon: Image, description: "Explore moments from our events and initiatives." },
  { title: "Advisory Board", href: "/about#advisory", icon: Lightbulb, description: "Experts guiding our strategic direction." },
];

const solutionsItems = [
  { title: "Export Promotion", href: "/solutions#export", icon: Globe, description: "Scale globally with our export strategies." },
  { title: "Manufacturing Growth", href: "/solutions#manufacturing", icon: Activity, description: "Optimize operations and increase output." },
  { title: "Investments", href: "/solutions#investments", icon: Zap, description: "Attract funding and capital investments." },
  { title: "Strategic Partnerships", href: "/solutions#partnerships", icon: Users, description: "Connect with industry leaders." },
];

const membershipItems = [
  { title: "Benefits", href: "/membership/benefits", icon: Gift, description: "Why businesses join our ecosystem." },
  { title: "Plans", href: "/membership/plans", icon: List, description: "Membership tiers for your business." },
  { title: "Apply", href: "/membership/apply", icon: FileText, description: "Join MEAI today." },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full glass">
      <div className="container mx-auto flex h-20 items-center justify-between px-8 md:px-16 lg:px-24">
        {/* Mobile Spacer */}
        <div className="lg:hidden w-10" />

        <div className="flex items-center gap-2 absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo/MEAI.png" alt="MEAI India" className="h-15 w-auto" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList className="space-x-2 lg:space-x-4">
              <NavigationMenuItem>
                <NavigationMenuLink render={<Link href="/" />} className={cn(navigationMenuTriggerStyle(), "bg-transparent")}>
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {aboutItems.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href} icon={item.icon}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {solutionsItems.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink render={<Link href={item.href} />}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-800 dark:focus:bg-slate-800 group"
                        >
                          <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                              <item.icon className="h-4 w-4" />
                            </div>
                            <div className="text-sm font-medium leading-none">{item.title}</div>
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-2">
                            {item.description}
                          </p>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink render={<Link href="/#industries" />} className={cn(navigationMenuTriggerStyle(), "bg-transparent")}>
                  Industries
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">Membership</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[280px] gap-3 p-4 md:w-[320px]">
                    {membershipItems.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href} icon={item.icon}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink render={<Link href="/#events" />} className={cn(navigationMenuTriggerStyle(), "bg-transparent")}>
                  Events
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Link href="/signin">
            <Button variant="ghost" className="font-semibold">Sign In</Button>
          </Link>
          <Link href="/join">
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 py-5 shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5">
              Join MEAI <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 w-9">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] sm:w-[400px] border-l-0 p-0 flex flex-col bg-white dark:bg-slate-950">
              {/* Header with Logo */}
              <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-slate-800">
                <img src="/logo/MEAI.png" alt="MEAI India" className="h-8 w-auto" />
              </div>

              {/* Scrollable Navigation */}
              <div className="flex-1 overflow-y-auto p-4 space-y-1">
                <Link href="/" className="block p-4 text-lg font-bold rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors" onClick={() => setIsOpen(false)}>
                  Home
                </Link>

                {/* Modern Dropdown - About */}
                <details className="group">
                  <summary className="flex items-center justify-between p-4 text-lg font-bold rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900 cursor-pointer list-none [&::-webkit-details-marker]:hidden transition-colors">
                    About
                    <ChevronDown className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="grid gap-1 px-4 pb-2">
                    {aboutItems.map((item) => (
                      <Link key={item.title} href={item.href} className="flex items-center gap-4 p-3 rounded-xl text-base font-medium text-slate-600 dark:text-slate-400 hover:text-[#403A8B] hover:bg-[#403A8B]/5 dark:hover:bg-[#F5C400]/10 dark:hover:text-[#F5C400] transition-all" onClick={() => setIsOpen(false)}>
                        {item.icon && (
                          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#403A8B]/10 text-[#403A8B] dark:text-[#F5C400]">
                            <item.icon className="w-5 h-5" />
                          </div>
                        )}
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </details>

                {/* Modern Dropdown - Solutions */}
                <details className="group">
                  <summary className="flex items-center justify-between p-4 text-lg font-bold rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900 cursor-pointer list-none [&::-webkit-details-marker]:hidden transition-colors">
                    Solutions
                    <ChevronDown className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="grid gap-1 px-4 pb-2">
                    {solutionsItems.map((item) => (
                      <Link key={item.title} href={item.href} className="flex items-center gap-4 p-3 rounded-xl text-base font-medium text-slate-600 dark:text-slate-400 hover:text-[#403A8B] hover:bg-[#403A8B]/5 dark:hover:bg-[#F5C400]/10 dark:hover:text-[#F5C400] transition-all" onClick={() => setIsOpen(false)}>
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#403A8B]/10 text-[#403A8B] dark:text-[#F5C400]">
                          <item.icon className="w-5 h-5" />
                        </div>
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </details>

                {/* Modern Dropdown - Membership */}
                <details className="group">
                  <summary className="flex items-center justify-between p-4 text-lg font-bold rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900 cursor-pointer list-none [&::-webkit-details-marker]:hidden transition-colors">
                    Membership
                    <ChevronDown className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="grid gap-1 px-4 pb-2">
                    {membershipItems.map((item) => (
                      <Link key={item.title} href={item.href} className="flex items-center gap-4 p-3 rounded-xl text-base font-medium text-slate-600 dark:text-slate-400 hover:text-[#403A8B] hover:bg-[#403A8B]/5 dark:hover:bg-[#F5C400]/10 dark:hover:text-[#F5C400] transition-all" onClick={() => setIsOpen(false)}>
                        {item.icon && (
                          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#403A8B]/10 text-[#403A8B] dark:text-[#F5C400]">
                            <item.icon className="w-5 h-5" />
                          </div>
                        )}
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </details>

                <Link href="/#industries" className="block p-4 text-lg font-bold rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors" onClick={() => setIsOpen(false)}>
                  Industries
                </Link>
                <Link href="/events" className="block p-4 text-lg font-bold rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors" onClick={() => setIsOpen(false)}>
                  Events
                </Link>
              </div>

              {/* Footer Buttons */}
              <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/20">
                <div className="flex flex-col gap-3">
                  <Link href="/signin" onClick={() => setIsOpen(false)} className="w-full">
                    <Button variant="outline" className="w-full h-14 text-lg font-bold rounded-xl border-2 border-[#403A8B] text-[#403A8B] dark:text-[#F5C400] dark:border-[#F5C400] hover:bg-[#403A8B] hover:text-white dark:hover:bg-[#F5C400] dark:hover:text-slate-900 transition-colors">
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/join" onClick={() => setIsOpen(false)} className="w-full">
                    <Button className="w-full h-14 text-lg font-bold rounded-xl bg-[#403A8B] hover:bg-[#403A8B]/90 text-white shadow-lg transition-transform active:scale-[0.98]">
                      Join MEAI
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: React.ElementType }
>(({ className, title, children, icon: Icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink render={<Link href={props.href!} />}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-800 dark:focus:bg-slate-800 group",
          className
        )}
      >
        {Icon ? (
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <Icon className="h-4 w-4" />
            </div>
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
        ) : (
          <div className="text-sm font-medium leading-none">{title}</div>
        )}
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-2">
          {children}
        </p>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
