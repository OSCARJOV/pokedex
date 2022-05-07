import axios from 'axios';

const getSearch = async(Search) => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${Search}`;
    const req = await axios.get(URL)
    return req

}

export default getSearch