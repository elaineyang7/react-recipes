import React from 'react';

import './card.css';

export const Card = props => (
  <div className='card__container'>
    <div className='card__img'>
      <img 
        src={ props.imageUrl } 
        alt={ props.alt || 'Image' } 
      />
    </div>
    <h2 className='recipe__title'> { props.title}  </h2>
  </div>
);