import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {Menu} from "lucide-react";

function Navbar(props) {
    return (
        <div className="flex justify-between items-center py-4">
                <Link
                    href={"/"}
                    className="h-12">
                    <Image className="h-full w-auto" width={186} height={48} src={"/assets/dgfs-logo.svg"} alt={""}/>
                </Link>

                <ul className="gap-14 text-base font-semibold text-green items-center cursor-pointer hidden lg:flex">
                    <Navitem link={"Accueil"} href={"/"}/>
                    <Navitem link={"CHU"} href={"/chu"}/>
                    <Navitem link={"Actualités"} href={"/#actu"}/>
                    <Link
                        href={"/#contact"}
                        className="bg-red text-white p-3 px-8 font-semibold rounded-md">
                        Contact
                    </Link>
                </ul>

                <div className="text-green lg:hidden">
                    <Menu absoluteStrokeWidth size={48}/>
                </div>
        </div>
    );
}


function Navitem({link , href}) {
    return (
        <li className="relative after:w-0 after:h-[2px] after:absolute after:bg-green after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300">
            <Link href={href}>
                {link}
            </Link>
        </li>
    )
}


export default Navbar;