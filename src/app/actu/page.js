import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {formatDate} from "@/utils/date";

export async function getActus() {
    return  (await (await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/post` , { next: { revalidate: 0 }})).json()).results
}


async function Actus(props) {

    const data = await getActus();

    return (
        <div id="actu" className="p-12 px-32 pt-0 flex flex-col  my-12">
            <div className="flex justify-between items-center">
                <h1 className="text-green text-4xl font-bold w-max">
                    Les actualités du DGFS
                </h1>
            </div>

            <div className="flex flex-col my-12 gap-6">
                {
                    data.map(
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
            className="border-2 rounded-sm overflow-hidden border-transparent hover:border-green duration-300 cursor-pointer grid grid-cols-6">
            <div className="overflow-hidden relative col-span-1">
                <Image fill objectFit={"cover"} src={image} alt={""}/>
            </div>
            <div className="p-6 bg-neutral-100 flex flex-col break-words col-span-5">
                <p>{date} | {tags}</p>
                <h1 className="lowercase first-letter:uppercase font-bold text-green">
                    {title}
                </h1>
                <p className="text-base text-neutral-400">
                    {resume}
                </p>
            </div>
        </Link>
    )
}

export default Actus;