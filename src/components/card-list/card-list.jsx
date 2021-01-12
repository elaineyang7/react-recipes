import React from 'react';

import { Card } from '../card/card';

import './card-list.css';

export const CardList = props => (
  <div className='card-list'>
    {props.recipes.map(recipe => (
      <Card key={recipe.id} title={recipe.title} imageUrl={recipe.imageUrl} />
    ))}
  </div>
);