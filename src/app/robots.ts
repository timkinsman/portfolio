import { headers } from "next/headers";

export default async function robots() {
  const headersList = await headers();
  const domain = headersList.get("host") as string;

  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: `${domain}/sitemap.xml`,
    host: `${domain}`,
  };
}
