// import { SiteFooter } from "@/components/layouts/site-footer";
import { SiteFooter } from "@/components/layouts/footer";
import { SiteHeader } from "@/components/layouts/header";

interface LobbyLayoutProps {
  children: React.ReactNode;
}

export default async function LobbyLayout({ children }: LobbyLayoutProps) {
  const user = null;

  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader user={user} />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
