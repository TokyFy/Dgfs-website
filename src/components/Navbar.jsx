"use client"

import React from 'react';
import Link from "next/link";
import {Menu} from "lucide-react";
import {useWindowScroll} from "@uidotdev/usehooks";
import Image from "next/image"

function Navbar() {

    const [{ x, y }] = useWindowScroll();

    return (
        <div className="flex justify-between items-center py-4 relative w-full">
            <Link
                href={"/"}
                className="h-12">
                <Image className={`h-full w-auto ${y <= 0.1 && "opacity-0"}`} width={186} height={48} src={"/assets/logo-min.svg"} alt={""}/>
            </Link>

            <ul className="gap-14 text-base font-bold text-green items-center cursor-pointer hidden lg:flex absolute left-1/2 -translate-x-1/2">
                <Navitem link={"Accueil"} href={"/"}/>
                <Navitem link={"CHU"} href={"/chu"}/>
                <Navitem link={"Actualités"} href={"/#actu"}/>
                <Navitem link={"Contact"} href={"//#contact"}/>
            </ul>

            <div className="text-green lg:hidden">
                <Menu absoluteStrokeWidth size={48}/>
            </div>
        </div>
    );
}


function Navitem({link, href}) {
    return (
        <li className="relative after:w-0 after:h-[2px] after:absolute after:bg-green after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300">
            <Link href={href}>
                {link}
            </Link>
        </li>
    )
}


export default Navbar;