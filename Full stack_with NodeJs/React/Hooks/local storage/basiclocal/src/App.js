import React, {useState} from 'react';
import './App.css';
import useLocalStorage  from './useLocalStorage';
function App() {
  let [value, setValue] = useLocalStorage('name','');
  return (
    <div className="App">
      <input 
      type = 'text'
      onChange =  {(event) => setValue(event.target.value)}
      value = {value}
      />

    </div>
  );
}

export default App;
