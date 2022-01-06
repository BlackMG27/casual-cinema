import React, {Fragment} from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { getDetailsById } from "../../../src/lib/api";


export default function Media({details}){
    console.log(details)
    return (
        <Fragment>
            <Head>
                
                
            </Head>
            <header>
                
            </header>
            <main>
                
            </main>
        </Fragment>
    )
}

export async function getServerSideProps({params}){
    console.log(params)
    const details = await getDetailsById(params.media, params.id)
    return{
        props:{
            details,
        }
    }
}