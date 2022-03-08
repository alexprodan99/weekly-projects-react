import React, { useState } from 'react'
import { Card, CardActionArea, CardContent } from '@material-ui/core'
import { Navigate } from 'react-router-dom'

export default function PokemonCard({
    imageUrl,
    name,
    height,
    weight,
    baseExperience,
}) {
    const [redirectToDetail, setRedirectToDetail] = useState(false)
    if (redirectToDetail) {
        return <Navigate to={`/pokemons/${name}`} />
    }

    return (
        <Card onClick={() => setRedirectToDetail(true)}>
            <CardActionArea>
                <div className="card-image">
                    <img
                        src={imageUrl}
                        alt="Pokemon Image"
                        height="150"
                        width="150"
                    />
                </div>
                <CardContent>
                    <h4> {name} </h4>
                    <h5> Base Experience {baseExperience}</h5>
                    <h5> Height {height} m </h5>
                    <h5> Weight {weight} kilos</h5>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
