import React, { Component } from 'react';

export default class PokemonCard extends Component {
  state = {
    name: '',
    imageUrl: '',
    pokemonIndex: ''
  };
  render() {
    const { name, url } = this.props;
    return (
      <div className=' px-4 py-2 max-w-sm rounded bg-gray-400 overflow-hidden shadow-lg mb-4'>
        <img
          className='w-full'
          src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
          alt=''
        />
        <div className='font-bold text-l text-base'>{name}</div>
        <p className='text-gray-700 text-base'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
    );
  }
}
