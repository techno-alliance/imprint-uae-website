import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroller from "@/components/SmoothScroll";
import Transition from "@/components/Transition";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Imprint printing press",
  description: "Designed by HR Minds Engineered for HR Succes| AI based Job Description Creation| Smart Candidate Profile Management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SmoothScroller/>
        <Header/>
        <Transition/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}


