import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer className='container mt-auto mr-auto ml-auto'>
        <div className='flex justify-around'>
          <p>
            Data from{' '}
            <a
              rel='noopener noreferrer'
              target='_blank'
              href='https://pokeapi.co/'
            >
              PokeAPI
            </a>
          </p>
          <p>
            Pokeball icon by{' '}
            <a
              rel='noopener noreferrer'
              target='_blank'
              href='https://www.flaticon.com/authors/nikita-golubev'
            >
              Nikia Golubev
            </a>
          </p>
        </div>
      </footer>
    );
  }
}
