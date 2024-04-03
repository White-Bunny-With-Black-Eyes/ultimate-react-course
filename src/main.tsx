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
    <StarRating maxRating={5} messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']} />
    <StarRating maxRating={10} size={24} color='red' className='test' />
  </StrictMode>
);
