/* eslint-disable */
import React, { Component } from 'react';
import axios from 'axios';

const TYPE_COLORS = {
  bug: 'B1C12E',
  dark: '4F3A2D',
  dragon: '755EDF',
  electric: 'FCBC17',
  fairy: 'F4B1F4',
  fighting: '823551D',
  fire: 'E73B0C',
  flying: 'A3B3F7',
  ghost: '6060B2',
  grass: '74C236',
  ground: 'D3B357',
  ice: 'A3E7FD',
  normal: 'C8C4BC',
  poison: '934594',
  psychic: 'ED4882',
  rock: 'B9A156',
  steel: 'B5B5C3',
  water: '3295F6'
};

export default class PokemonDetail extends Component {
  state = {
    name: '',
    pokemonIndex: '',
    imageUrl: '',
    types: [],
    description: '',
    stats: {
      hp: '',
      attack: '',
      defense: '',
      speed: '',
      specialAttack: '',
      specialDefense: ''
    },
    isLoading: true
  };

  async componentDidMount() {
    const { pokemonIndex } = this.props.match.params;

    // urls for pokemon information
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`;
    const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}/`;

    //get poke info
    const pokemonRes = await axios.get(pokemonUrl);
    const { name } = pokemonRes.data;
    const imageUrl = pokemonRes.data.sprites.front_default;
    let { hp, attack, defense, speed, specialAttack, specialDefense } = '';

    pokemonRes.data.stats.map(stat => {
      switch (stat.stat.name) {
        case 'hp':
          hp = stat['base_stat'];
          break;
        case 'attack':
          attack = stat['base_stat'];
          break;
        case 'defense':
          defense = stat['base_stat'];
          break;
        case 'speed':
          speed = stat['base_stat'];
          break;
        case 'special-attack':
          specialAttack = stat['base_stat'];
          break;
        case 'special-defense':
          specialDefense = stat['base_stat'];
          break;
        default:
          break;
      }
    });

    const types = pokemonRes.data.types.map(type => type.type.name);

    // get poke description
    let description = '';
    await axios.get(pokemonSpeciesUrl).then(res => {
      res.data.flavor_text_entries.some(flavor => {
        if (flavor.language.name === 'en') {
          description = flavor.flavor_text;
          return;
        }
      });
    });

    this.setState({ description });
    this.setState({
      imageUrl,
      pokemonIndex,
      name,
      types,
      stats: {
        hp,
        attack,
        defense,
        speed,
        specialAttack,
        specialDefense
      },
      isLoading: false
    });
  }
  render() {
    const {
      imageUrl,
      name,
      isLoading,
      pokemonIndex,
      types,
      stats,
      description
    } = this.state;
    return (
      <div className='w-full'>
        {isLoading ? <p>loading...</p> : null}
        <div
          style={{
            backgroundColor: `#${
              types[1] ? TYPE_COLORS[types[1]] : TYPE_COLORS[types[0]]
            }`
          }}
          className='w-full text-xl font-bold tracking-wide p-6 text-center'
        >
          <h1 className='capitalize '>
            {name} {`#${pokemonIndex}`}
          </h1>
        </div>
        <div className='w-full flex content-center justify-end mt-1'>
          {types.map(type => (
            <span
              style={{ backgroundColor: `#${TYPE_COLORS[type]}` }}
              className=' capitalize ml-1 p-2'
              key={type}
            >
              {type}{' '}
            </span>
          ))}{' '}
        </div>
        <div className='flex'>
          <div className='w-1/2'>
            <img className='w-1/3 m-auto' src={imageUrl} alt={name} />
          </div>
          <div className='w-1/2'>
            <div>HP: {stats.hp}</div>
            <div>Attack: {stats.attack}</div>
            <div>Defense: {stats.defense}</div>
            <div>Speed: {stats.speed}</div>
            <div>Special Attack: {stats.specialAttack}</div>
            <div>Special Defense: {stats.specialDefense}</div>
          </div>
        </div>
        <div className='w-full'>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}
