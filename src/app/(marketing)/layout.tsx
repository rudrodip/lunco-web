import { marketingConfig } from "@/config/marketing";
import { MainNav } from "@/components/navbar/main-nav";
import StarCanvas from "@/components/three-scenes/star-canvas";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { Button } from "@nextui-org/react";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="z-40">
        <div className="flex h-15 items-center justify-evenly py-6 sticky top-0 mb-1 backdrop-blur-sm">
          <Link href="/" className="hidden items-center space-x-2 md:flex">
            <Icons.logo />
            <span className="hidden font-bold sm:inline-block">
              {siteConfig.name}
            </span>
          </Link>
          <MainNav items={marketingConfig.mainNav} />
          <Button radius="full" className="border border-primary bg-transparent btn-gradient">Try LunCo</Button>
        </div>
      </header>
      <StarCanvas />
      <main className="flex-1 app">{children}</main>
    </div>
  );
}
