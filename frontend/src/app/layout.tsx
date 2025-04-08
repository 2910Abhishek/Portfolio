import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '../context/ThemeContext';
import ThemeToggle from '../components/ThemeToggle';
import Navbar from '../components/Navbar';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abhishek Parmar - Portfolio",
  description:
    "Personal portfolio of Abhishek Parmar, showcasing AI solutions and automation projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} 
        bg-white dark:bg-gray-900
        text-gray-900 dark:text-white
        transition-colors duration-300 
        min-h-screen`}
      >
        <ThemeProvider>
          <div className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-900 min-h-screen">
            <Navbar />
            <main className="relative z-10">{children}</main>
            <ThemeToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}