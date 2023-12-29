import React from 'react';
import {Calendar, icons, AppWindow, Video} from "lucide-react";

function Intro(props) {
    return (
        <section className="p-24 px-14 lg:px-32  bg-green bg-opacity-10">
            <h1 className="text-green border-b-2 border-red text-2xl lg:text-3xl font-bold w-max py-2" data-aos="fade-down">
               Les services rattachés à la DGFS :
            </h1>
           <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-9 py-12">
               <IntroDetails
                   title={"Service de Suivi et d ’Evaluation des Performances des Structures Sanitaires"}
                   Acronym={"SSEPESS"}
                   content={
                       "Nous organisons régulièrement des caravanes médicales, des campagnes de sensibilisation et des programmes de formation."
                   }/>

               <IntroDetails
                   title={"Service de Management Qualité et Projets d’Etablissement Hospitaliers"}
                   Acronym={"SMQPEH"}
                   content={"Des témoignages de patients, de professionnels de la santé ou d'autres parties prenantes qui ont bénéficié de nos services. "}/>

               <IntroDetails
                   title={"Service Administratif et Financier"}
                   Acronym={"SAF"}
                   content={"Des témoignages de patients, de professionnels de la santé ou d'autres parties prenantes qui ont bénéficié de nos services. "}/>

               <IntroDetails
                   title={"Service d’Appui à la Recherche, à la Formation Continue et à la Gestion de Connaissance"}
                   Acronym={"SARFCGC"}
                   content={"Des témoignages de patients, de professionnels de la santé ou d'autres parties prenantes qui ont bénéficié de nos services. "}/>
           </div>

        </section>
    );
}


function IntroDetails({title, Acronym, content , ...props}) {
    return (
        <div className="flex flex-col gap-3 p-6 rounded-sm border-2 border-green" {...props}>
            <div className="text-2xl text-red font-bold">
                {Acronym}
            </div>
            <h2 className="text-green  text-lg font-medium italic">{title}</h2>
            {/*<div className="text-neutral-500  text-justify">{content}</div>*/}
        </div>
    )
}

export default Intro;