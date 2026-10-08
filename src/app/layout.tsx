import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";



const hindSiliguri = Hind_Siliguri({
  subsets: ['bengali', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-hind-siliguri'
})

export const metadata: Metadata = {
  title: "বাজার দর",
  description: "বাজার দর - বাংলাদেশের বাজারের সর্বশেষ দাম, বাজারের তথ্য, বাজারের খবর এবং আরও অনেক কিছু।",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      data-scroll-behavior="smooth"
      lang="bn"
      className={`h-full antialiased  ${hindSiliguri.variable}`}
    >
      <body className={` min-h-full flex flex-col`}>
        <Navbar></Navbar>
        <main className="grow bg-[#F0F5F0]">
          {children}
        </main>

        <Footer></Footer>
      </body>
    </html>
  );
}


