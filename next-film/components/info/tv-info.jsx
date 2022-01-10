import React, {Fragment} from 'react'
import Head from 'next/head'
import Image from 'next/image'


const TvInfo = (details) => {
    const {info, people} = details;
    const {cast, crew} = people;
    console.log(cast);
    console.log(crew);
 
    return (
        <Fragment>
            <Head>
                <title>{info.name} - Tv Info</title>
            </Head>
            <header>
                <h1>{info.name}</h1>
            </header>
        </Fragment>
    )
}

export default TvInfo;