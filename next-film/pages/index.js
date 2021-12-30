import React, {Fragment, useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { searchMedia, getDetailsById } from '../src/lib/api'


export default function Home({data}) {
  const [results, setResults] = useState(data)
  const [query, setQuery] = useState(' ')
  const [id, setId] = useState(null)
  const [media, setMedia] = useState('')
  const imageURL = "https://image.tmdb.org/t/p/w500"
  
  const handleSubmit = async(e) => {
    await e.preventDefault();
    const res = await searchMedia(query)
    await setResults(res)
    await setQuery('')
  }

  const handleClick = async() => {
    const details = {
      id: id,
      media: media
    }
    console.log(details)
    getDetailsById(details)
  }
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
                <Image
                  src={imageURL + item.poster_path}
                  width="100%"
                  height="100%"
                  alt={item.original_title}
                />
                {
                  (item.media_type === "tv")? (
                    <h3>{item.name}</h3>
                  ) : (item.media_type === "movie")? (
                    <h3>{item.title}</h3>
                  ):null
                }
                <p>{item.overview}</p>
                  <button
                    onClick={() => {handleClick(), setId(item.id),setMedia(item.media_type)
                  }}
                  >Get Details</button>
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
