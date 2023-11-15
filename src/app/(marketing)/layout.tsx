import { marketingConfig } from "@/config/marketing";
import { MainNav } from "@/components/navbar/main-nav";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
import SiteFooter from "@/components/footer/SiteFooter";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="z-40 mx-2 lg:mx-0">
        <div className="flex h-15 lg:h-15 items-center justify-between lg:justify-evenly py-6 sticky top-0 border-none border-gradient border-gradient-primary only-bottom mb-1 backdrop-blur-sm">
          <Link href="/" className="hidden items-center space-x-2 md:flex">
            <Icons.logo />
            <span className="hidden font-bold sm:inline-block">
              {siteConfig.name}
            </span>
          </Link>
          <MainNav items={marketingConfig.mainNav} />
          <a href={siteConfig.links.github} target="_blank" className="shine shine-anim border border-primary bg-transparent btn-gradient rounded-lg px-2 py-1 text-sm">Try LunCo</a>
        </div>
      </header>
      <main className="flex-1 app overflow-x-hidden">{children}</main>
      <SiteFooter />
    </div>
  );
}
