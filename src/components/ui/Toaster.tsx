"use client";

import { Toaster as Sonner } from "sonner";

export function Toaster() {
  return (
    <Sonner
      position="top-center"
      richColors
      closeButton
      toastOptions={{
        classNames: {
          toast: "border border-border bg-surface-elevated text-foreground",
        },
      }}
    />
  );
}
