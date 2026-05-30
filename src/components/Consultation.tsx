"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CalendarCheck, Mail } from "lucide-react";
import { toast } from "sonner";
import { FadeIn } from "@/components/motion/FadeIn";
import { CONSULTATION_STEPS } from "@/lib/constants";
import {
  buildEmailContent,
  CONTACT_EXPECTATIONS,
  CONTACT_TRUST_SIGNALS,
  openEmailFallback,
  sendContactForm,
  type ContactFormData,
} from "@/lib/contact";
import { DIRECT_EMAIL_HREF, GOOGLE_BOOKING_URL } from "@/lib/booking";
import { SITE } from "@/lib/site";

type ConsultationProps = {
  showHeading?: boolean;
};

const inputClass =
  "mt-1.5 w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-foreground outline-none transition-colors focus:border-brand-orange/50 focus:ring-1 focus:ring-brand-orange/20";

const emptyForm: ContactFormData = {
  name: "",
  email: "",
  company: "",
  project: "",
  message: "",
};

export function Consultation({ showHeading = true }: ConsultationProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>(emptyForm);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const { subject, body } = buildEmailContent(formData);

    setIsSubmitting(true);

    try {
      const result = await sendContactForm(formData);

      toast.success("Project brief sent", {
        description:
          result.channel === "emailjs"
            ? "Thanks for submitting your request."
            : "Your message was submitted — we will review it and get back to you within 24 hours.",
      });

      setFormData(emptyForm);
      setSubmitted(true);
    } catch (error) {
      console.error("Contact form send failed:", error);
      openEmailFallback(subject, body);
      toast.error("Web send failed", {
        description:
          "Your email client opened as a backup so the message can still be sent.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="bg-surface py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <FadeIn>
            <h2 className="text-3xl font-semibold tracking-tighter text-foreground">
              Book a consultation
            </h2>
            <p className="mt-4 max-w-xl text-muted">
              Tell us about your add-in idea. We respond within one business day.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {CONTACT_TRUST_SIGNALS.map((signal) => (
                <span
                  key={signal}
                  className="rounded-full border border-border bg-surface-elevated px-3 py-1.5 text-xs font-medium text-muted"
                >
                  {signal}
                </span>
              ))}
            </div>
          </FadeIn>
        )}

        <div className={`grid gap-12 lg:grid-cols-2 lg:gap-16 ${showHeading ? "mt-12" : ""}`}>
          <FadeIn delay={0.05}>
            {submitted ? (
              <div className="rounded-xl border border-border bg-surface-elevated p-8">
                <p className="text-lg font-medium text-foreground">
                  Thank you — we&apos;ll be in touch shortly.
                </p>
                <p className="mt-2 text-muted">
                  Check your inbox for a reply within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-medium text-brand-orange hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5 rounded-xl border border-border bg-surface-elevated p-6 sm:p-8"
              >
                <div className="rounded-lg border border-border bg-surface p-4">
                  <p className="text-sm font-medium text-foreground">Project inquiry</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    Share the workflow, target Office app, timeline, and any APIs or deployment
                    requirements.
                  </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={inputClass}
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground">
                      Work email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={inputClass}
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground">
                    Company <span className="font-normal text-muted">(optional)</span>
                  </label>
                  <input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className={inputClass}
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-foreground">
                    Project type
                  </label>
                  <select
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                    className={inputClass}
                  >
                    <option value="">Select add-in type...</option>
                    <optgroup label="Microsoft Office">
                      <option value="outlook">Outlook Add-in</option>
                      <option value="excel">Excel Add-in</option>
                      <option value="word">Word Add-in</option>
                      <option value="powerpoint">PowerPoint Add-in</option>
                    </optgroup>
                    <optgroup label="Google Workspace">
                      <option value="google-docs">Google Docs Add-on</option>
                      <option value="google-sheets">Google Sheets Add-on</option>
                      <option value="google-slides">Google Slides Add-on</option>
                      <option value="gmail">Gmail Add-on</option>
                    </optgroup>
                    <option value="multiple">Multiple add-ins / add-ons</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground">
                    What are you building?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`${inputClass} resize-none`}
                    placeholder="Tell us about your workflow, users, Office app, APIs, timeline, and deployment needs..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary-gradient flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-medium text-white transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Sending..." : "Send project brief"}
                  {!isSubmitting && <ArrowRight className="h-4 w-4" />}
                </button>
              </form>
            )}
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="flex flex-col gap-8 lg:pt-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground">What happens next?</h3>
                <ol className="mt-8 space-y-8">
                  {CONSULTATION_STEPS.map((item) => (
                    <li key={item.step} className="flex gap-5">
                      <span className="font-mono text-sm font-medium text-brand-orange">
                        {item.step}
                      </span>
                      <div>
                        <p className="font-medium text-foreground">{item.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-muted">{item.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="rounded-xl border border-border bg-surface-elevated p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-surface">
                    <CalendarCheck className="h-5 w-5 text-brand-orange" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs font-medium tracking-wider text-muted uppercase">
                      Prefer to talk live?
                    </p>
                    <p className="mt-1 font-medium text-foreground">Schedule a discovery call</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      Pick a time that works for you on Google Calendar.
                    </p>
                  </div>
                </div>
                <a
                  href={GOOGLE_BOOKING_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary-gradient mt-5 flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
                >
                  Book on Google Calendar
                  <CalendarCheck className="h-4 w-4" />
                </a>
              </div>

              <div className="rounded-xl border border-border bg-surface-elevated p-6">
                <h3 className="font-semibold text-foreground">What to expect</h3>
                <ul className="mt-4 space-y-3">
                  {CONTACT_EXPECTATIONS.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-muted">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={DIRECT_EMAIL_HREF}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-full border border-border py-3 text-sm font-medium text-foreground transition-colors hover:border-brand-orange/40 hover:text-brand-orange"
                >
                  Email directly
                  <Mail className="h-4 w-4" />
                </a>
                <p className="mt-3 text-center text-xs text-muted">{SITE.email}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
