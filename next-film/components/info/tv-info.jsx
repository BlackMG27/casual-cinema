import React, {Fragment} from 'react'
import Head from 'next/head'
import Image from 'next/image';
import {useRouter} from 'next/router';
import CreditList from '../credit-list';


const TvInfo = (details) => {
    const router = useRouter();
    const {info, people} = details;
    const {cast, crew} = people;
    const imageURL = "https://image.tmdb.org/t/p/w500"
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
            <main>
                <section>

                </section>
                <section>
                    <h2>Starring</h2>
                    {
                        cast.map((star, key) => (
                            <CreditList 
                                info={star}
                                key={key}
                            />
                        ))
                    }
                </section>
            </main>
            
        </Fragment>
    )
}

export default TvInfo;