"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading, asChild = false, children, ...props }, ref) => {
    const variants = {
      primary: "bg-accent text-white hover:bg-accent-dark shadow-lg",
      secondary: "bg-brand-500 text-white hover:bg-brand-600 shadow-md",
      outline: "border-2 text-white hover:bg-white/10 backdrop-blur-sm",
      ghost: "hover:bg-white/5",
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-base",
      lg: "h-14 px-8 text-lg",
    };

    const compClassName = cn(
      "inline-flex items-center justify-center rounded-lg font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 focus:ring-offset-brand-950 disabled:opacity-50 disabled:pointer-events-none",
      variants[variant],
      sizes[size],
      className
    );

    if (asChild) {
      const child = React.Children.only(children) as React.ReactElement<any>;
      return React.cloneElement(child, {
        className: cn(compClassName, child.props.className),
        ...props,
      });
    }

    return (
      <button
        ref={ref}
        className={compClassName}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";