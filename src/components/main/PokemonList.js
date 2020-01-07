import React, { Component } from 'react';

import PokemonCard from './PokemonCard';

export default class PokemonList extends Component {
  render() {
    return (
      <div className='w-full flex flex-wrap justify-around'>
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
      </div>
    );
  }
}
