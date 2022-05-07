import { useEffect, useState } from "react";
import PokeItem from "../components/PokeItem";
import Search from "../components/Search";
import getAllPokemons from "../services/getAllPokemons";

const PokemonList = () => {
  const [pokeList, setPokeList] = useState([]);
  const [arrOffsetPosition, setArrOffsetPosition] = useState(0);
  
  useEffect(() => {
    getAllPokemons(arrOffsetPosition).then((res) => {
      setPokeList(res.data.results);
    });
  }, [arrOffsetPosition]);

  const list = pokeList.map((item) => (
    <PokeItem key={item.url} url={item.url} />
  ));

  return (
    <div>
      <h1>POKEMON</h1>
      <img src="https://thumbs.gfycat.com/PartialSecretAnaconda-size_restricted.gif" alt="" className='img-fluid' />
    <div>
    <br/>
    <Search/>

    <div className="card">
      {list}
      </div>

      <div>
      {/* {arrOffsetPosition === 0 ? (<button className="btn-primary fs-5" onClick={() => setArrOffsetPosition(arrOffsetPosition + 20)}>Next 20</button>) : ( <><button className="btn-primary fs-5" onClick={() => setArrOffsetPosition(arrOffsetPosition + 20)} >Next 20</button> <button className="btn-primary fs-5" onClick={() => setArrOffsetPosition(arrOffsetPosition - 20)}> Prev 20 </button></> )} */}
      <button className="btn-primary fs-5" onClick={() => setArrOffsetPosition(arrOffsetPosition - 20)}> Atras </button>
      <button className="btn-primary fs-5" onClick={() => setArrOffsetPosition(arrOffsetPosition + 20)}>Proximo</button>
    </div>
    </div>
    </div>
  );
};

export default PokemonList;
