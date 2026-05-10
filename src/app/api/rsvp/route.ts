import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { MdPlusOne } from "react-icons/md";

export async function POST(request: Request) {
  const data = await request.json();

  const { guests } = data;
  for (const guest of guests) {
    const { rows, error } = await rsvp(guest);

    if (error) {
      if (error.message === "Required field missing") return NextResponse.json({ ok: false, error: error.message }, { status: 422 })
      return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    }

    console.log("RSVP processed for guest:", guest.name, "DB response:", rows)
  };

  return NextResponse.json({ ok: true, });
}


async function rsvp(guest: any) {

  const { name, attendance, mainChoice, dessertChoice, dietryReqs, songRequest, plusOne } = guest

  if (!name || !attendance || (attendance === "accept" && (!mainChoice || !dessertChoice))) return { error: new Error("Required field missing") };

  const { rows } = await db.query(`SELECT id FROM rsvps WHERE guest_name = $1`, [guest.name]);

  const existingId = rows[0]?.id;

  if (existingId) {
    try {
      const { rows } = await db.query(`UPDATE rsvps SET guest_name = $1, attendance = $2, main_choice = $3, dessert_choice = $4, dietary_restrictions = $5, song_request = $6 WHERE id = $7`,
        [name, attendance, mainChoice, dessertChoice, dietryReqs, songRequest, existingId]);
      return { rows };
    } catch (error: any) {
      console.error("Database update error:", error);
      return { error: new Error("Database update error: " + error.message) };
    }
  }
  try {
    const { rows } = await db.query(`INSERT INTO rsvps (guest_name, attendance, main_choice, dessert_choice, dietary_restrictions, song_request, plus_one) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id`,
      [name, attendance, mainChoice, dessertChoice, dietryReqs, songRequest, plusOne]);
    return { rows };
  } catch (error: any) {
    console.error("Database insert error:", error);
    return { error: new Error("Database insert error: " + error.message) };
  }
}
