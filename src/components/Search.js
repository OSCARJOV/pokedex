import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import getSearach from "../services/getPokemonById"

const Search = (url) => {

    // const {  } = useParams()
    const [Search, setSearch] = useState('')


    useEffect(() => {
      getSearach(Search)
            .then((res) => {
                console.log(res.data)
                setSearch(e.target.value)
               
            })
    }, [url])

  return (
    <form className="d-flex justify-content-center gap-4 mb-5">
    <input 
    onChange={(e) => {
        setSearch(e.target.value);
    }}
    placeholder='Buscar por Letra'
    type="text" 
    // className= "input"
    />
    <button
    onClick={(e)=> {
    e.preventDefault();
    }}  
    className= "btn btn-primary fs-5"
    >
    Buscar
    </button>
</form>
);
}

export default Search