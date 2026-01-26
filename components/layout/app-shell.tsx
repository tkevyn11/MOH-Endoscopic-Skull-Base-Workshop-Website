"use client";

import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { MobileCTA } from "@/components/layout/mobile-cta";
import { RegisterCTASection } from "@/components/ui/register-cta-section";
import { RouterProvider } from "@/lib/router";

export function AppShell({ children }: { children?: React.ReactNode }) {
  return (
    <RouterProvider>
      <div className="min-h-screen flex flex-col font-sans text-base leading-relaxed" style={{ color: 'var(--text)' }}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <RegisterCTASection />
        <Footer />
        <MobileCTA />
      </div>
    </RouterProvider>
  );
}
