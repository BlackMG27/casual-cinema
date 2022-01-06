import React, {Fragment} from "react";
import Head from "next/head";
import Image from "next/image";
import TvInfo from "../../components/tv-info";
import MovieInfo from "../../components/info/movie-info";
import { useRouter } from "next/router";
import { getDetailsById } from "../../src/lib/api";


export default function Media({details}){
    console.log(details)
    return (
        <Fragment>
            {
                (details.seasons)?(
                    <TvInfo info={details}/>
                ): (details.title)?(
                    <MovieInfo info={details}/>
                ):null
            }
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