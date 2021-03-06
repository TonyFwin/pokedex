import React, { Component } from 'react';
import Pokeball from '../../images/pokeball.png';

export default class Navbar extends Component {
  render() {
    return (
      <div className='bg-white p-4'>
        <nav className='flex items-center  flex-wrap bg-gray-500 p-6'>
          <div className='w-full block flex-grow lg:flex lg:items-center justify-between lg:w-auto'>
            <a
              href='/'
              className='block mt4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4'
            >
              <img src={Pokeball} alt='Pokeball' /> Pokedex
            </a>
            <a
              href='https://tonynguyen.dev/'
              className='block mt4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4'
              rel='noopener noreferrer'
              target='_blank'
            >
              About Me
            </a>
          </div>
        </nav>
      </div>
    );
  }
}
