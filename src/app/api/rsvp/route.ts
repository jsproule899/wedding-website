import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase";

export async function POST(request: Request) {
  const data = await request.json();

  const { guests } = data;
  for (const guest of guests) {
    const { error } = await rsvp(guest);


    if (error) {
      console.error("Supabase insert error:", error);
      if (error.message) return NextResponse.json({ ok: false, error: error.message }, { status: 400 })

      return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    }
  };

  return NextResponse.json({ ok: true });
}


async function rsvp(guest: any) {

  const { name, attendance, mainChoice, dessertChoice, dietryReqs, songRequest } = guest

  if (!name || !attendance || (attendance === "accept" && (!mainChoice || !dessertChoice))) return { error: new Error("Required field missing") };

  const { data, error } = await supabaseServer.from("rsvps").select("id").eq("guest_name", guest.name);

  if (error) return { error };

  const existingId = data?.[0]?.id;

  if (existingId) {
    return supabaseServer
      .from("rsvps")
      .update({
        guest_name: name,
        attendance: attendance,
        main_choice: mainChoice,
        dessert_choice: dessertChoice,
        dietary_restrictions: dietryReqs,
        song_request: songRequest
      })
      .eq("id", existingId)
  }

  return supabaseServer
    .from("rsvps")
    .insert({
      guest_name: name,
      attendance: attendance,
      main_choice: mainChoice,
      dessert_choice: dessertChoice,
      dietary_restrictions: dietryReqs,
      song_request: songRequest,
    });


}