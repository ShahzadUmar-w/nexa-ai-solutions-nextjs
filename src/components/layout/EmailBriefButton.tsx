"use client";

import { Check, Mail } from "lucide-react";
import { useState } from "react";
import { EMAIL_BRIEF_HREF } from "@/lib/booking";
import { SITE } from "@/lib/site";

type EmailBriefButtonProps = {
  className?: string;
  showLabel?: boolean;
  labelCopied?: string;
  labelDefault?: string;
};

export function EmailBriefButton({
  className = "",
  showLabel = true,
  labelCopied = "Email Copied",
  labelDefault = "Email Brief",
}: EmailBriefButtonProps) {
  const [copied, setCopied] = useState(false);

  function handleClick() {
    window.location.href = EMAIL_BRIEF_HREF;
    void navigator.clipboard.writeText(SITE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={className}
    >
      {copied ? (
        <Check className="h-3.5 w-3.5 text-emerald-500" strokeWidth={1.5} />
      ) : (
        <Mail className="h-3.5 w-3.5" strokeWidth={1.5} />
      )}
      {showLabel && (
        <span>{copied ? labelCopied : labelDefault}</span>
      )}
    </button>
  );
}
