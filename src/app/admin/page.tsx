export const dynamic = "force-dynamic";

import Dashboard from "./dashboard";
import { db } from "@/lib/db";

export default async function AdminPage() {
  try {
    const { rows } = await db.query(`SELECT * FROM rsvps order by id`);
    return <Dashboard rsvps={rows} />;
  } catch (error) {
    console.error("Error fetching RSVPs:", error);
    return <div>Error fetching RSVPs</div>;
  }
}
