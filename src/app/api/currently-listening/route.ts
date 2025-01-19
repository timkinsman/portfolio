import { env } from "@/env.mjs";
import { GetCurrentlyListeningApiResponse } from "@/types/api";
import { PlexAPI } from "@lukehagar/plexjs";
import { NextResponse } from "next/server";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export async function GET(): Promise<
  NextResponse<GetCurrentlyListeningApiResponse>
> {
  try {
    const plexAPI = new PlexAPI({
      accessToken: env.PLEX_TOKEN,
      ip: env.PLEX_IP,
      port: env.PLEX_PORT,
      protocol: "http",
    });

    const result = await plexAPI.sessions.getSessions();

    const metadata = result.object?.mediaContainer?.metadata;
    const currentlyListening = metadata?.find(
      (m) => m.user?.title === env.PLEX_USER && m.type === "track",
    );

    if (!currentlyListening) {
      return handleApiSuccess({
        isCurrentlyListening: false,
        currentlyListening: null,
      });
    }

    const { grandparentTitle: artist, title: track } = currentlyListening;

    if (!artist || !track) {
      return handleApiSuccess({
        isCurrentlyListening: false,
        currentlyListening: null,
      });
    }

    const data = { artist: artist, track: track };

    return handleApiSuccess({
      isCurrentlyListening: true,
      currentlyListening: data,
    });
  } catch (error: unknown) {
    return handleApiError(error);
  }
}

export function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: CORS_HEADERS,
  });
}

const handleApiSuccess = <T>(data: T) => {
  return NextResponse.json(
    {
      data,
      error: null,
      isError: false as const,
      isSuccess: true as const,
    },
    {
      status: 200,
      headers: CORS_HEADERS,
    },
  );
};

const handleApiError = (error: unknown) => {
  return NextResponse.json(
    {
      data: null,
      error: `${error}`,
      isError: true as const,
      isSuccess: false as const,
    },
    {
      status: 500,
      headers: CORS_HEADERS,
    },
  );
};
