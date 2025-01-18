import { env } from "@/env.mjs";
import { GetCurrentlyListeningApiResponse } from "@/types/api";
import { PlexAPI } from "@lukehagar/plexjs";
import { NextResponse } from "next/server";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function GET(): Promise<
  NextResponse<GetCurrentlyListeningApiResponse>
> {
  try {
    console.log("starting api call");
    const plexAPI = new PlexAPI({
      accessToken: env.PLEX_TOKEN,
      ip: env.PLEX_IP,
      port: env.PLEX_PORT,
      // protocol: "http",
    });

    console.log("plexAPI", plexAPI);

    const result = await plexAPI.sessions.getSessions();

    console.log("result", result);

    const metadata = result.object?.mediaContainer?.metadata;
    const activeSession = metadata?.find(
      (m) => m.user?.title === env.PLEX_USER && m.type === "track",
    );

    console.log("activeSession", activeSession);

    if (!activeSession) {
      throw new Error("Active session not found.");
    }

    const { grandparentTitle: artist, title: track } = activeSession;

    if (!artist || !track) {
      throw new Error("Active session track information not found.");
    }

    const data = { artist: artist, track: track };

    console.log("data", data);

    return NextResponse.json(
      {
        data,
        error: null,
        isError: false,
        isSuccess: true,
      },
      {
        status: 200,
        headers: CORS_HEADERS,
      },
    );
  } catch (error: unknown) {
    console.error("API error occurred", error);
    return NextResponse.json(
      {
        data: undefined,
        error: error,
        isError: true,
        isSuccess: false,
      },
      {
        status: 500,
        headers: CORS_HEADERS,
      },
    );
  }
}

export function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: CORS_HEADERS,
  });
}
