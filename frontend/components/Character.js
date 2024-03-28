import React, { useState } from 'react'

function Character({worldName, peopleName, cardId}) { // Add the props

// Create a state to hold whether the homeworld is rendering or not
  const [renderWorld, setRenderWorld] = useState(false)

// Create a "toggle" click handler to show or remove the homeworld
  const clickHandler = () => {
    //set will make renderWorld true
    setRenderWorld(!renderWorld)
  }

  if (renderWorld) {
    return (
      // If button is clicked then renderWorld becomes true and it will add p tag
      <div className='character-card' key={cardId} onClick={clickHandler}>
        <h3 className='character-name'>{peopleName}</h3>
        <p>Planet: <span className='character-planet'>{worldName}</span></p>
      </div>
    
    )
  }

  // This will return default render, if it's not clicked
  return (
    <div className='character-card' key={cardId} onClick={clickHandler}>
      <h3 className='character-name'>{peopleName}</h3>
    </div>
  )
  

}



export default Character
