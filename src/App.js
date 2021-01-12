import React, { Component } from 'react';
import './App.css';

import Form from './components/form/form.jsx';
import { CardList } from './components/card-list/card-list.jsx';

class App extends Component {

  render() {

    const recipes = [
      {
        id: 1,
        title: 'Chocolate Cake',
        imageUrl: 'https://i.ibb.co/HBrC9FX/IMG-1547.jpg'
      },
      {
        id: 2,
        title: 'Apple Pie',
        imageUrl: 'https://i.ibb.co/cLC9w8s/IMG-9567.jpg'
      },
      {
        id: 3,
        title: 'Peach Pie',
        imageUrl: 'https://i.ibb.co/zPHttxj/IMG-6210.jpg'
      },
      {
        id: 4,
        title: 'Steamed Buns',
        imageUrl: 'https://i.ibb.co/gZT3rVR/IMG-6856.jpg'
      },
      {
        id: 5,
        title: 'Dumplings',
        imageUrl: 'https://i.ibb.co/hM2sNyT/IMG-7050.jpg'
      },
      {
        id: 6,
        title: 'Pumpkin Cashew Pasta',
        imageUrl: 'https://i.ibb.co/SBpjRHQ/IMG-8723.jpg'
      },
      {
        id: 7,
        title: 'Pumpkin Risotto',
        imageUrl: 'https://i.ibb.co/CWhJ58L/IMG-1779.jpg'
      },
      {
        id: 8,
        title: 'Korean Chapchae',
        imageUrl: 'https://i.ibb.co/PzSLDj5/IMG-1708.jpgR'
      },
      {
        id: 9,
        title: 'Spicy Stir-fried Lotus Root',
        imageUrl: 'https://i.ibb.co/BNHWzS5/IMG-1789.jpg'
      },
      {
        id: 10,
        title: 'Tomato Mapo Tofu',
        imageUrl: 'https://i.ibb.co/fYPG201/IMG-8929.jpg'
      }
    ]

    

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipes</h1>
        </header>
        <CardList recipes={recipes} />
      </div>
    );
  }
}

export default App;
