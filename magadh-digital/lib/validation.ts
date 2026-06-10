import { z } from "zod";
import { BUDGET_RANGES, PROJECT_TYPES } from "@/constants/services";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Name is required").max(80),
  businessName: z.string().trim().max(120).optional().default(""),
  phone: z.string().trim().min(7, "Phone is required").max(24),
  email: z.string().trim().email("Valid email is required").max(120),
  projectType: z.enum(PROJECT_TYPES),
  budget: z.enum(BUDGET_RANGES).optional().or(z.literal("")).default(""),
  message: z.string().trim().min(10, "Message is required").max(1600),
  website: z.string().trim().max(0).optional().default(""),
  startedAt: z.coerce.number().optional().default(0),
  source: z.string().trim().max(240).optional().default("")
});

export type ContactPayload = z.infer<typeof contactSchema>;

export const analyticsSchema = z.object({
  sessionId: z.string().trim().min(8).max(120),
  eventName: z.enum(["page_view", "heartbeat", "page_exit"]),
  path: z.string().trim().max(240).optional().default("/"),
  source: z.string().trim().max(240).optional().default("direct"),
  durationSeconds: z.coerce.number().min(0).max(86_400).optional().default(0)
});
