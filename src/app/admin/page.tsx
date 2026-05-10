import Dashboard from "./dashboard";
import { db } from "@/lib/db";

export default async function AdminPage() {
  try {
    const { rows: rsvps } = await db.query(`SELECT * FROM rsvps`);
    return <Dashboard rsvps={rsvps} />;
  } catch (error) {
    console.error("Error fetching RSVPs:", error);
    return <div>Error fetching RSVPs</div>;
  }
}
