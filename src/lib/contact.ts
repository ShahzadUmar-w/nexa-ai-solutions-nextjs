import emailjs from "@emailjs/browser";
import { SITE } from "@/lib/site";

export type ContactFormData = {
  name: string;
  email: string;
  company: string;
  project: string;
  message: string;
};

export const PROJECT_LABELS: Record<string, string> = {
  outlook: "Outlook Add-in",
  excel: "Excel Add-in",
  word: "Word Add-in",
  powerpoint: "PowerPoint Add-in",
  "google-docs": "Google Docs Add-on",
  "google-sheets": "Google Sheets Add-on",
  "google-slides": "Google Slides Add-on",
  gmail: "Gmail Add-on",
  multiple: "Multiple add-ins / add-ons",
  other: "Other",
};

const emailJsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "service_ybt8hmy",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "template_h5ouk2m",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "Wp3sd3rOvc8u3cpuM",
};

const formSubmitEndpoint = `https://formsubmit.co/ajax/${SITE.email}`;

export function buildEmailContent(formData: ContactFormData) {
  const projectType = PROJECT_LABELS[formData.project] || "Not selected";
  const subject = `Add-in / Add-on Inquiry from ${formData.name}`;
  const body = [
    "Hi Shahzad,",
    "",
    "I would like to discuss an Office or Google Workspace add-in project.",
    "",
    `Name: ${formData.name}`,
    `Email: ${formData.email}`,
    formData.company ? `Company: ${formData.company}` : null,
    `Project type: ${projectType}`,
    "",
    "Project details:",
    formData.message,
    "",
    "Thanks.",
  ]
    .filter(Boolean)
    .join("\n");

  return { projectType, subject, body };
}

async function sendWithEmailJs(
  formData: ContactFormData,
  projectType: string,
  subject: string,
) {
  await emailjs.send(
    emailJsConfig.serviceId,
    emailJsConfig.templateId,
    {
      to_email: SITE.email,
      from_name: formData.name,
      from_email: formData.email,
      reply_to: formData.email,
      project_type: projectType,
      company: formData.company || "Not provided",
      subject,
      message: formData.message,
      submitted_at: new Date().toLocaleString(),
    },
    { publicKey: emailJsConfig.publicKey },
  );
}

async function sendWithFormSubmit(
  formData: ContactFormData,
  projectType: string,
  subject: string,
  body: string,
) {
  const response = await fetch(formSubmitEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      _subject: subject,
      _template: "table",
      _captcha: "false",
      name: formData.name,
      email: formData.email,
      reply_to: formData.email,
      company: formData.company || "Not provided",
      project_type: projectType,
      message: formData.message,
      full_brief: body,
    }),
  });

  if (!response.ok) {
    throw new Error(`FormSubmit failed with status ${response.status}`);
  }
}

export function openEmailFallback(subject: string, body: string) {
  window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export async function sendContactForm(formData: ContactFormData) {
  const { projectType, subject, body } = buildEmailContent(formData);
  const hasEmailJsConfig = Boolean(
    emailJsConfig.serviceId && emailJsConfig.templateId && emailJsConfig.publicKey,
  );

  if (hasEmailJsConfig) {
    await sendWithEmailJs(formData, projectType, subject);
    return { channel: "emailjs" as const };
  }

  await sendWithFormSubmit(formData, projectType, subject, body);
  return { channel: "formsubmit" as const };
}

export const CONTACT_TRUST_SIGNALS = [
  "50+ Office add-ins delivered",
  "Outlook, Excel, Word, PowerPoint",
  "24h response",
] as const;

export const CONTACT_EXPECTATIONS = [
  "Free initial consultation",
  "Clear scope and milestone proposal",
  "Transparent pricing before work starts",
  "Support options after launch",
] as const;
