import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import App from './App.tsx'

// import './index.css'

import StarRating from './StarRating.tsx';

const el = document.getElementById('root');
const root = createRoot(el!);

root.render(
  <StrictMode>
    {/* <App /> */}
    <StarRating maxRating={5} />
    <StarRating maxRating={10} />
    <StarRating />
  </StrictMode>
);
