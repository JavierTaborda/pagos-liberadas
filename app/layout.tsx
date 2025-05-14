import type { Metadata } from "next";
import {
  ClerkProvider,

} from "@clerk/nextjs";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const urbanist = Urbanist({

  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Management MeruQ",
  description: "Payments & Releases",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${urbanist.className} ${urbanist.className} antialiased`}
      ><ClerkProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
        
          {children}
          <Footer />
        </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}

 
