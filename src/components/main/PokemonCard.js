import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import spinner from './6.gif';

export default class PokemonCard extends Component {
  state = {
    name: '',
    imageUrl: '',
    pokemonIndex: '',
    imageLoading: true,
    imageError: false
  };

  componentDidMount() {
    const { name, url } = this.props;
    const pokemonIndex = url.split('/')[url.split('/').length - 2];
    const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

    this.setState({
      name,
      imageUrl,
      pokemonIndex
    });
  }

  render() {
    const { imageUrl, name, imageLoading, pokemonIndex } = this.state;
    return (
      <Link to={`pokemon/${pokemonIndex}`}>
        <div
          className='
        px-4 py-2 max-w-sm rounded bg-gray-400 overflow-hidden shadow-lg 
        hover:bg-white hover:border-gray-400 hover:border-2 mb-4'
        >
          {imageLoading ? <img src={spinner} alt='loading spinner' /> : null}
          <img
            className=''
            src={imageUrl}
            alt={name}
            onLoad={() => this.setState({ imageLoading: false })}
            onError={() => this.setState({ imageError: true })}
          />
          <div className='font-bold text-l text-base capitalize'>
            {pokemonIndex} {name}
          </div>
        </div>
      </Link>
    );
  }
}
