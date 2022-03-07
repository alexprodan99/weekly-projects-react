import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPokemonDetails } from '../api/PokedexApi';
import { Card, CardContent } from '@material-ui/core';

export default function PokemonDetail() {
  const { name } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState({});

  useEffect(() => {
    getPokemonDetails(name).then((result) => {
      const data = result.data;
      const interestData = {
        name: data.name,
        height: data.height,
        weight: data.weight,
        baseExperience: data.base_experience,
        sprites: [
          {
            position: 'front',
            url: data.sprites.front_default
          },
          {
            position: 'back',
            url: data.sprites.back_default
          }
        ],
        abilities: [
          ...data.abilities.map(item => item.ability.name)
        ]
      };

      setPokemonDetails(interestData);
    }).catch((error) => {
      console.log(error.message);
    })
  }, []);

  return (
    <div>
      <Link to="/pokemons">Back to pokemon list</Link>
      <Card>
        <CardContent>
          <h1> { name } </h1>
          <section>
            <h2>Stats</h2>
            
            <ul>
              <li>Height: { pokemonDetails.height } m</li>
              <li>Weight: { pokemonDetails.weight } m</li>
              <li>Base experience: { pokemonDetails.baseExperience }</li>
              <h5>Sprites:</h5>
              { pokemonDetails.sprites && <li>
                <ul>
                  { pokemonDetails.sprites.map((item, id) => {
                    return (
                      <div key={id}>
                        <span>{ item.position } <img src={item.url} /></span>
                      </div>
                    );
                  })
                  }
                </ul>
              </li>
              }
              <h5>Abilities:</h5>
              { pokemonDetails.abilities && <li>
                {
                  pokemonDetails.abilities.map((item, id) => {
                    return (
                      <div key={id}>
                        <span>{ item }</span>
                      </div>
                    );
                }) }
                </li>
              }
            </ul>
          </section>
          
        </CardContent>
      </Card>
    </div>
  )
}
