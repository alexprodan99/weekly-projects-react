import React, { useEffect, useState } from 'react'
import { getPokemonDetails, getPokemons } from '../api/PokedexApi';
import SearchBar from '../common/components/SearchBar'
import { Card, CardActionArea, CardContent } from '@material-ui/core';
import PokemonList from './PokemonList';

export default function PokemonPage() {
    const [data, setData] = useState([]);
    const [allData, setAllData] = useState([]);
    const [error, setError] = useState("");

    const fetchPokemonData = async () => {
        const pokemons = await getPokemons();
        const count = pokemons.data.count;
        const data = [];
        for (let i = 1; i <= 10; i++) {
            const pokemonDetails = await getPokemonDetails(i);
            const pokemonData = pokemonDetails.data;
            const currentData = {
                imageUrl: pokemonData.sprites.front_default,
                name: pokemonData.name,
                height: pokemonData.height,
                weight: pokemonData.weight,
                baseExperience: pokemonData.baseExperience
            };
            data.push(currentData);
        }
        setAllData(data);
        setData(data);
    };
    
    useEffect(() => {
        fetchPokemonData();
    }, []);
    const onSearch = (text) => {
        console.log(text);
    };

    return (
        <div>
            <Card>
                <CardContent>
                    <h1 style={{textAlign: "center"}}>Pokedex</h1>
                    <SearchBar onSearch={(text) => onSearch(text)}/>
                </CardContent>
            </Card>

            <Card>
                <CardContent>
                    <ul>
                        { data.map((element, id) => {
                            return (
                                <div key={id}> { element.imageUrl }</div>
                            )
                        })}
                    </ul>
                    <PokemonList />
                </CardContent>
            </Card>
        </div>
    );
}
