import react from "react";

let img_path="https://image.tmdb.org/t/p/w500";

const MovieList=(movie)=>{
    
    return(
        
        <div>
            <div className="movie">
                <img src={img_path + movie.info.poster_path} className="poster"></img>
                <div className="movie-details">
                    <div className="box">
                        <h4 className="title">{movie.info.title}</h4>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MovieList;