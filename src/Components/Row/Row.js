import React,{useState,useEffect} from 'react';
import axios from '../../utils/axios';
import './Row.css'

const url = 'https://image.tmdb.org/t/p/original/'

const Row = ({title,fetchUrl,isLarge=false}) => {
  const [state,setState] = useState([]);

  useEffect(()=>{
    const fetchData=async()=>{
      const rsp = await axios.get(fetchUrl);
      setState(rsp.data.results);
      return rsp;
    }
    fetchData();
    
  },[fetchUrl])

  return (
    <div className='row'>
        <h2 className='row-title'>{title.toUpperCase()}</h2>
        <div className='row-container'>
          {
            state.map(movie=>(
              <img key={movie.id} className={`row-poster ${isLarge? 'poster-large':''}`}
              src={`${url}${isLarge? movie.poster_path:movie.backdrop_path}`}
            />
            ))
             
          }
        </div>
    </div>
  )
}

export default Row;
