import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import spinach from './pizzas/spinaci.jpg';

// import App from './App';

const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false,
  },
];

const App = () => {
  return (
    <div>
      <h1>Hello, Koppe-chan!</h1>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
};

const Pizza = () => {
  return (
    <div>
      <img src={spinach} alt='Pizza spinach' />
      <h2>Pizza Spinach'</h2>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>
  );
};

const el = document.getElementById('root');
const root = createRoot(el!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// React before 18
// ReactDOM.render(<App />, document.getElementById('root'))
