import React, {Fragment} from 'react'
import Head from 'next/head'
import Image from 'next/image'


const TvInfo = (details) => {
    console.log("tv");
    const {info} = details;
    return (
        <Fragment>
            <Head>
                <title>{info.name} - Movie Info</title>
            </Head>
            <header>
                <h1>{info.name}</h1>
            </header>
        </Fragment>
    )
}

export default TvInfo;