import React from 'react';
import Image from "next/image";
import {ArrowRight} from "lucide-react";

function Preface(props) {
    return (
        <div className="p-24 px-14 lg:px-32 justify-between bg-green bg-opacity-10 grid  grid-cols-1 lg:grid-cols-2 gap-32">
            <div className="flex flex-col justify-center gap-8 " data-aos="fade-down">
                <h2 className="text-2xl lg:text-3xl font-bold text-green">
                    La Direction Générale de Fourniture des Soins
                </h2>
                <p className="text-neutral-500 text-lg">
                    « Garantir un accès équitable aux soins de santé de qualité pour tous les citoyens Malgaches »,
                    telle est la mission sacrée que la Direction Générale de Fourniture des Soins s’efforce d’accomplir.
                    En tant qu'organisme gouvernemental chargé de coordonner et de superviser les politiques de santé à
                    l'échelle nationale, la DGFS joue un rôle essentiel dans l'amélioration du système de santé. Le
                    Gouvernement actuel, par le biais du Ministère de la Santé Publique, déploie tous les efforts
                    nécessaires pour assurer « la santé pour tous et à tout âge ». Dans cette optique, la DGFS est
                    responsable de la coordination, de l'animation, du suivi et de l'évaluation des directions et des
                    services placés sous son autorité. Ses activités principales consistent à appuyer le développement
                    des hôpitaux publics et privés, des prestations de soins au niveau des centres de santé de base et
                    au niveau communautaire
                </p>

                <div className="font-bold flex items-center justify-end text-green gap-4">
                    <span>Lire la suite</span>
                    <ArrowRight absoluteStrokeWidth/>
                </div>
            </div>

            <div data-aos="zoom-in" className="relative min-h-[320px]">
                <Image fill objectFit={"cover"} src={"/assets/preface.jpeg"} alt={""}/>
            </div>

        </div>
    );
}

export default Preface;