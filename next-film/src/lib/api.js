const tmdbToken = process.env.NEXT_PUBLIC_TMDB_API_TOKEN;


export const searchMedia = async(query) => {
    const lookMedia = `https://api.themoviedb.org/3/search/multi?api_key=${tmdbToken}&language=en-US&query=${query}`

    const res = await fetch(lookMedia)
    const resJson = await res.json()
    return resJson.results;
}