import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

type SiteShellProps = {
  children: React.ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
