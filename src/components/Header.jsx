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
            className={"p-24 px-14 lg:px-32 relative bg-hero-gb bg-fixed h-[75vh] bg-no-repeat bg-center bg-cover bg-black bg-opacity-60 bg-blend-multiply flex items-center justify-center"}>
            <div className="flex items-center justify-center flex-col text-center gap-12" data-aos="fade-up"
                 data-aos-offset="0" data-aos-delay="0">
                <div className="w-44 lg:w-[412px] p-6 bg-white rounded-full flex items-center justify-center">
                    <Image className={"w-full h-auto"} width={320} height={242} src={"/assets/dgfs-logo.svg"}
                           alt={"mg gov"}/>
                </div>
                <div className="text-white flex flex-col gap-12 items-center max-w-5xl">
                    <h1 className="font-bold text-center text-4xl lg:text-6xl"> Direction Générale de Fourniture des Soins </h1>
                    <div className="font-semibold lg:w-2/3 inline-flex gap-4 italic text-xl lg:text-2xl">
                        <span className="scale-x-[-1]"><Quote/></span>
                        <span>Garantir un accès équitable aux soins de santé de qualité pour tous les citoyens Malagasy.</span>
                        <span className="self-end"><Quote/></span></div>
                </div>
            </div>
        </header>
    );
}

export default Header;