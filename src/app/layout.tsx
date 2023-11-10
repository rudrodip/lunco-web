import { Open_Sans } from "next/font/google";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { Providers } from "@/components/nextui-provider";

import { siteConfig } from "@/config/site";
import "@/styles/globals.css";

const fontSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontHeading = localFont({
  src: "../../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [siteConfig.creator],
  creator: siteConfig.creator.name,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
    type: "website",
    locale: "bn_BD",
  },

  // Twitter metadata
  twitter: {
    card: "summary_large_image",
    site: "@rds_agi",
    title: siteConfig.name,
    description: siteConfig.description,
    image: {
      url: siteConfig.ogImage,
      width: 1200,
      height: 630,
      alt: siteConfig.name,
    },
  },

  // Discord metadata
  discord: {
    title: siteConfig.name,
    type: "website",
    url: siteConfig.url,
    description: siteConfig.description,
    image: {
      url: siteConfig.ogImage,
      width: 1200,
      height: 630,
      alt: siteConfig.name,
    },
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <div className="main">
          <div className="gradient" />
        </div>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
