"use client";

import { useState } from "react";
import Link, { usePathname } from "@/lib/router";
import { Menu, X } from "lucide-react";
import { EVENT_DETAILS } from "@/data/event";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Programme", href: "/programme" },
  { label: "Fees", href: "/fees" },
  { label: "Faculty", href: "/faculty" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-40 w-full border-b backdrop-blur-md" style={{ 
      background: 'rgba(11, 31, 42, 0.85)', 
      borderColor: 'var(--border)' 
    }}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-8">
        {/* Logo Area */}
        <Link href="/" className="flex items-center space-x-3 md:space-x-4" onClick={() => setIsOpen(false)}>
          <img 
            src="/event-logo.png" 
            alt="MOH Skull Base Workshop Logo" 
            className="h-9 md:h-12 w-auto object-contain"
          />
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight" style={{ color: 'var(--text)' }}>
              MOH <span className="text-brand-400">SKULL BASE</span>
            </span>
            <span className="text-[10px] font-semibold tracking-wider" style={{ color: 'var(--muted)' }}>
              2026 WORKSHOP
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-brand-400",
                pathname === item.href ? "font-bold" : ""
              )}
              style={{ 
                color: pathname === item.href ? 'var(--text)' : 'var(--text2)' 
              }}
            >
              {item.label}
            </Link>
          ))}
          <Button
            asChild
            variant="primary"
            size="sm"
            className="ml-4"
          >
            <a href={EVENT_DETAILS.registration.link} target="_blank" rel="noopener noreferrer">
              Register Now
            </a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          style={{ color: 'var(--text2)' }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t px-4 py-6 shadow-lg" style={{ 
          background: 'rgba(11, 31, 42, 0.95)', 
          borderColor: 'var(--border)' 
        }}>
          <div className="flex flex-col space-y-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block py-2 text-lg font-medium",
                  pathname === item.href ? "font-bold" : ""
                )}
                style={{ 
                  color: pathname === item.href ? 'var(--text)' : 'var(--text2)' 
                }}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}