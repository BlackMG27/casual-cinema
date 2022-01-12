import React, {Fragment} from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { getPersonDetail } from "../../src/lib/api";

export default function PersonDetail({person}){
    console.log(person)
    return (
        <Fragment>

        </Fragment>
    )
}

export async function getServerSideProps({params}){
    console.log(params)
    const person = await getPersonDetail(params.id)
    console.log(person)
    return {
        props:{
            person
        }
    }
}

