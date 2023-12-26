import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {formatDate} from "@/utils/date";
import {ArrowRight} from "lucide-react";

async function Actus(props) {

    const data = (await (await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/post` , {next : {revalidate : 0}})).json());
    

    return (
        <div id="actu" className="p-24 px-14 lg:px-32 flex flex-col gap-12">
            <div className="flex justify-between items-center">
                <h1 className="text-green border-b-2 border-red text-2xl lg:text-3xl font-bold w-max py-2">
                    Actualités
                </h1>

                <Link
                    href={"/actu"}
                    className="group/more text-red flex gap-3 font-bold items-center"
                >
                    <p>Voir plus</p>
                    <ArrowRight className="group-hover/more:translate-x-1/2 duration-300"/>
                </Link>
            </div>

            <div className="grid xl:grid-cols-3 gap-14">
                {
                    data.results.slice(0,3)
                    .map(
                        (post, index) => <Actu key={index} title={post.title} tags={post.tags[0]}
                                               date={formatDate(post.updated)} resume={post.summary}
                                               image={post.image || ""} id={post.id}/>
                    )
                }
            </div>
        </div>
    );
}


function Actu({title, resume, date, tags, image, id}) {
    return (
        <Link
            href={`/actu/${id}`}
            data-aos="fade-up"
            className="group/actu border-2 rounded-sm overflow-hidden border-transparent hover:border-green duration-300 cursor-pointer bg-neutral-100">
            <div className="overflow-hidden h-72">
                <Image className="w-full h-auto" width={420} height={220} src={image} alt={""}/>
            </div>
            <div className="p-6 flex flex-col gap-3 ">
                <p className="flex items-center gap-3"><span>{date}</span> | <span className="text-white bg-green p-1 text-xs rounded">{tags}</span></p>
                <h1 className="lowercase first-letter:uppercase font-bold text-green">
                    {title}
                </h1>
                <p className="text-base text-neutral-400">
                    {String(resume).slice(0,225)} ...
                </p>
                <div className="text-lg text-green font-bold flex items-center gap-3 justify-end opacity-70 hover:text-red group-hover/actu:text-red group-hover/actu:opacity-100 mt-4">
                    <span>Lire la suite</span>
                    <ArrowRight/>
                </div>
            </div>
        </Link>
    )
}

export default Actus;
