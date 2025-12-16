import { supabaseServer } from "@/lib/supabase";
import Dashboard from "./dashboard";

export default async function AdminPage() {
  const { data: rsvps } = await supabaseServer.from("rsvps").select("*");
  
  return <Dashboard rsvps={rsvps || []} />;
}
