import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Character from './Character'
import { date } from 'yup'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'


function App() {
  // Create state to hold the data from the API
   const [person, setPerson] = useState([]);
   const [world, setWorldd] = useState([])

  // Create effects to fetch the data and put it in state
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(urlPeople);
      const worldResult = await fetch(urlPlanets);
      result.json().then(json => {
        setPerson(json)
      });
      worldResult.json().then(world => {
        setWorldd(world)
      });
    }
    fetchData();
  }, [])


  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>

      {person.map(item => {
        const characterHomeWorld = world.find(homeWorld => homeWorld.id === item.homeworld);
        const planetName = characterHomeWorld ? characterHomeWorld.name : 'Unknown';
        return (
          
          // This will saves data from map into Character props
          // and Character function will render thouse saved props
          <Character
            key={item.id}
            worldName={planetName}
            peopleName={item.name}
            cardId={item.id}
          />
        );
      })}
    </div>
  );
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
