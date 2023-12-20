import Image from "next/image";

export default async function Home({params}) {

    const chuId = params.id;

    const data = (await (await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/etablissement/${chuId}` , { next: { revalidate: 0 }})).json());

    console.log(data)

    return (
        <>
            <div className="px-32 py-12 flex flex-col gap-12 container mx-auto">
                <div
                    className="w-full bg-neutral-100 h-64 relative mb-12">
                    <Image quality={100} src={data.image || ""} alt={""} fill objectFit={"cover"}/>
                    <div
                        className="absolute w-full h-full z-50 flex items-end justify-center gap-6">
                        <div className="flex w-full max-w-3xl items-end justify-between gap-6">
                            <div className="w-32 aspect-square bg-white rounded-xl translate-y-1/2 overflow-hidden flex items-center justify-center border-2 border-green">
                                <Image className="w-full h-auto" width={200} height={200} src={data.logo || "/assets/MINSAN.jpg"}
                                       alt={""}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto flex flex-col gap-6">

                    <h1 className="font-bold text-green text-2xl">{data.name}</h1>

                    <div className="flex flex-col gap-4">
                        <h2 className="font-bold text-green text-2xl underline">Présentation</h2>
                        <p>
                            La Direction Générale de la Fourniture des Soins (DGFS) a pour mission d’assurer la
                            coordination, l’animation, le suivi et l’évaluation des activités des Directions et des Services
                            placés sous son autorité. Ces activités seront axées principalement à l’appui au développement
                            des Hôpitaux publics et privés de Madagascar...
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h2 className="font-bold text-green text-2xl underline">Contact</h2>
                        <div className="divide-y">
                           <Contact who={"Directeur  d’etablissement"} value={data.contacts[0].contact_de || "Non Disponible"}/>
                           <Contact who={"Urgences"} value={data.contacts[0].contact_urgence || "Non Disponible"}/>
                           <Contact who={"contact ambulance"} value={data.contacts[0].contact_ambulance || "Non Disponible"}/>
                           <Contact who={"Contact Accueil"} value={data.contacts[0].contact_accueil || "Non Disponible"}/>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h2 className="font-bold text-green text-2xl underline">Liste de service disponibles</h2>
                        <div className="flex gap-3 flex-wrap">
                            {
                                data.services.map((service , index) => <Service key={index + service} value={service.name}/>)
                            }
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

function Contact({who ,  value}) {
    return (
        <div className="flex justify-between items-center py-3">
            <span className="font-bold">{who}</span>
            <span>{value}</span>
        </div>
    )
}

function Service({value}) {
    return (
        <div className="border-green border-2 p-2 rounded-lg font-bold text-sm">
            {value}
        </div>
    )
}