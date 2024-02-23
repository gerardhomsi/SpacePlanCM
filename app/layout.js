import { Source_Serif_4 } from "next/font/google";
// import { PT_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTop";

const ptSerif = Source_Serif_4({ subsets: ["latin"] });

export const metadata = {
  title: "SpacePlanCM",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html className={ptSerif.className}>
      <body>
        <Navbar />
        {children}
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
