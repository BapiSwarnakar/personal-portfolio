import React, { useEffect, useState } from "react";
import MovieSlider from "./MovieSlider";
import { useSelector } from "react-redux";
import MovieSectionShimmer from "../shimmer/MovieSectionShimmer";

const MovieSection = () => {
  
  const [showShimmer, setShowShimmer] = useState(true);
  

	const movies = useSelector((state) => state.movies);
  
  const nowPlayingMovies = movies?.nowPlayingMovies;
  
  const popularMovies = movies?.popularMovies;

  const topRatedMovies = movies?.topRatedMovies;

  const upcomingMovies = movies?.upcomingMovies;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowShimmer(false);
    }, 1000); // Delay for 1 seconds (adjust as needed)

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <>
    
      <div className="relative md:p-2 -mt-36">
      {(!nowPlayingMovies || showShimmer) ? (
        <MovieSectionShimmer />
      ) : (
        <MovieSlider title="Now Playing Movies" movies={nowPlayingMovies} />
      )}
      </div>
      {(!popularMovies || showShimmer) ? (
        <MovieSectionShimmer />
      ) : (
        <MovieSlider title="Popular Movies" movies={popularMovies} />
      )}
      {(!topRatedMovies || showShimmer) ? (
        <MovieSectionShimmer />
      ) : (
        <MovieSlider title="Top Rated Movies" movies={topRatedMovies} />
      )}
      {(!upcomingMovies  || showShimmer) ? (
        <MovieSectionShimmer />
      ) : (
        <MovieSlider title="Upcoming Movies" movies={upcomingMovies} />
      )}
      

    </>
  );
};

export default MovieSection;
