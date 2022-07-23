/*
import './App.css';
import React, {useState} from 'react';
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <button onClick = {() => setCount(count +1)} > count it </button>
      <p>{count}</p>
    </div>
  );
}
export default App;
*/
import './App.css';
import React, {useEffect} from 'react';
const Fun = () => {
  useEffect(() => {
    console.log("Hello UseEffect Inside");
  });
  console.log("Hello Useeffect Outside");
  return (
    <div className="App">
      <h1>Hello useEffect </h1>
    </div>
  )
}
export default Fun;
/* The Effect Hook lets you perform side effects in function components
If you’re familiar with React class lifecycle methods, you can think of useEffect Hook as  componentDidMount, componentDidUpdate, and componentWillUnmount combined.
when page is refreshed then first "console.log("Hello Useeffect Outside");" call then useEffect function call hoga.
/*
import './App.css';
import axios from 'axios';
import {useState} from 'react';
function App() {
  const [quote, setQuote] = useState('')
  const getQuote = () => {
    axios.get('https://api.quotable.io/random')
    .then(res => {
      setQuote(res.data.content)
    })
    .catch(err => {console.log(err)})
  }
  return (
    <div className="App">
      <button onClick = {getQuote}> Get Quote</button>
      {quote ?  <p> {quote} </p> : null}
    </div>
  );
}
  export default App;
*/

