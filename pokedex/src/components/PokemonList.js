import React, { useCallback } from 'react'
import { List } from "react-virtualized";
import PokemonCard from './PokemonCard';

export default function PokemonList({ data }) {

  const renderRow = useCallback(({index, key, style}) => {
    return (
        <div key={key}>
            <PokemonCard imageUrl={ data[index].imageUrl } name={ data[index].name } height={ data[index].height } weight={ data[index].weight } baseExperience={ data[index].baseExperience }/>
        </div>
    );
  });
  return (
    <div>
        <List
            width={1500}
            height={700}
            rowRenderer={renderRow}
            rowCount={data.length}
            rowHeight={120}
        />
    </div>
  )
}
