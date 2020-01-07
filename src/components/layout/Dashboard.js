import React, { Component } from 'react';
import PokemonList from '../main/PokemonList';
export default class Dashboard extends Component {
  render() {
    return (
      <div className='flex mb-4 p-4'>
        <PokemonList />
      </div>
    );
  }
}
