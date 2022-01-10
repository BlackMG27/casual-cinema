import React, {Fragment} from "react";
import Head from "next/head";
import Image from "next/image";
import TvInfo from "../../components/info/tv-info";
import MovieInfo from "../../components/info/movie-info";
import { useRouter } from "next/router";
import { getCreditList, getDetailsById } from "../../src/lib/api";


export default function Media({details, list}){
    return (
        <Fragment>
            {
                (details.seasons)?(
                    <TvInfo info={details} people={list}/>
                ): (details.title)?(
                    <MovieInfo info={details} people={list}/>
                ):null
            }
        </Fragment>
    )
}

export async function getServerSideProps({params}){
    console.log(params)
    const details = await getDetailsById(params.media, params.id)
    const list = await getCreditList(params.media, params.id)
    return{
        props:{
            details,
            list,
        }
    }
}