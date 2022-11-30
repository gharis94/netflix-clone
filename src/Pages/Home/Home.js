import React from 'react';
import Row from '../../Components/Row/Row';
import Nav from '../../Components/Nav/Nav';
import Banner from '../../Components/Banner/Banner';
import Request from '../../utils/Request';

const Home = () => {
    return ( 
    <div>
        <Nav/>
        <Banner/>
        <Row title="Netflix orignals" fetchUrl={Request.fetchNetflixOrignals} isLarge/>
        <Row title="trending now" fetchUrl={Request.fetchTrending}/>
        <Row title="top rated" fetchUrl={Request.fetchTopRated}/>
        <Row title="action movies" fetchUrl={Request.fetchActionMovies}/>
        <Row title="comedy movies" fetchUrl={Request.fetchComedyMovies}/>
        <Row title="horror movies" fetchUrl={Request.fetchHorrorMovies}/>
        <Row title="romance movies" fetchUrl={Request.fetchRomanceMovies}/>
        <Row title="documentaries" fetchUrl={Request.fetchDocumentaries}/>
    </div>
 )
}

export default Home;