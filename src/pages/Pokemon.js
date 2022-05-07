import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import getPokemonById from "../services/getPokemonById"

const Pokemon = () => {

    const { id } = useParams()
    const navigate = useNavigate()
    const [pokeName, setPokeName] = useState('')
    const [picture, setPicture] = useState('')
    const [hp, setHp] = useState(0)
    const [pokeId, setPokeId] = useState(null)

    useEffect(() => {
        getPokemonById(id)
            .then((res) => {
                console.log(res.data)
                setPokeName(res.data.name)
                setPicture(res.data.sprites.front_default)
                setHp(res.data.stats[0].base_stat)
                setPokeId(res.data.id)

            })
    }, [id])

    return (
        <div className="card" >
            <div>
            {pokeId}
            <br/>
                {pokeName}
                <br/>
                <img src={picture} alt='' />
                <br/>
                HP: {hp}
                
                <div>
                </div>
            </div>
                     
        
        <div> <button className="btn-primary fs-5" onClick={() => navigate(-1)}>Atras</button></div>
        </div>
    )
}

export default Pokemon