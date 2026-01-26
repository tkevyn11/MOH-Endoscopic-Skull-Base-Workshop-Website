"use client";
import React from 'react';
import { usePathname as useNextPathname } from 'next/navigation';

export function RouterProvider({ children }: { children?: React.ReactNode }) {
  return <>{children}</>;
}

export function usePathname() {
  return useNextPathname();
}

export function useRouter() {
  return { push: (path: string) => { window.location.href = path; } };
}

export default function Link({ href, children, className, onClick, ...props }: any) {
  return (
    <a
      href={href}
      className={className}
      onClick={onClick}
      {...props}
    >
      {children}
    </a>
  );
}