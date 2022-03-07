import React from 'react'
import { Card, CardActionArea, CardContent } from '@material-ui/core';

export default function PokemonCard({ imageUrl, name, height, weight, baseExperience }) {
  return (
    <div>
        <Card>
            <CardActionArea>
                <div className="card-image">
                    <img src={imageUrl} alt="Pokemon Image" height="150" width="150" />   
                </div>
                <CardContent>
                    <h5> { name } </h5>
                    <h5> Base Experience { baseExperience }</h5>
                    <h5> Height {height} m </h5>
                    <h5> Weight { weight } kilos</h5>
                </CardContent>
            </CardActionArea>
        </Card>
    </div>
  )
}
