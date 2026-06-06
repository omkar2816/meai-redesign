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
import { Menu, ChevronDown, Activity, Globe, Zap, Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const aboutItems = [
  { title: "About MEAI", href: "/#about", description: "Learn about our mission and history." },
  { title: "Vision & Mission", href: "/#vision", description: "Our roadmap for India's growth." },
  { title: "Leadership", href: "/#leadership", description: "Meet the team driving our initiatives." },
  { title: "Advisory Board", href: "/#advisory", description: "Experts guiding our strategic direction." },
];

const solutionsItems = [
  { title: "Export Promotion", href: "/#export", icon: Globe, description: "Scale globally with our export strategies." },
  { title: "Manufacturing Growth", href: "/#manufacturing", icon: Activity, description: "Optimize operations and increase output." },
  { title: "Investments", href: "/#investments", icon: Zap, description: "Attract funding and capital investments." },
  { title: "Strategic Partnerships", href: "/#partnerships", icon: Users, description: "Connect with industry leaders." },
];

const membershipItems = [
  { title: "Benefits", href: "/#benefits", description: "Why businesses join our ecosystem." },
  { title: "Plans", href: "/#plans", description: "Membership tiers for your business." },
  { title: "Apply", href: "/#apply", description: "Join MEAI today." },
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
            <img src="/logo/MEAI.jpg" alt="MEAI India" className="h-15 w-auto" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
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
                      <ListItem key={item.title} title={item.title} href={item.href}>
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
                  <ul className="grid w-[300px] gap-3 p-4 md:w-[400px]">
                    {membershipItems.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href}>
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
          <Button variant="ghost" className="font-semibold">Sign In</Button>
          <Link href="/join">
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5">
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
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Home</Link>
                <div className="space-y-3">
                  <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wider">About</h4>
                  <div className="grid gap-2 pl-4 border-l">
                    {aboutItems.map((item) => (
                      <Link key={item.title} href={item.href} className="text-sm" onClick={() => setIsOpen(false)}>
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wider">Solutions</h4>
                  <div className="grid gap-2 pl-4 border-l">
                    {solutionsItems.map((item) => (
                      <Link key={item.title} href={item.href} className="text-sm" onClick={() => setIsOpen(false)}>
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
                <Link href="/#industries" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Industries</Link>
                <div className="space-y-3">
                  <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wider">Membership</h4>
                  <div className="grid gap-2 pl-4 border-l">
                    {membershipItems.map((item) => (
                      <Link key={item.title} href={item.href} className="text-sm" onClick={() => setIsOpen(false)}>
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
                <Link href="/#events" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Events</Link>
                <div className="mt-6 flex flex-col gap-3">
                  <Button variant="outline" className="w-full">Sign In</Button>
                  <Link href="/join" onClick={() => setIsOpen(false)} className="w-full">
                    <Button className="w-full bg-primary hover:bg-primary/90">Join MEAI</Button>
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink render={<Link href={props.href!} />}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-800 dark:focus:bg-slate-800",
            className
          )}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-2">
            {children}
          </p>
        </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
