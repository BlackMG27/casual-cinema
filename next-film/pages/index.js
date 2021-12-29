import React, {Fragment, useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { searchMedia } from '../src/lib/api'


export default function Home({data}) {
  const [results, setResults] = useState(data)
  const [query, setQuery] = useState('')
  const imageURL = "https://image.tmdb.org/t/p/w500/"
  
  const handleSubmit = async(e) => {
    await e.preventDefault();
    const res = await searchMedia(query)
    await setResults(res)
    await setQuery('')
  }
  console.log(results)
  return (
    <Fragment>
      <Head>
        <title>Casual Cinema</title>
        <meta property="og:title"  content="This is a web app for me to learn Next.js" key="title"/>
      </Head>
      <header>
        <h1>Casual Cinema</h1>
      </header>
      <main>
        <section>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Search Media"
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            <button>Search Media</button>
          </form>
        </section>
        <section className="results">
          {
            results.map(item => (
              <figure key={item.id}>
                <img
                  src={imageURL + item.poster_path}
                  alt={item.title}
                />
                <h3>{item.title}</h3>
                <p>{item.overview}</p>
              </figure>
            ))
          }
        </section>
      </main>
      <footer>

      </footer>
    </Fragment>
  )
}

export async function getServerSideProps(){
  const data = await searchMedia()
  return {
    props: {
      data,
    }
  }
}
