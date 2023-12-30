'use client'


import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import {ArrowDown, ArrowRight, ChevronDown, ChevronRight, ChevronUp} from "lucide-react";

function Departments(props) {
    return (
        <section className="">
            <div className="container mx-auto flex flex-col gap-12">
                <h1 className="text-green font-heading border-b-2 border-red text-2xl lg:text-3xl font-bold w-max py-2">
                    Les directions rattachées :
                </h1>

                <div data-aos="fade-up" className="flex">

                    <div className="flex flex-col  divide-y  divide-green w-full border-y border-white">

                        <Department
                            content={"Direction de la Pharmacie, des Laboratoires et de la Médecine Traditionnelle"}
                            header={
                                <p className={"flex gap-6 text-red justify-between grow font-bold"}>
                                    <span className="text-green"> Direction de la Pharmacie, des Laboratoires et de la Médecine Traditionnelle</span>
                                    <span className="">DPLMT</span>
                                </p>
                            }
                            id={"01"}
                        />

                        <Department
                            content={"Direction des Hôpitaux des Régions et des Districts"}
                            header={
                                <p className={"flex gap-6 text-red justify-between grow font-bold"}>
                                    <span className="text-green font-bold">Direction des Hôpitaux des Régions et des Districts</span>
                                    <span className="">DHRD</span>
                                </p>
                            }
                            id={"02"}
                        />

                        <Department
                            content={"Direction des Soins de Santé de Base"}
                            header={
                                <p className={"flex gap-6 text-red justify-between grow font-bold"}>
                                    <span className="text-green font-bold">Direction des Soins de Santé de Base</span>
                                    <span> DSSB</span>
                                </p>
                            }
                            id={"03"}
                        />

                        <Department
                            content={"Direction du Centre d ’Aide Médicale d’Urgence de Madagascar"}
                            header={
                                <p className={"flex gap-6 text-red justify-between grow font-bold"}>
                                    <span className="text-green font-bold">Direction du Centre d ’Aide Médicale d’Urgence de Madagascar</span>
                                    <span> DCAMUM</span>
                                </p>
                            }
                            id={"04"}
                        />

                        <Department
                            content={"Direction de la Transfusion Sanguine"}
                            header={
                                <p className={"flex gap-6 text-red justify-between grow font-bold"}>
                                    <span className="text-green font-bold">Direction de la Transfusion Sanguine</span>
                                    <span> DTS</span>
                                </p>
                            }
                            id={"05"}
                        />

                        <Department
                            content={"Direction des Instituts de Formation des Paramédicaux"}
                            header={
                                <p className={"flex gap-6 text-red justify-between grow font-bold"}>
                                    <span className="text-green font-bold">Direction des Instituts de Formation des Paramédicaux</span>
                                    <span> DIFP</span>
                                </p>
                            }
                            id={"06"}
                        />

                        <Department
                            content={"Laboratoires d’Analyses Médicales Malagasy"}
                            header={
                                <p className={"flex gap-6 text-red justify-between grow font-bold"}>
                                    <span
                                        className="text-green font-bold">Laboratoires d’Analyses Médicales Malagasy</span>
                                    <span>LAMM</span>
                                </p>
                            }
                            id={"07"}
                        />

                    </div>

                </div>
            </div>
        </section>
    );
}

function Department({id, header, content}) {
    return (
            <div className="py-6 w-full text-start flex justify-between items-start cursor-pointer gap-3 hover:bg-green-secondary px-4">
                <div className="flex gap-3 grow">
                    {
                        header
                    }
                </div>
                <div className="text-neutral-400 flex items-start">
                    <ChevronRight/>
                </div>
            </div>
    )
}

export default Departments;