import axios from 'axios'
export const getCharacter=async(query,limit,offset)=>{
    const hash='65dea527c78bcc3f5c6d00c378ea71dd'
    return await axios.get(`https://gateway.marvel.com/v1/public/characters?${query?`nameStartsWith=${query}`:""}&ts=1&apikey=e6d1499355872cf43ec216e18ee71830&hash=${hash}&limit=${limit}&offset=${offset}`)
}