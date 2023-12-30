"use client"

import React from 'react';
import Link from "next/link";
import {Menu} from "lucide-react";
import {useWindowScroll} from "@uidotdev/usehooks";
import Image from "next/image"

function Navbar() {

    const [{ x, y }] = useWindowScroll();

    return (
        <div className="container mx-auto flex justify-between items-center py-4 relative w-full">
            <Link
                href={"/"}
                className="h-12">
                <Image className={`h-full w-auto`} width={186} height={48} src={"/assets/dgfs-logo.svg"} alt={""}/>
            </Link>

            <ul className="gap-14 text-base font-bold text-green items-center cursor-pointer hidden lg:flex">
                <Navitem link={"Accueil"} href={"/"}/>
                <Navitem link={"CHU"} href={"/chu"}/>
                <Navitem link={"Actualités"} href={"/#actu"}/>
                <Navitem link={"Nos partenaire"} href={"/#actu"}/>
                <Link
                    href={"/#contact"}
                    className="bg-red text-white px-8 py-3 rounded-full"
                >
                Contact
                </Link>
            </ul>

            {/*<div className="text-green lg:hidden">*/}
            {/*    <Menu absoluteStrokeWidth size={48}/>*/}
            {/*</div>*/}
        </div>
    );
}


function Navitem({link, href}) {
    return (
        <li className="relative after:w-0 after:h-[3px] after:rounded-md after:absolute after:bg-green after:left-0 after:-bottom-[1px] hover:after:w-full after:transition-all after:duration-300">
            <Link href={href}>
                {link}
            </Link>
        </li>
    )
}


export default Navbar;