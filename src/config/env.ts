import dotenv from "dotenv";

dotenv.config();

export const apiKey = process.env.PIPEDRIVE_API_KEY;
export const companyDomain = process.env.PIPEDRIVE_COMPANY_DOMAIN;

if (!apiKey || !companyDomain) {
  throw new Error("Missing environment variables");
}