import React from 'react'
import SearchBar from '../common/components/SearchBar'

export default function PokemonPage() {
  return (
    <div>
        <SearchBar onSearch={(text) => console.log(text)}/>
    </div>
  )
}
