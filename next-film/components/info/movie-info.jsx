import React, {Fragment} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'


const MovieInfo = (details) => {
    console.log("movie");
    const {info, people} = details;
    const {cast, crew} = people;
    const imageURL = "https://image.tmdb.org/t/p/w500"
    return(
        <Fragment>
            <Head>
                <title>{info.title} - Show Info</title>
            </Head>
            <header>{info.title}</header>
        </Fragment>
    )
}

export default MovieInfo