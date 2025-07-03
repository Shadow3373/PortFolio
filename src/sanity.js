import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "unkw7ixg", // 👈 replace with your actual ID
  dataset: "production", // or your custom dataset name
  apiVersion: "2025-07-02", // use today's date
  useCdn: true, // `false` if real-time preview is needed
});
