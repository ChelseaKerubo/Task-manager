import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


test('renders H1 Element', () => {

  render(<App/>)
  expect(screen.getByText('Greetings, Chelsea')).toBeInTheDocument();
  
});

// test('renders Weather', () => {

//   render(<App/>)
//   expect(screen.getByText(<News/>)).toBeInTheDocument();

// }); 