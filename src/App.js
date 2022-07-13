import React, { useEffect, useState } from 'react';
import './App.css';
import NewContent from './components/NewContent';
import axios from 'axios';
import Contents from './components/Contents';

function App() {
  const [contents, updateContents] = useState([]);
  const [trigger, changeTrigger] = useState()

  function getData() {
    axios.get('http://localhost:3000/contents')
    .then((response) => {
      updateContents(response.data)

    })
  }

  useEffect(() => {
    getData()
  }, [trigger]);

  if(contents.length === 0){
    return (
      <div>
        <h3>loading...</h3>
     </div>
   )
  
  }

 

  return (
    <div className="App">
      <h1>My Mini Blog</h1>
      <NewContent updateTrigger={changeTrigger} />
      <Contents contents={contents} />
    </div>
  );
}

export default App;
