import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import Country from './components/Country'
import Filter from './components/Filter'
import axios from 'axios'

function App() {
  const [newFilter, setNewFilter] = useState('')
  const [countries, setCountries] = useState([])
  const endpoint = 'https://restcountries.eu/rest/v2/all'

  
  const hook = () => {
    axios.get(endpoint).then((response) => {
      setCountries(response.data)
    })
  }
  useEffect(hook, [])


  
  const handleInputChange = (event) => {
    const input = event.target.value
    setNewFilter(input)
  }

  
  const handleClick = (event) => {
    setNewFilter(event.target.value)
  }


  return (
    <div>
      <h1>Countries Info</h1>
        <Filter info='Find Country' value={newFilter} onChange={handleInputChange}/>
      <br></br>
        <Country countries={countries} filter={newFilter} handleClick={handleClick}/>
      </div>
  );
}


export default App;

