import React from 'react';

export default function Repositorio({match}){
  return(
    <h1>Repositorio
      {decodeURIComponent(match.params.repositorio)}
    </h1>

  )
}