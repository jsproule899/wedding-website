export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="mx-auto p-10 w-dvw">{children}</div>
  )
}