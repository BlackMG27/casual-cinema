import React, {Fragment} from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { getDetailsById } from "../../src/lib/api";


export default function Media({info}){
    console.log(info)
    return (
        <Fragment>
            <Head>
                <title></title>
            </Head>
        </Fragment>
    )
}

export async function getServerSideProps(){
    const info = await getDetailsById()
    return {
        props: {
            info,
        }
    }
}