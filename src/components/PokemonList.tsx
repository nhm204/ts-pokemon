import React, { useEffect, useState } from 'react';
import { Detail } from '../App';
import './pokemon.css';

interface Props {
    id: number
    name: string
    image: string
    abilities: 
      | {
        name: string
        ability: string
        }[] 
      | undefined
    viewDetail: Detail
    setViewDetail: React.Dispatch<React.SetStateAction<Detail>>
}

const PokemonList:React.FC<Props> = (props) => {
  const { id, name, image, abilities, viewDetail, setViewDetail } = props;
  const [ isSelected, setSelected ] = useState<boolean>(false);

  useEffect(() => setSelected(id === viewDetail?.id), [viewDetail]);

  const handleCloseDetail = () => {
    setViewDetail({ id: 0, isOpened: false });
  }

  return (
    <>
      { isSelected ? (
          <div className='pokemon-list-detailed'>
            <div className='detail-container'>
              <p className='detail-close' onClick={handleCloseDetail}>X</p>
              <div className='detail-info'>
                <img src={image} alt='pokemon' className='detail-img' />
                <p className='detail-name'> {name}</p>
              </div>
              <div className='detail-skill'>
                <p className='detail-ability'>Ablities: </p>
                { abilities?.map((element: any) => (
                  <div>{element.ability.name}</div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className='pokemon-list-container'>
            <p className='pokemon-name'>{name}</p>
            <img src={image} alt='pokemon' />
          </div>
        )
      }
    </>
  );
};

export default PokemonList;