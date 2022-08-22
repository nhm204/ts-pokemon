import React from 'react';
import { PokemonDetail } from '../interface';
import PokemonList from './PokemonList';
import './pokemon.css';
import { Detail } from '../App';

interface Props {
    pokemons: PokemonDetail[]
    viewDetail: Detail
    setViewDetail: React.Dispatch<React.SetStateAction<Detail>>
}

const PokemonCollection:React.FC<Props> = (props) => {
  const { pokemons, viewDetail, setViewDetail } =  props;

  const handleSelectPokemon = (id: number) => {
    if (!viewDetail.isOpened) {
        setViewDetail({ id: id, isOpened: true });
    }
  }

  return (
    <div className={viewDetail.isOpened ? 'collection-container-active' : 'collection-container'}>
      { viewDetail.isOpened ? <div className="overlay"></div> : null }
      { pokemons.map(pokemon => (
        <div onClick={() => handleSelectPokemon(pokemon.id)}>
          <PokemonList 
            key={pokemon.id} 
            name={pokemon.name} 
            id={pokemon.id}
            image={pokemon.sprites.front_default} 
            abilities={pokemon.abilities}
            viewDetail={viewDetail}
            setViewDetail={setViewDetail}
          />
        </div>
      ))}
    </div>
  );
};

export default PokemonCollection;