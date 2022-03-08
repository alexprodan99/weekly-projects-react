import React, { useState, useEffect } from 'react'
import './PokemonDetail.css'
import { Link, useParams } from 'react-router-dom'
import { getPokemonDetails } from '../api/PokedexApi'
import { Card, CardContent } from '@material-ui/core'

export default function PokemonDetail() {
    const { name } = useParams()
    const [pokemonDetails, setPokemonDetails] = useState({})

    useEffect(() => {
        getPokemonDetails(name)
            .then((result) => {
                const data = result.data
                const interestData = {
                    name: data.name,
                    height: data.height,
                    weight: data.weight,
                    baseExperience: data.base_experience,
                    sprites: [
                        {
                            position: 'front',
                            url: data.sprites.front_default,
                        },
                        {
                            position: 'back',
                            url: data.sprites.back_default,
                        },
                    ],
                    abilities: [
                        ...data.abilities.map((item) => item.ability.name),
                    ],
                }

                setPokemonDetails(interestData)
            })
            .catch((error) => {
                console.log(error.message)
            })
    }, [])

    return (
        <div>
            <Link to="/pokemons">Back to pokemon list</Link>
            <Card>
                <CardContent>
                    <h1> {name} </h1>
                    <section className="stats">
                        <h2>Stats</h2>

                        <ul className="stats-list">
                            <li>Height: {pokemonDetails.height} m</li>
                            <li>Weight: {pokemonDetails.weight} kilos</li>
                            <li>
                                Base experience: {pokemonDetails.baseExperience}
                            </li>
                            <li>Sprites:</li>
                            {pokemonDetails.sprites && (
                                <li>
                                    <ul className="sprites-list">
                                        {pokemonDetails.sprites.map(
                                            (item, id) => {
                                                return (
                                                    <div key={id}>
                                                        <span>
                                                            {item.position}{' '}
                                                            <img
                                                                src={item.url}
                                                            />
                                                        </span>
                                                    </div>
                                                )
                                            }
                                        )}
                                    </ul>
                                </li>
                            )}
                            <li>Abilities:</li>
                            <ul className="abilities-list">
                                {pokemonDetails.abilities && (
                                    <li>
                                        {pokemonDetails.abilities.map(
                                            (item, id) => {
                                                return (
                                                    <div key={id}>
                                                        <span>{item}</span>
                                                    </div>
                                                )
                                            }
                                        )}
                                    </li>
                                )}
                            </ul>
                        </ul>
                    </section>
                </CardContent>
            </Card>
        </div>
    )
}
