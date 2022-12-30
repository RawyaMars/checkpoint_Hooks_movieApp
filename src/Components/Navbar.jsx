import React from 'react'
import NewMovie from './NewMovie'
import Search from './Search'

const Navbar = ({len,handleAdd,title,rating,genre,handleRating,handleTitle,handleGenre}) => {
  return (
    <header className="App-header">
      <div style={{height:'40px',width:'250px'}}>
      <h2>Movies App</h2>
      </div>
    
    <Search title={title} rating={rating} genre={genre} handleRating={handleRating} handleTitle={handleTitle} handleGenre={handleGenre} ></Search>

    <div style={{height:'40px',width:'250px'}}>
    <NewMovie len={len} handleAdd={handleAdd}></NewMovie>
    </div>
  </header>
  )
}

export default Navbar