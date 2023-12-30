import React from 'react';

function Missions(props) {
    return (
        <section className=''>
            <div className="container mx-auto py-24 flex flex-col gap-12 ">
                <div className="ml-auto">
                    <p data-aos="fade-down" className="text-3xl text-justify text-green font-heading">
                        <span className="font-bold">La Direction Générale de Fourniture des Soins</span> a pour mission
                        d’assurer la coordination,
                        l’animation, le suivi et l’évaluation des activités des Directions et des Services placés sous
                        son
                        autorité. Ces activités seront axées principalement à l’appui au développement des Hôpitaux
                        publics et
                        privés de Madagascar, conformément aux axes stratégiques de la réforme Hospitalière et la loi y
                        afférente ainsi qu’au développement des prestations de soins au niveau des Centres de Santé de
                        Base et
                        au niveau communautaire.
                    </p>
                </div>

                <div className="flex flex-col gap-12">
                    <p className="text-4xl font-heading text-green">Nous somme tenue de</p>
                    <div className="grid grid-cols-1 2xl:grid-cols-3 gap-12">
                        <Mission
                            data-aos="fade-left"
                            title={""}
                            text={"Mettre en place la Couverture Sanitaire Universelle (CSU)  en garantissant la\n" +
                                "disponibilité des offres de soins accessibles à tous, en temps opportun et à\n" +
                                "l'emplacement souhaité, tout en étant efficaces, sécurisées, intégrées et axées sur la\n" +
                                "personne."}
                        />

                        <Mission
                            data-aos="fade-right"
                            title={"Elaborer des cadres juridiques "}
                            text={"propices au développement des Formation Sanitaires, et\n" +
                                "instaurer un environnement de travail rassurant et épanouissant pour tous les acteurs\n" +
                                "de la santé"}
                        />
                        <Mission
                            title={"Etablir des partenariats "}
                            text={"en collaboration avec les Directions rattachées en vue d'établir\n" +
                                "un système de soins résilient et de mettre en œuvre la PDSS"}
                            data-aos="fade-left"
                        />

                        <Mission
                            data-aos="fade-right"
                            title={"Assurer la coordination,"}
                            text={"l’animation, le suivi et évaluations des activités des directions\n" +
                                "et services rattachés"}
                        />

                        <Mission
                            data-aos="fade-right"
                            title={"Appui au développement "}
                            text={"des hôpitaux conformément aux axes stratégiques de la\n" +
                                "reforme hospitalières"}
                        />

                        <Mission
                            data-aos="fade-right"
                            title={"Contribuer à l’amélioration de la qualité "}
                            text={"des soins dans les CHU, à l’humanisation\n" +
                                "des soins"}
                        />

                        <Mission
                            data-aos="fade-right"
                            title={"Initier la mise à jour "}
                            text={"des normes en ressources, techniques, prestations au niveau des CHU"}
                        />

                        <Mission
                            data-aos="fade-right"
                            title={"Développer le partenariat public privé au niveau des CHU"}
                        />

                        <Mission
                            data-aos="fade-right"
                            title={"Assurer l’appropriation et alignement "}
                            text={"de tous les intervenants à la PNSC"}
                        />

                    </div>
                </div>
            </div>
        </section>
    );
}


function Mission({title, text, ...props}) {
    return (
        <div className="p-8 text-neutral-700  gap-6 border-t-2 border-red bg-green-secondary" {...props}>
            <span className="">{title }</span>
            <span className="">
                { text}
            </span>
        </div>
    )
}

export default Missions;

