import React from 'react';
import Review from './Review';



function App() {
  return  (
    <main>
      <section className="container">
        <div className="title">
          <h2>Merkle's Fashion Store</h2>
          <h2 id='extra-title'>Clients' Feedback</h2>
        </div>

        <Review/>

      </section>
    </main>
  )
}

export default App;
