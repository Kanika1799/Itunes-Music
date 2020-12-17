import { create } from 'apisauce'

const api = create({
  baseURL: 'https://itunes.apple.com'
})

export const getSimilarSongs = async (searchTerm) => {
    let similarSongs = []
    try {
        const resp = await api.get('/search?term=' + searchTerm)
        console.log(resp, 'respresp')
        similarSongs = resp.data.results
    } catch (error) {
        console.log(error)
    }

    console.log('asfdasdfsimilarSongssss', similarSongs)
    return similarSongs
}
