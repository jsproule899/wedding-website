export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="p-10 min-w-dvw">{children}</div>
  )
}