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
