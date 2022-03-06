import React from 'react'
import SearchBar from '../common/components/SearchBar'

export default function PokemonPage() {
  return (
    <div>
        <div>
            <h1 style={{textAlign: "center"}}>Pokedex</h1>
            <SearchBar onSearch={(text) => console.log(text)}/>
        </div>
    </div>
  )
}
