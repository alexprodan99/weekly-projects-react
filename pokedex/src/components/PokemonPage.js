import React, { useState } from 'react'
import { getPokemonDetails } from '../api/PokedexApi'
import SearchBar from '../common/components/SearchBar'
import { Card, CardContent } from '@material-ui/core'
import PokemonList from './PokemonList'
import { useQuery } from 'react-query'

export default function PokemonPage() {
    const fetchPokemonDetails = async (text) => {
        const newData = []
        for (let i = 1; i <= 800; i++) {
            const pokemonDetails = await getPokemonDetails(i)
            const pokemonData = pokemonDetails.data
            const currentData = {
                imageUrl: pokemonData.sprites.front_default,
                name: pokemonData.name,
                height: pokemonData.height,
                weight: pokemonData.weight,
                baseExperience: pokemonData.base_experience,
            }
            newData.push(currentData)
        }

        if (text) {
            return newData.filter((element) => element.name.includes(text))
        }
        return newData
    }

    const [text, setText] = useState('')
    const { data, isLoading, isError, error } = useQuery(
        ['pokemons', text],
        () => fetchPokemonDetails(text)
    )
    const onSearch = (filterText) => {
        setText(filterText)
    }

    return (
        <div>
            <Card>
                <CardContent>
                    <h1 style={{ textAlign: 'center' }}>Pokedex</h1>
                    <SearchBar onSearch={(text) => onSearch(text)} />
                </CardContent>
            </Card>

            <Card>
                <CardContent>
                    <center>
                        {isLoading ? (
                            <p>Loading...</p>
                        ) : isError ? (
                            <p> {error.message}</p>
                        ) : (
                            <PokemonList data={data} />
                        )}
                    </center>
                </CardContent>
            </Card>
        </div>
    )
}
