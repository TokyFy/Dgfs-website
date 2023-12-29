import './globals.css'
import Navbar from "@/components/Navbar";
import 'aos/dist/aos.css';

export const metadata = {
    title: 'Dgfs',
    description: 'Direction Générale de Fourniture des Soins '
}

import NextTopLoader from 'nextjs-toploader';
import React from "react";
import TopBar from "@/components/TopBar";

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className="text-base lg:text-lg">
        <NextTopLoader
            shadow={false}
            color={"#ea4335"}
        />
        <main>

            <TopBar/>
            <div className="px-14 sticky top-0 left-0 z-[999] bg-[#e7f0ed] lg:px-32 flex">
                <Navbar/>
            </div>
            {children}
        </main>
        </body>
        </html>
    )
}
