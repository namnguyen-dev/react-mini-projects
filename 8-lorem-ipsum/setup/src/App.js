import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(data.length);
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > data.length - 1) {
      amount = data.length - 1;
    }
    setText(data.slice(0, amount));
  };

  return (
    <section className="section-center">
      <h2>lorem ipsum project setup</h2>
      <form action="" className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={e => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
