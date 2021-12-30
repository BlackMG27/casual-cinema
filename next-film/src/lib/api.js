const tmdbToken = process.env.NEXT_PUBLIC_TMDB_API_TOKEN;


export const searchMedia = async(query) => {
    const lookMedia = `https://api.themoviedb.org/3/search/multi?api_key=${tmdbToken}&language=en-US&query=${query}`

    const res = await fetch(lookMedia)
    const resJson = await res.json()
    return resJson.results;
}

export const getDetailsById = async(details) => {
    console.log(details)
     const showMedia = `https://api.themoviedb.org/3/${details.media}/${details.id}?api_key=${tmdbToken}&append_to_response=videos`

     console.log(showMedia)

    const res = await fetch(showMedia);
    const resJson = await res.json();
    return resJson
}

