import React from 'react';
import Image from "next/image";
import {ArrowRight} from "lucide-react";

function Preface(props) {
    return (
        <div className="p-24 container mx-auto justify-between grid  grid-cols-1 lg:grid-cols-2 gap-32 ">
            <div className="flex flex-col justify-center gap-8 " data-aos="fade-down">
                <h2 className="text-2xl lg:text-4xl font-bold text-green">
                    La Direction Générale de Fourniture des Soins
                </h2>
                <p className="text-neutral-500 text-lg text-justify">
                    « Garantir un accès équitable aux soins de santé de qualité pour tous les citoyens Malgaches »,
                    telle est la mission sacrée que la Direction Générale de Fourniture des Soins s’efforce d’accomplir.
                    En tant qu'organisme gouvernemental chargé de coordonner et de superviser les politiques de santé à
                    l'échelle nationale, la DGFS joue un rôle essentiel dans l'amélioration du système de santé...
                </p>

                <div className="font-bold flex items-center justify-end text-green gap-4">
                    <span>Lire la suite</span>
                    <ArrowRight absoluteStrokeWidth/>
                </div>
            </div>

            <div data-aos="zoom-in" className="relative min-h-[320px]">
                <Image fill objectFit={"cover"} src={"/assets/dgfs.jpg"} alt={""}/>
            </div>

        </div>
    );
}

export default Preface;