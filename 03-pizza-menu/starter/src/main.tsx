import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createElement } from 'react';

import './index.css';
import spinach from './pizzas/spinaci.jpg';
import funghi from './pizzas/funghi.jpg';
import margherita from './pizzas/margherita.jpg';
import proscuitto from './pizzas/prosciutto.jpg';
import salamino from './pizzas/salamino.jpg';
import focaccia from './pizzas/focaccia.jpg';

// import App from './App';

type PizzaCompProp = {
  name: string;
  ingredients: string;
  photoName: string;
  price: number;
  soldOut?: boolean;
};

interface PizzaProp {
  pizzaObj: PizzaCompProp;
}

const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    // photoName: 'pizzas/focaccia.jpg',
    photoName: focaccia,
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    // photoName: 'pizzas/margherita.jpg',
    photoName: margherita,
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    // photoName: 'pizzas/spinaci.jpg',
    photoName: spinach,
    soldOut: false,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    // photoName: 'pizzas/funghi.jpg',
    photoName: funghi,
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    // photoName: 'pizzas/salamino.jpg',
    photoName: salamino,
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    // photoName: 'pizzas/prosciutto.jpg',
    photoName: proscuitto,
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
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className='menu'>
      <h2>Our menu</h2>
      {numPizzas > 0 ? (
        <ul className='pizzas'>
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>We're still working on our menu. Please come back later🐇🐰🐇</p>
      )}
      {/* <Pizza
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
      /> */}
    </main>
  );
};

const Pizza: React.FC<PizzaProp> = (props: PizzaProp) => {
  console.log(props);
  return (
    <li className='pizza'>
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price + 3}</span>
      </div>
    </li>
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
      {isOpen ? (
        <div className='order'>
          <p>We're open until {closeHour}:00. Come visit us or order online.</p>
          <button className='btn'>Order</button>
        </div>
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
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
