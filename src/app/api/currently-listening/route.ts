/* eslint-disable @typescript-eslint/no-explicit-any */
import { env } from "@/env.mjs";
import { PlexAPI } from "@lukehagar/plexjs";
import { NextResponse } from "next/server";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  // "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

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
      return NextResponse.json(
        {
          data: null,
          isError: false,
          message: "Active session not found.",
        },
        {
          headers: CORS_HEADERS,
        },
      );
      // throw new Error("Active session not found");
    }

    const { grandparentTitle, title } = activeSession;

    const data = { artist: grandparentTitle, track: title };
    return NextResponse.json(
      {
        data,
        isError: false,
        message: null,
      },
      {
        headers: CORS_HEADERS,
      },
    );
  } catch (error: any) {
    console.error("API error occurred", error.message);
    return NextResponse.json(
      {
        data: null,
        isError: true,
        message: error.message,
      },
      {
        status: 500,
        headers: CORS_HEADERS,
      },
    );
  }
}

// export function OPTIONS() {
//   return new Response(null, {
//     status: 204,
//     headers: CORS_HEADERS,
//   });
// }
