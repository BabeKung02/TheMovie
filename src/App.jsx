import React, {useState , useEffect} from "react";
import MovieList from "./components/MovieList";
import './App.css';
import Cart from "./components/Cart";

let Logo = ["BabeMovie"];
let API_key="&api_key=88c1d19be3079c6ade78443d397567f5";
let base_url = "https://api.themoviedb.org/3";
let url = base_url+"/discover/movie?sort_by=popularity.desc"+API_key;

const App = () => {
    const [movieData,setData] = useState([]);
    const [url_set,setUrl] = useState(url);
    const [search,setSearch] = useState();
    const [show,setShow] = useState(true);

    useEffect(()=>{
        fetch(url_set).then(res=>res.json()).then(data=>{
            setData(data.results);
        });
    },[url_set])

    const getData=(movieType)=>{

        setUrl(url);

    }
    const searchMovie=(e)=>{
        if(e.key=="Enter")
        {
            url = base_url+"/search/movie?api_key=88c1d19be3079c6ade78443d397567f5&query="+search;
            setUrl(url);
            setSearch("");
        }
    }

    return(
        <>
          <div className="header">
            <nav>
              <ul>
                  {Logo.map((value,index)=>{ 
                    return(
                        <li><a href="#" key={index} name={value} onClick = {(e)=>{getData(e.target.name)}}>{value} </a></li>
                    )   
                })
            }
        </ul>    
    </nav>
          <div className="search-btn">
    
           <input type="text" placeholder="Enter Movie Name" 
            className="inputText" onChange={(e)=>{setSearch(e.target.value)}} 
            value={search} onKeyPress={searchMovie}>
            </input>
        
              <button><i className="fas fa-search"></i></button>
                
                <div className="cart" onClick={(e) => setShow(false) } >
                  <span className="span1">
                    <i className="fas fa-cart-plus" ></i>
                  </span>
                      
                </div>
            </div>  
    </div>
    
            <div className="container">
                {
                    
                    (movieData.length==0)?<p className="notfound">Not Found</p>: movieData.map((item,index)=>{
                        return(
                            show ? <MovieList info={item} key={index}/> : <Cart/>
                        
                        )
                    })
                }
            </div>
        </>
    )
}
export default App;