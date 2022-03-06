import React from 'react'
import { Card, CardActionArea, CardMedia, CardContent } from '@material-ui/core';

export default function PokemonCard({ imageUrl, name, height, weight }) {
  return (
    <div>
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Pokemon image"
                    height="140"
                    image={imageUrl}
                >

                </CardMedia>
                    <h5> { name } </h5>
                    <h5> {height} m </h5>
                    <h5> { weight } kilos</h5>
                <CardContent>

                </CardContent>
            </CardActionArea>
        </Card>
    </div>
  )
}
