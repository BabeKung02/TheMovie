import react from "react";

let img_path="https://image.tmdb.org/t/p/w500";
let price = '200 Bath'

const MovieList=(movie)=>{
    
    function handleClick(event){
        alert(`คุณได้เพิ่มสินค้า ${movie.info.title} เข้าไปยังรถเข็น`)
    }
    return(
        
        <div>
            <div className="movie">
                <img src={img_path + movie.info.poster_path} className="poster"></img>
                <div className="movie-details">
                    <div className="box">
                        <h4 className="title">{movie.info.title}</h4>
                        <button className="price" onClick={handleClick}>{price}</button>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MovieList;