"use server";

import { cookies } from "next/headers";

export async function setTheme(theme: "light" | "dark") {
  const cookieStore = await cookies();

  // Set cookie
  cookieStore.set("theme", theme);
}
