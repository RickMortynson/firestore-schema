import "dotenv/config";
import z from "zod";

const envSchema = z.object({
  PROJECT_ID: z.string().min(1),
  PRIVATE_KEY: z.string().min(1),
  CLIENT_EMAIL: z.string().min(1),
});

export const env = envSchema.parse(
  process.env
);
