"use server";

import { auth, signIn, signOut } from "./auth";
import { updateGuest } from "./data-service";
import { supabase } from "./supabase";

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function updateProfile(formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");

  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    throw new Error("Please provide a valid nationalID");

  const updateData = { nationality, countryFlag, nationalID };

  updateGuest(session.user.guestId, updateData);

  // const { data, error } = await supabase
  //   .from("guests")
  //   .update(updateData)
  //   .eq("id", session.user.guestId);

  // if (error) {
  //   console.error(error);
  //   throw new Error("Guest could not be updated");
  // }
}
