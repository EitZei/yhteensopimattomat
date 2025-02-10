import Sidenav from "./sidenav";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="p-4 md:max-w-96">
          <Sidenav />
        </div>
        <main className="p-4">{children}</main>
      </div>
    </>
  );
}
