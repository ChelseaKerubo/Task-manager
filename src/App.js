import React from 'react';
import './App.css';

import Weather from "./Weather";
import News from "./News";
import ToDo from "./ToDo";

function App() {
  return (
  <main>
    <h1>Greetings, Chelsea</h1>
    <Weather/>
    <section>
      <div>
        <h3>Latest headlines</h3>
        <div class="news"><News/></div>
      </div>
      <div>
        <h3>Today's Agenda</h3>
      <ToDo/>
      </div>
    </section>
  </main>
  );
}

export default App;
