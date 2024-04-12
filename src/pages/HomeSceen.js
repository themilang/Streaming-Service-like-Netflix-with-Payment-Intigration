import React from "react";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import Rows from "../components/Rows";
import requests from "../API_Request/TMDB_Request";

const HomeSceen = () => {
  return (
    <>
      <Nav />
      <Banner />
      <div className={` text-white -mt-32`}>
       

       <div>
        <h2 className="ml-8 font-bold text-xl">Netflix Originals</h2>
       <Rows className=''
          title="Netflix Originals"
          fetchURL={requests.fetchNetflixOriginals}
          isLargeRow={true}
        />
       </div>
       <h2 className="ml-8 font-bold text-xl">Top Rated</h2>
        <Rows title="Top Rated" fetchURL={requests.fetchTopRated}   />
        <h2 className="ml-8 font-bold text-xl">Trending</h2>
        <Rows title="Trending" fetchURL={requests.fetchTrending}  />
        <h2 className="ml-8 font-bold text-xl">Action</h2>
        <Rows title="Action" fetchURL={requests.fetchActionMovies}  />
        <h2 className="ml-8 font-bold text-xl">Horror</h2>
        <Rows title="Horror" fetchURL={requests.fetchHorrorMovies}  />
        <h2 className="ml-8 font-bold text-xl">Romantic</h2>
        <Rows title="Romantic" fetchURL={requests.fetchRomanticMovies}  />
        <h2 className="ml-8 font-bold text-xl">Comedy</h2>
        <Rows title="Comedy" fetchURL={requests.fetchComedyMovies}  />
        <h2 className="ml-8 font-bold text-xl">Documentaries</h2>
        <Rows title="Documentaries" fetchURL={requests.fetchDocumentaries}  />
      </div>
    </>
  );
};

export default HomeSceen;
