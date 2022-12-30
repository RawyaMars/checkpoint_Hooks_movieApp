import React from 'react'
import EditMovie from './EditMovie';
import StarRating from './StarRating';

const MovieCard = ({movie,handleDelete,handleEdit}) => {

    let timeStamp = Date.parse(movie.publishDate);
    var date = new Date(timeStamp);
    var year = date.getFullYear();
  return (
    <div className='movie'>
        <h2>{movie.title}</h2>
        <h3> Genre: {movie.genre}</h3>
      <div>
        <img
          width="200"
          alt={`The movie titled: ${movie.title}`}
          src={movie.image}
        />
        
      </div>
      <StarRating rating={movie.rating}></StarRating>
      <h3>{year}</h3>
      <div className='btn'>
      <button id='btn-delete' onClick={()=>handleDelete(movie.id)}>Delete</button>
      <EditMovie movieToEdit={movie} handleEdit={handleEdit}>   </EditMovie>
      </div>
   
    </div>
  )
}

export default MovieCard