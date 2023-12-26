import Image from "next/image";
import {MDXRemote} from "next-mdx-remote/rsc";
import {formatDate} from "@/utils/date";
import {getActus} from "@/app/actu/page";
import React from "react";

export default async function Page({params}) {

    const data = await (await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/post/${params.id}`)).json();

    return (
        <section className="mx-auto my-12">
            <div className="max-w-3xl mx-auto">
                <div className="aspect-video h-64 w-full flex justify-center items-center rounded-md overflow-hidden">
                    <Image width={900} height={400} className="w-full h-auto" src={data.image || ""} alt={""}/>
                </div>
                <div className="flex flex-col  justify-between my-12 gap-3">
                    <h1 className="text-3xl  text-green font-bold">{data.title}</h1>
                    <p>{formatDate(data.created)} |  <span className="text-white bg-green p-1 text-xs rounded">{data.tags}</span></p>
                </div>
                <div className="flex flex-col gap-3 text-md ">
                    {
                        <MDXRemote source={data.body} />
                    }
                </div>
            </div>
        </section>
    )
}

export async function generateStaticParams() {
    const actus = await getActus();
    return actus.map((actu) => ({ id : actu.id }));
}