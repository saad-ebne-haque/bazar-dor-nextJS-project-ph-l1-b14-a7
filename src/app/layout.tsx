import type { Metadata } from "next";
import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";


const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ['bengali', 'latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})



export const metadata: Metadata = {
  title: "বাজার দর",
  description: " নিত্যপ্রয়োজনীয় পণ্যের বাজার দর। বাজার দরের তুলনা করুন এবং সাশ্রয়ী মূল্যে কেনাকাটা করুন।",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${notoSerifBengali.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <main className="container mx-auto grow">
          {children}
        </main>
      </body>
    </html>
  );
}
