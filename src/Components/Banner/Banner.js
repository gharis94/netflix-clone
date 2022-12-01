import React,{useState,useEffect} from 'react';
import './Banner.css';
import axios from '../../utils/axios';
import Request from '../../utils/Request';


const Banner = () => {
    const [movie,setMovie]=useState([]);

    useEffect(()=>{
        const fetchMovie =async()=>{
            const rsp = await axios.get(Request.fetchNetflixOrignals);
            const a = rsp.data.results[
                Math.floor(Math.random()*rsp.data.results.length-1)
            ]
            setMovie(a)
        }
        fetchMovie();
        return fetchMovie;
    },[])
    

    const truncate=(str='',n)=>{
        return str?.length>n? str.substr(0,n-1)+'...':str
    }
  return (
    <div className='banner'>
        <header className='banner-header' style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie && movie.backdrop_path}")`,
            backgroundSize:'cover',
            backgroundPosition:'center center'
        }}>
            <div className='banner-content'>
                <h1 className='banner-title'>
                {movie?.name || movie?.title || movie.orignal_ame} 
                </h1>
                <div className='banner-buttons'>
                    <button className='banner-button'>Play</button>
                    <button className='banner-button'>My List</button>
                </div>
                <h1 className='banner-description'>
                {
                    truncate( movie.overview, 100)
                }
                </h1>
                
            </div>    
            <div className ='banner-footer' />
        </header>
        
    </div>
  )
}

export default Banner;