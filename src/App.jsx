import React from 'react'
import InputField from './Component/InputField'
import Login from './Component/Login/Login'
import Calculate from './Component/Calculate/Calculate';
import EvenHandler from './Component/EventHandler/EvenHandler';

function App() {
  return (
    <div>
      <InputField />
      <Login />
      <Calculate />
      <EvenHandler/>
    </div>
  )
}

export default App