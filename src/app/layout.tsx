import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Become Digital - Policies",
  description: "Terms, Conditions and Privacy Policies for Become Digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <header className="py-6 px-4 md:px-8 border-b border-gray-800 bg-[#0B1120]/90 backdrop-blur sticky top-0 z-50">
          <div className="container mx-auto">
            <div className="flex items-center gap-2">
              {/* Simple text logo based on request - can be replaced with Image if we had one */}
              <span className="text-2xl font-bold tracking-tight">
                <span className="text-white">become</span>
                <span className="text-[#00C7B1]">digital</span>
              </span>
            </div>
          </div>
        </header>
        <main className="flex-grow container mx-auto px-4 py-8 md:py-12 md:px-8">
          {children}
        </main>
        <footer className="py-8 text-center text-gray-500 text-sm border-t border-gray-800 mt-auto">
          <div className="container mx-auto">
            <p>
              © {new Date().getFullYear()} Become Digital. Todos los derechos
              reservados.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
