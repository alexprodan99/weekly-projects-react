import React from 'react'
import { useParams } from 'react-router-dom'

export default function PokemonDetail() {
  const { name } = useParams();

  return (
    <div> { name } </div>
  )
}
