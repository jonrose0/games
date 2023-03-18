import axios from 'axios'

export default async function handler(request, response) {
  const {url, search, search_precise, parent_platforms, genres, page} = request.query

  const apurl = `https://api.rawg.io/api/games${url}?key=${process.env.API_KEY}${search ? `&search=${search}&search_precise=${search_precise}` : ''}${parent_platforms ? `&parent_platforms=${parent_platforms}` : ''}${genres ? `&genres=${genres}` : ''}&page=${page}&ordering=-added`

  try {
    const res = await axios.get(apurl);
    const result = await url ? res.data : res.data.results
    await response.status(200).json({
      data: result
  });
  } catch (error) {
    console.error(error);
  }
}