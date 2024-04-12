import React, { useEffect, useState } from "react";
import banner from "../assets/money_heist_logo_by_huyvo2001_dfnfa4u.png";
import { FaPlay } from "react-icons/fa6";
import trailerMoneyhiest from "../assets/Money Heist _ Series Trailer _ Netflix.mp4";
import axios from "../axios/axios";
import tmdbrequests from "../API_Request/TMDB_Request";

function Banner() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(tmdbrequests.fetchNetflixOriginals);
      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return movies;
    }
    fetchData();
  }, []);
  function truncateDescription(description, maxLength) {
    if (description && movies.overview.length > maxLength) {
      return description.substring(0, maxLength) + "...";
    }
    return description;
  }

  // console.log(movies);

  return (
    <>
      <div
        className=""
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url('https://image.tmdb.org/t/p/original/${movies?.backdrop_path}')`,
          backgroundSize: 'cover',
          height: '100vh'
        }}
      >
        <div className="flex h-[100vh] -mt-16 justify-between gap-32">
          <div>
            {/* <img className="w-72 ml-5" src={banner} alt="Money Heist Banner" /> */}
            <div className="absolute inset-0 mt-64">
              <h1 className="mt-2 ml-12 text-5xl bold text-white">
                {movies.original_name || movies.name ||  movies.title}
              </h1>
              <div>
                <p className="text-gray-400 text-sm mt-2 ml-12">
                  {movies.first_air_date} | Maturity Rating:18+
                </p>
              </div>
              <p className="text-white text-lg ml-12 w-[30rem] mt-2">
                {truncateDescription(movies?.overview, 150)}
              </p>
              <div className="mt-12 flex">
                <button className="border rounded-md py-2 gap-1 flex items-center bg-white text-black border-gray-300 text-xl px-5 ml-12 hover:bg-gray-300 ">
                  <FaPlay /> Play
                </button>
                <button className="rounded-md py-2 text-white bg-gray-600 border-gray-300 text-xl px-5 ml-4 hover:bg-gray-800">
                  Watch Later
                </button>
              </div>
            </div>
          </div>
          <div className="text-white">
            {/* Add any additional content here */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
