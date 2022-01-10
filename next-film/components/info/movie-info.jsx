import React, {Fragment} from 'react'
import Head from 'next/head'
import Image from 'next/image'


const MovieInfo = (details) => {
    console.log("movie");
    const {info, people} = details;
    const {cast, crew} = people;
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