"use client";

import { LanguageProvider } from "@/lib/i18n";
import { ReactNode } from "react";
import IsaChat from "@/components/IsaChat";

export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      {children}
      <IsaChat />
    </LanguageProvider>
  );
}
