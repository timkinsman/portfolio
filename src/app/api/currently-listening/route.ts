/* eslint-disable @typescript-eslint/no-explicit-any */
import { env } from "@/env.mjs";
import { PlexAPI } from "@lukehagar/plexjs";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const plexAPI = new PlexAPI({
      accessToken: env.PLEX_TOKEN,
      ip: env.PLEX_IP,
      port: env.PLEX_PORT,
      protocol: "http",
    });

    const result = await plexAPI.sessions.getSessions();

    const metadata = result.object?.mediaContainer?.metadata;
    const activeSession = metadata?.find(
      (m) => m.user?.title === env.PLEX_USER && m.type === "track",
    );

    if (!activeSession) {
      throw new Error("Active session not found");
    }

    const { grandparentTitle, title } = activeSession;

    const data = { artist: grandparentTitle, track: title };
    return NextResponse.json({ data });
  } catch (err: any) {
    return NextResponse.json({ error: err.message });
  }
}
