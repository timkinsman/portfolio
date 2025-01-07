"use server";

import { cookies } from "next/headers";

export async function getTheme(): Promise<"light" | "dark" | undefined> {
  const cookieStore = await cookies();

  // Get cookie
  return cookieStore.get("theme")?.value as "light" | "dark" | undefined;
}
