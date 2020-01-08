import React, { Component } from 'react';
import axios from 'axios';

import PokemonCard from './PokemonCard';

export default class PokemonList extends Component {
  state = {
    url: 'https://pokeapi.co/api/v2/pokemon?limit=151/',
    pokemon: null
  };

  async componentDidMount() {
    const res = await axios.get(this.state.url);
    this.setState({ pokemon: res.data['results'] });
  }

  render() {
    return (
      <div className='w-full flex flex-wrap justify-around'>
        {this.state.pokemon ? (
          this.state.pokemon.map(poke => (
            <PokemonCard key={poke.name} name={poke.name} url={poke.url} />
          ))
        ) : (
          <div>There are no pokemon</div>
        )}
      </div>
    );
  }
}