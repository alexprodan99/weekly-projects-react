import React, { useEffect, useState } from 'react'
import { getPokemonDetails, getPokemons } from '../api/PokedexApi';
import SearchBar from '../common/components/SearchBar'
import { Card, CardActionArea, CardContent } from '@material-ui/core';
import PokemonList from './PokemonList';
import { useQuery } from "react-query";


export default function PokemonPage() {
    const fetchPokemonDetails = async () => {
        const newData = [];
        for (let i = 1; i <= 800; i++) {
            const pokemonDetails = await getPokemonDetails(i);
            const pokemonData = pokemonDetails.data;
            const currentData = {
                imageUrl: pokemonData.sprites.front_default,
                name: pokemonData.name,
                height: pokemonData.height,
                weight: pokemonData.weight,
                baseExperience: pokemonData.baseExperience
            };
            newData.push(currentData);
        }
        return newData;
    };

    const { data, isLoading, isError, error } = useQuery("pokemons", fetchPokemonDetails);
    // const [results, setResults] = useState(data);
    // const [allData, setAllData] = useState(data);

    
    // const fetchPokemonData = async () => {
    //     const pokemons = await getPokemons();
    //     const count = pokemons.data.count;
    //     setIsLoading(isLoading);
    //     setIsError(isError);
    //     setError(error);
    //     setAllData(data);
    //     setResults(data);
    // };
    
    // useEffect(() => {
    //     try {
    //         fetchPokemonData();
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // }, []);
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
                    { isLoading ? <p>Loading...</p> : isError ? <p> { error.message }</p> : <PokemonList data={data}/> }
                </CardContent>
            </Card>
        </div>
    );
}
