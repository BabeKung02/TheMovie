import { useState , useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList';
import './App.css'

const API_URL = 'https://api.themoviedb.org/3/movie/550?api_key=88c1d19be3079c6ade78443d397567f5'

const App = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
    .then((res) => res.json())
    .then(data=>{
      setMovies(data.results)
    })

  },[])

  return (

  <div>
    {movies.map((movie) => <MovieList key={movie.id} {...movie}/>)}
  </div>

  )
}

export default App
