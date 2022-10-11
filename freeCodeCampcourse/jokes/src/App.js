import React from 'react';
import Joke from './components/Joke';

function App() {
  return (
    <div className="mx-auto max-w-screen-lg grid grid-cols-3 gap-4">
      <div>
        <Joke setup="I few years ago i throw a bumerang" punchline={2} />
      </div>
      <div>
        <Joke setup="I few years ago i throw a bumerang" punchline="Now i live in constant fear" />
      </div>
      <div>
        <Joke setup="I few years ago i throw a bumerang" punchline="Now i live in constant fear" />
      </div>
      <div className="col-span-3">
        <Joke setup="I few years ago i throw a bumerang" punchline="Now i live in constant fear" />
      </div>
      <div className="col-span-3">
        <Joke setup="I few years ago i throw a bumerang" punchline="Now i live in constant fear" />
      </div>
      <div className="col-span-3">
        <Joke punchline="Now i live in constant fear" />
      </div>
    </div>
  );
}

export default App;
