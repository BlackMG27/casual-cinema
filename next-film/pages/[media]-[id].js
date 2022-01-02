import React, {Fragment} from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { getDetailsById } from "../src/lib/api";


export default function Media({detail}){
    console.log(detail)
    return (
        <Fragment>
            <Head>
                <title>{detail.title}</title>
            </Head>
        </Fragment>
    )
}

export async function getStaticProps(context){
    const tmdbToken = process.env.NEXT_PUBLIC_TMDB_API_TOKEN
    const res = await fetch(`https://api.themoviedb.org/3/${context.media}/${context.id}?api_key=${tmdbToken}&append_to_response=videos`)

    const detail = await res.json();
    return {
        props: {
            detail
        }
    }
}