const tmdbToken = process.env.NEXT_PUBLIC_TMDB_API_TOKEN;


export const searchMedia = async(query) => {
    const lookMedia = `https://api.themoviedb.org/3/search/multi?api_key=${tmdbToken}&language=en-US&query=${query}`

    const res = await fetch(lookMedia)
    const resJson = await res.json()
    return resJson.results;
}

export const getDetailsById = async(media, id) => {
     const showMedia = `https://api.themoviedb.org/3/${media}/${id}?api_key=${tmdbToken}&append_to_response=videos`

    const res = await fetch(showMedia);
    const resJson = await res.json();
    return resJson
}

export const getCreditList = async(media, id) => {
    const getCredits = `https://api.themoviedb.org/3/${media}/${id}/credits?api_key=${tmdbToken}`

    const res = await fetch(getCredits)
    const resJson = await res.json()
    return resJson;
}

export const getPersonDetail = async(id) => {
    const getPerson = `https://api.themoviedb.org/3/person/${id}?api_key=${tmdbToken}`

    const res = await fetch(getPerson)
    const resJson = await res.json()
    return resJson;
}
