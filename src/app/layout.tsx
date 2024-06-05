import type { Metadata } from "next";
import { Sora } from "next/font/google";
import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";
import NavBar from "../components/layouts/Navbar";
import "./globals.css";

import { AnimatePresence, motion } from "framer-motion";


const sora = Sora({
    subsets: ["latin"],
    variable: "--font-sora",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"]
})

export const metadata: Metadata = {
    title: "Portfolio",
    description: "Treyy's Portfolio",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`relative w-full h-screen overflow-hidden bg-purple-800 text-white bg-cover bg-no-repeat ${sora.variable}`}>
                <Header />
                <NavBar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
