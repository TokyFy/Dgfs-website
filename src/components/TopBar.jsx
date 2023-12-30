"use client"

import React, {useEffect} from 'react';
import Image from "next/image";
import { useWindowScroll } from "@uidotdev/usehooks";

function TopBar() {
    const [{ x, y }] = useWindowScroll();

    return (
        <div className={`px-14 top-0 left-0 z-[999]  lg:px-32 transition-all duration-500 overflow-hidden ${y >= 1 ? "h-0" : "h-24"}`}>
            <div className="container mx-auto h-24 justify-between py-4 flex items-center">
                <Image className="h-full w-auto" width={186} height={48} src={"/assets/gov.png"} alt={""}/>
                <Image className="h-full w-auto mix-blend-multiply" width={186} height={48} src={"/assets/minsan.png"} alt={""}/>
            </div>

            {/*<div className={"absolute bottom-0 left-1/2 -translate-x-1/2 bg-green h-[1px] w-2/12"}>*/}
            {/*</div>*/}
        </div>
    );
}

export default TopBar;