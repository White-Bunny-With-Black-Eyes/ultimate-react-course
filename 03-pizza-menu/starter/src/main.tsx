import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createElement } from 'react';

import './index.css';
import spinach from './pizzas/spinaci.jpg';
import funghi from './pizzas/funghi.jpg';
// import App from './App';

type PizzaProps = {
  name: string;
  ingredients: string;
  photoName: string;
  price: number;
};

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
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

const Header = () => {
  // const style: React.CSSProperties = {
  //   color: 'red',
  //   fontSize: '48px',
  //   textTransform: 'uppercase',
  // };
  const style = {};
  return (
    <header className='header'>
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
};

const Menu = () => {
  return (
    <main className='menu'>
      <h2>Our menu</h2>
      <Pizza
        name='Pizza Spinach'
        ingredients='Tomato, mozarella, spinach, and ricotta cheese'
        photoName={spinach}
        price={10}
      />
      <Pizza
        name='Pizza Funghi'
        ingredients='Tomato, mushrooms'
        photoName={funghi}
        price={12}
      />
    </main>
  );
};

const Pizza: React.FC<PizzaProps> = (props) => {
  console.log(props);
  return (
    <div className='pizza'>
      <div>
        <img src={props.photoName} alt={props.name} />
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price + 3}</span>
      </div>
    </div>
  );
};

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  // if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  // else alert("Sorry we're closed.");
  return (
    <footer className='footer'>
      {new Date().toLocaleTimeString()} We're currently open!
    </footer>
  );
  // return createElement('footer', null, "We're currently open!");
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
