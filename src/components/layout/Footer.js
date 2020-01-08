import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className='container mt-auto mr-auto ml-auto'>
        <div className='flex justify-around'>
          <p>
            Data from <a href='https://pokeapi.co/'>PokeAPI</a>
          </p>
          <p>
            Pokeball icon by
            <a href='https://www.flaticon.com/authors/nikita-golubev'>
              Nikia Golubev
            </a>
          </p>
        </div>
      </div>
    );
  }
}
