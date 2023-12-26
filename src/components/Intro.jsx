import React from 'react';
import {Calendar, icons, AppWindow, Video} from "lucide-react";

function Intro(props) {
    return (
        <section className="p-24 px-32 grid grid-cols-4 gap-9">
            <div className="p-6 bg-green text-white gap-6 flex flex-col rounded-lg">
                <h2 className="text-lg font-bold">Explorez notre site !</h2>

                <p className="text-base break-words">
                    Nous vous invitons à explorer notre site pour découvrir nos programmes, nos initiatives et nos
                    services. Vous trouverez des informations précieuses sur les mesures que nous prenons pour améliorer
                    la santé de la population...
                </p>

                <a href="/#actu" className="bg-white text-green p-2 px-4 ml-auto w-max text-sm font-bold rounded-sm">Découvrir
                    plus</a>
            </div>

            <IntroDetails
                title={"Initiatives et programmes"}
                Icon={<Calendar size={42} absoluteStrokeWidth/>}
                content={
                   " Nous organisons régulièrement des caravanes médicales, des campagnes de sensibilisation et des programmes de formation."
                }/>

            <IntroDetails
                title={"Actualités et événements "}
                Icon={<AppWindow size={42} absoluteStrokeWidth/>}
                content={"Des témoignages de patients, de professionnels de la santé ou d'autres parties prenantes qui ont bénéficié de nos services. "}/>

            <IntroDetails
                title={"Témoignages et impacts"}
                Icon={<Video size={42} absoluteStrokeWidth/>}
                content={"Des témoignages de patients, de professionnels de la santé ou d'autres parties prenantes qui ont bénéficié de nos services. "}/>

        </section>
    );
}


function IntroDetails({title, Icon, content , ...props}) {
    return (
        <div className="flex flex-col gap-3 p-6 rounded-lg scale-90 border-2 border-green" {...props}>
            <div className="text-red">
                {Icon}
            </div>
            <h2 className="text-green font-bold text-xl">{title}</h2>
            <div className="text-neutral-500 text-justify">{content}</div>
        </div>
    )
}

export default Intro;