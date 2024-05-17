import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/New/Footer";
import SmoothScroller from "@/components/SmoothScroll";
import Transition from "@/components/Transition";
import AnimatedCursor from "react-animated-cursor";
import { Toaster } from "react-hot-toast";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Imprint UAE | Printing press",
  description: "Looking for a reliable printing press in the UAE? Imprint uae provides fast and affordable printing solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SmoothScroller/>
        <AnimatedCursor
        innerSize={10}
        outerSize={15}
        color='32, 143, 237'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={10}
        clickables={[
          // 'a',
          // 'input[type="text"]',
          // 'input[type="email"]',
          // 'input[type="number"]',
          // 'input[type="submit"]',
          // 'input[type="image"]',
          // 'label[for]',
          // 'select',
          // 'textarea',
          // 'button',
          // '.link',
          'p',
          'h1'
        ]} className="hidden lg:block"/>
        <Header/>
        <Transition/>
        <Toaster position="bottom-right" toastOptions={{duration: 3000}}/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}


