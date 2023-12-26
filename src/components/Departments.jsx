'use client'


import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import {ArrowDown, ArrowRight, ChevronDown, ChevronUp} from "lucide-react";

function Departments(props) {
    return (
        <div className="p-24 px-14 lg:px-32 flex flex-col gap-12 bg-green bg-opacity-10">
            <h1 className="text-green border-b-2 border-red text-2xl lg:text-3xl font-bold w-max py-2">
                Directions rattachées :
            </h1>

            <p  data-aos="fade-down" >
                Au sein du paysage de la santé, la Direction Générale de la Fourniture des Soins assume un rôle central
                en orchestrant une variété d'entités déterminantes. Ces départements et services, chacun spécialisé dans
                des aspects clés des soins de santé, forment un ensemble harmonieux œuvrant de concert pour garantir une
                prestation de soins optimale. Parmi eux :
            </p>

            <div  data-aos="fade-up" className="flex">

                <Accordion.Root type={"multiple"}
                                className="flex flex-col  divide-y  divide-white w-full border-y border-white">

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
                                <span className="text-green font-bold">Laboratoires d’Analyses Médicales Malagasy</span>
                                <span>LAMM</span>
                            </p>
                        }
                        id={"07"}
                    />

                    <Department
                        content={"Service de Suivi et d ’Evaluation des Performances des Structures Sanitaires"}
                        header={
                            <p className={"flex gap-6 text-red justify-between grow font-bold"}>
                                <span className="text-green font-bold">Service de Suivi et d ’Evaluation des Performances des Structures Sanitaires</span>
                                <span> SSEPSS</span>
                            </p>
                        }
                        id={"08"}
                    />


                    <Department
                        content={"Service de Management Qualité et Projets d’Etablissement Hospitaliers"}
                        header={
                            <p className={"flex gap-6 text-red justify-between grow font-bold"}>
                                <span className="text-green font-bold">Service de Management Qualité et Projets d’Etablissement Hospitaliers</span>
                                <span> SMQPEH</span>
                            </p>
                        }
                        id={"09"}
                    />

                    <Department
                        content={"Service Administratif et Financier"}
                        header={
                            <p className={"flex gap-6 text-red justify-between grow font-bold"}>
                                <span className="text-green font-bold">Service Administratif et Financier</span>
                                <span>SAF</span>
                            </p>
                        }
                        id={"10"}
                    />

                    <Department
                        content={"Service d’Appui à la Recherche, à la Formation Continue et à la Gestion de Connaissance"}
                        header={
                            <p className={"flex gap-6 text-red justify-between grow font-bold"}>
                                <span className="text-green font-bold">Service d’Appui à la Recherche, à la Formation Continue et à la Gestion de Connaissance</span>
                                <span> SARFCGC</span>
                            </p>
                        }
                        id={"11"}
                    />

                </Accordion.Root>

            </div>
        </div>
    );
}

function Department({id, header, content}) {
    return (
        <Accordion.Item value={id} className="">
            <Accordion.Header
                data-aos="fade-right"
            >
                <Accordion.Trigger
                    asChild>
                    <div className="py-6 w-full text-start flex justify-between items-start cursor-pointer gap-3">
                        <div className="flex gap-3 grow">
                            {
                                header
                            }
                        </div>
                        <div className="text-neutral-400 flex items-start">
                            <ArrowRight/>
                        </div>
                    </div>
                </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content asChild>
                <div
                    className="border-t data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden">
                    <div className={"p-6 bg-neutral-50"}>
                        {content}
                    </div>
                </div>
            </Accordion.Content>
        </Accordion.Item>
    )
}

export default Departments;