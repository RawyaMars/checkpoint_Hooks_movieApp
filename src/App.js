import './App.css';
import { useState } from 'react';
import { movieList } from "./data";
import Movie from './Components/Movie';
import Navbar from './Components/Navbar';
function App() {
  const [movies, setMovie] = useState(movieList);
  const [title, setTitle] = useState("")
    const [rating, setRating] = useState(1)
const [genre, setGenre] = useState("")

 let handleRating=(x)=>setRating(x)
 let handleTitle=(x)=>{setTitle(x)
console.log(title)}
 let handleGenre=(x)=>setGenre(x)
  const handleDelete=(id)=>setMovie(movies.filter(el=>el.id!==id))
  const handleAdd=(newMovieItem)=>{setMovie([...movies,newMovieItem])}
  const handleEdit=(editedMovie)=>{
    setMovie(movies.map(el=>el.id===editedMovie.id?{...el,...editedMovie}:el))

  }
  return (
    <div className="App">
      <Navbar len={movies.length} handleAdd={handleAdd} title={title} rating={rating} genre={genre} handleRating={handleRating} handleTitle={handleTitle} handleGenre={handleGenre}  />
     <Movie data={movies.filter(el=>el.title.toLowerCase().includes(title.toLowerCase())&&(el.rating>=rating)&&(el.genre.toLowerCase().includes(genre.valueOf().toLowerCase())))} handleDelete={handleDelete} handleEdit={handleEdit}></Movie>
    </div>
  );
}

export default App;
