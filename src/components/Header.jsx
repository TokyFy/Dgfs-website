"use client"

import React, {useEffect} from 'react';
import Image from "next/image";
import AOS from "aos";
import {Quote} from "lucide-react"

function Header(props) {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <header
            className={"p-24 px-14 lg:px-32 relative  bg-fixed bg-no-repeat bg-center bg-cover  flex items-center justify-center"}>
            <div className="container mx-auto flex flex-col gap-12">
                <h1 className="text-green font-heading font-bold text-center text-5xl">“ Garantir un accès équitable aux soins de santé de qualité pour tous les citoyens Malagasy ”</h1>
                <div className="relative h-[50vh] grayscale rounded-3xl overflow-hidden">
                    <Image fill objectFit="cover" src={"/assets/hero-bg.jpeg"} alt={""}/>
                </div>
            </div>
        </header>
    );
}

export default Header;