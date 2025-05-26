import './App.css';
import './style.css';
import React from 'react';
import User from './User';

function App() {
  function parentAlert(data){
    alert(data);
  }
  return (
    <div>
      <h1>Lifting State Up</h1>
     <User alert={parentAlert}/>
    </div>
  );
}

export default App;
