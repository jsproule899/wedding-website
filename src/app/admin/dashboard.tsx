"use client";

export default function Dashboard({ rsvps }: { rsvps: any[] }) {
  const attending = rsvps.filter(r => r.attendance === "accept").length;
  const notAttending = rsvps.filter(r => r.attendance === "decline").length;

  function exportCSV() {
    const headers = ["Guest Name", "Attendance", "Main Choice", "Dessert Choice", "Dietary Restrictions", "Song Request", "Submitted At"];

    const rows = rsvps.map(r => [
      r.guest_name,
      r.attendance,
      r.main_choice || "",
      r.dessert_choice || "",
      r.dietary_restrictions || "",
      r.song_request || "",
      new Date(r.created_at).toLocaleDateString(),
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers, ...rows].map(e => e.join(";")).join("\n");

    const url = encodeURI(csvContent);
    const link = document.createElement("a");
    link.href = url;
    link.download = "wedding_rsvps.csv";
    link.click();
  }

  return (
    <div className="w-10/12 m-auto">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mx-auto max-w-md mb-10">
        <div className="border p-6 rounded-lg text-center">
          <p className="text-4xl font-bold">{attending}</p>
          <p className="">Attending</p>
        </div>
        <div className="border p-6 rounded-lg text-center">
          <p className="text-4xl font-bold">{notAttending}</p>
          <p className="">Not Attending</p>
        </div>
      </div>

      {/* Export Button */}
      <button
        onClick={exportCSV}
        className="px-6 py-3 bg-white text-primary cursor-pointer rounded mb-8"
      >
        Download CSV
      </button>

      {/* Table */}
      <table className=" m-auto border border-white">
        <thead className="bg-white border text-primary ">
          <tr>
            <th className="border border-white p-2">Guest Name</th>
            <th className="border border-white p-2">Attendance</th>
            <th className="border border-white p-2">Main Choice</th>
            <th className="border border-white p-2">Dessert Choice</th>
            <th className="border border-white p-2">Dietary Restrictions</th>
            <th className="border border-white p-2">Song Request</th>
            <th className="border border-white p-2">Submitted At</th>
          </tr>
        </thead>

        <tbody>
          {rsvps.map(r => (
            <tr key={r.id} className="font-minerva text-white">
              <td className="border p-2">{r.guest_name}</td>
              <td className="border p-2">{r.attendance}</td>
              <td className="border p-2">{r.main_choice}</td>
              <td className="border p-2">{r.dessert_choice}</td>
              <td className="border p-2">{r.dietary_restrictions}</td>
              <td className="border p-2">{r.song_request}</td>
              <td className="border p-2">{new Date(r.created_at).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
