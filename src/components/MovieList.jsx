import React from 'react'

const API_IMG ="https://Image.tmdb.org/t/p/w500/"

const MovieList = ({title , poster_path}) => {
  return (
    <div>
        <h1>{title}</h1>
        <img src={API_IMG+poster_path}></img>
    </div> 
  );
};

export default MovieList