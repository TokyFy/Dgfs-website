import Image from "next/image";
import {getChus} from "@/app/chu/page";
import {MDXRemote} from "next-mdx-remote/rsc";
import React from "react";
import formatNumber from "@/utils/number";

export default async function dep({params}) {

    return (
        <>
            <div className="px-32 py-12 flex flex-col gap-4 container mx-auto">
                <div className="flex gap-3 flex-col border-b-2 border-green py-12">
                    <h1 className="font-bold text-red text-5xl">DPLMT</h1>
                    <p className="font-bold text-green italic">Direction de la Pharmacie, des Laboratoires et de la
                        Médecine Traditionnelle</p>
                </div>

                <div className="py-7">
                    Composée du Service de la Pharmacopée et de la Médecine Préventive (SPMT), du Service du
                    Développement des Laboratoires (Slab) et du Service de la Gestion des Intrants de la Santé (SGIS),
                    la DPLMT joue un rôle essentiel dans l’amélioration du système de santé, notamment dans
                    l’approvisionnement et le suivi de la fourniture en médicaments et intrants de santé dans toutes les
                    structures sanitaires publiques. Il revient également à la responsabilité de cette Direction en
                    particulier de concevoir et faire respecter le cadre juridique et règlementaire sur l’ouverture et
                    le fonctionnement des structures de vente de médicaments publics et privés. Le domaine de la vente
                    de médicaments privés est composé essentiellement de la Pharmacie d’Officine, dépôt de médicaments
                    et les importateurs et grossistes de médicaments. Celui de la vente de médicaments publiques est
                    quant à lui composé de la Pharmacie de gros de Districts et de l’Unité de Pharmacie pour les CHU.
                    Une des responsabilités majeures attribuées à la DPLMT est également d’assurer le suivi du
                    fonctionnement des laboratoires d’analyses médicales et des centres d’imageries de toutes les
                    formations sanitaires. La promotion et l’intégration de la pharmacopée traditionnelle malagasy dans
                    le système de santé font également partie de ses missions sacrées.
                </div>
            </div>
        </>
    )
}

export async function generateStaticParams() {
    const chus = await getChus();
    return chus.map((chu) => ({id: chu.id}));
}
