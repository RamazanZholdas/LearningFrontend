import React, { useState } from 'react';

function App() {
  const [result, setResult] = useState(['thing 1', 'thing 2']);

  function addItem() {
    setResult((prevResult) => [...prevResult, `thing ${prevResult.length + 1}`]);
    console.log(result);
  }

  return (
    <div className="flex justify-center items-center flex-col">
      <button
        onClick={addItem}
        className="mt-9 rounded-md bg-green-600 border-2 border-white text-white w-16 h-16 text-lg">
        +
      </button>
    </div>
  );
}

export default App;
