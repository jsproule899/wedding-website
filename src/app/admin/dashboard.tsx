"use client";

export default function Dashboard({ rsvps }: { rsvps: any[] }) {
  const attending = rsvps.filter(r => r.attendance === "accept").length;
  const notAttending = rsvps.filter(r => r.attendance === "decline").length;
  const columns = [
    { key: "guest_name", label: "Guest" },
    { key: "attendance", label: "Attendance" },
    { key: "main_choice", label: "Main" },
    { key: "dessert_choice", label: "Dessert" },
    { key: "dietary_restrictions", label: "Dietary" },
    { key: "song_request", label: "Song" },
    { key: "plus_one", label: "Plus One" },
    {
      key: "created_at",
      label: "Submitted",
      render: (value: string) => new Date(value).toLocaleDateString(),
    },
  ];
  function exportCSV() {
    const rows = rsvps.map(r => [
      r.guest_name,
      r.attendance,
      r.main_choice || "",
      r.dessert_choice || "",
      r.dietary_restrictions || "",
      r.song_request || "",
      r.plus_one || "",
      new Date(r.created_at).toLocaleDateString(),
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [columns.map(col => col.label), ...rows].map(e => e.join(";")).join("\n");

    const url = encodeURI(csvContent);
    const link = document.createElement("a");
    link.href = url;
    link.download = "wedding_rsvps.csv";
    link.click();
  }

  return (
    <div className="mx-auto overflow-auto text-center">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-4 align-middle mx-auto mb-10 w-xs">
        <div className="border p-6 rounded-lg text-center ">
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
      <table className=" m-auto border border-white overflow-x-visible">
        <thead className="bg-white border text-primary ">
          <tr>
            {columns.map((col, index) => (
              <th key={"col-" + index} className="border border-white p-2">{col.label}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rsvps.map(r => (
            <tr key={r.id} className="font-minerva text-white">
              {columns.map((col) => (
                <td key={col.key} className="border p-2">
                  {col.render ? col.render(r[col.key]) : r[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
