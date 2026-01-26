"use client";

import { EVENT_DETAILS } from "@/data/event";
import { Button } from "@/components/ui/button";

export function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden border-t backdrop-blur-md p-4 pb-6 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.3)]" style={{ 
      background: 'rgba(11, 31, 42, 0.95)',
      borderColor: 'var(--border)' 
    }}>
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col">
          <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--muted)' }}>
            Registration Open
          </span>
          <span className="text-sm font-bold text-brand-400">
            Secure your seat
          </span>
        </div>
        <Button asChild size="md" className="shadow-none">
          <a href={EVENT_DETAILS.registration.link} target="_blank" rel="noopener noreferrer">
            Register Now
          </a>
        </Button>
      </div>
    </div>
  );
}