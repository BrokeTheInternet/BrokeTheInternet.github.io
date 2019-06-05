import React from 'react';
import './Container.css';
import Pokemon from '../Pokemon';

// main container for each Pokemoncomponent
// loops through each index in props.Pokemon, which contains an array of Pokemonimages
// to create a new Pokemoncomponent for each image
// attaches the passed down clickEvent function to each Pokemoncomponent
const Container = props => (
  // loops through
  <div
    className={
      props.shake
        ? 'container d-flex flex-wrap justify-content-center shake'
        : 'container d-flex flex-wrap justify-content-center'
    }
  >
    {props.Pokemon.map((a, i) => <Pokemon name={a} key={i} clickEvent={props.clickEvent} />)}
  </div>
);

export default Container;
