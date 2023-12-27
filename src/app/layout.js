import './globals.css'
import Navbar from "@/components/Navbar";
import 'aos/dist/aos.css';

export const metadata = {
    title: 'Dgfs',
    description: 'Direction Générale de Fourniture des Soins '
}

import NextTopLoader from 'nextjs-toploader';
import Head from "next/head";
import Image from "next/image";
import React from "react";

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className="text-base lg:text-lg">
        <NextTopLoader
            shadow={false}
            color={"#ea4335"}
        />
        <main>
            <div className="px-14 sticky top-0 left-0 z-[999] bg-[#e7f0ed] lg:px-32">
                <div className="h-20 justify-between py-4 flex">
                    <Image className="h-full w-auto" width={186} height={48} src={"/assets/minsan.png"} alt={""}/>
                    <div className="absolute w-14 left-1/2 ">
                        <Image className="h-full w-auto" width={186} height={48} src={"/assets/gov.png"} alt={""}/>
                    </div>
                    <Image className="h-full w-auto" width={186} height={48} src={"/assets/logo-min.svg"} alt={""}/>
                </div>
            </div>

            <div className="px-14 sticky top-0 left-0 z-[999] bg-[#e7f0ed] lg:px-32 h-20 flex">
                <Navbar/>
            </div>
            {children}
        </main>
        </body>
        </html>
    )
}
