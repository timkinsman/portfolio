import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app isn't
   * built with invalid env vars.
   */
  server: {
    PLEX_IP: z.string(),
    PLEX_PORT: z.string(),
    PLEX_PROTOCOL: z.enum(["http", "https"]),
    PLEX_TOKEN: z.string(),
    PLEX_USER: z.string(),
  },
  /**
   * Specify your client-side environment variables schema here.
   * For them to be exposed to the client, prefix them with `NEXT_PUBLIC_`.
   */
  client: {
    NEXT_PUBLIC_ANALYTICS_ID: z.string(),
    NEXT_PUBLIC_API_URL: z.string().url(),
    NEXT_PUBLIC_CV_GOOGLE_DRIVE_LINK: z.string().url(),
    NEXT_PUBLIC_GTM_ID: z.string(),
  },
  /**
   * Destructure all variables from `process.env` to make sure they aren't tree-shaken away.
   */
  runtimeEnv: {
    NEXT_PUBLIC_ANALYTICS_ID: process.env.NEXT_PUBLIC_ANALYTICS_ID,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_CV_GOOGLE_DRIVE_LINK:
      process.env.NEXT_PUBLIC_CV_GOOGLE_DRIVE_LINK,
    NEXT_PUBLIC_GTM_ID: process.env.NEXT_PUBLIC_GTM_ID,
    PLEX_IP: process.env.PLEX_IP,
    PLEX_PORT: process.env.PLEX_PORT,
    PLEX_PROTOCOL: process.env.PLEX_PROTOCOL,
    PLEX_TOKEN: process.env.PLEX_TOKEN,
    PLEX_USER: process.env.PLEX_USER,
  },
  skipValidation: !!process.env.CI || !!process.env.SKIP_ENV_VALIDATION,
});
