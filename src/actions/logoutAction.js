"use server";
import { cookies } from "next/headers";

export default function logoutAction() {
  const cookieStore = cookies();

  // Delete cookies
  cookieStore.delete("dm_token");
  cookieStore.delete("dm_userid");

  return { success: true };
}
