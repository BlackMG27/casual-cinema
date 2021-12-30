import React, {Fragment} from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { getDetailsById } from "../../src/lib/api";


export default function Media({details}){
    console.log(details)
    return (
        <Fragment>
            <Head>
                <title></title>
            </Head>
        </Fragment>
    )
}

export async function getServerSideProps(){
    const details = await getDetailsById()
    return {
        props: {
            details,
        }
    }
}