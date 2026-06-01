export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="mx-auto p-10 overflow-auto h-screen w-dvw">{children}</div>
  )
}