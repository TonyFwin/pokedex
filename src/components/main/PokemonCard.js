import React, { Component } from 'react';

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
    return (
      <div className='px-4 py-2 max-w-sm rounded bg-gray-400 overflow-hidden shadow-lg mb-4'>
        {this.state.imageLoading ? <img src={spinner} /> : null}
        <img
          className=''
          src={this.state.imageUrl}
          alt={this.state.name}
          onLoad={() => this.setState({ imageLoading: false })}
          onError={() => this.setState({ imageError: true })}
        />
        <div className='font-bold text-l text-base capitalize'>
          {this.state.pokemonIndex} {this.state.name}
        </div>
      </div>
    );
  }
}
