import React, {Fragment} from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { getPersonDetail } from "../../src/lib/api";

export default function PersonDetail({person}){
    console.log(person)
    return (
        <Fragment>
            <Head>
                <title>{`${person.name}'s Bio'`}</title>
            </Head>
            <header>
                <h1></h1>
            </header>
        </Fragment>
    )
}

export async function getServerSideProps({params}){
    const person = await getPersonDetail(params.id)
    return {
        props:{
            person
        }
    }
}

