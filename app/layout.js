import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Journal App",
  description: "Write in Journal",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          <div className="bg-white fixed inset-0 z-[-1]" />
          <Header />
          <main className="min-h-screen">{children}</main>
          <footer className="py-12 bg-black bg-opacity-5 ">
            <div className="mx-auto px-4 text-center font-semibold text-2md">
              Developed by Sagar✌️
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
