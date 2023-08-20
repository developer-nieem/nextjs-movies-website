import MovieCard from '@/components/MovieCard';
import Link from 'next/link';
import React from 'react';


const MoviePage = async() => {


    const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'b2db8cc8ebmsh2c4f8c812646ffcp1e47b8jsne492fad72f6b',
        'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
      }
    };

    const res =  await fetch(url , options);
    const data = await res.json();
    const moviesData=  data.titles


    return (
        <div className='container'>
           
           <h2 className='text-4xl my-8 font-semibold'>Series & Movies</h2>
           <div className='row'>
              {
                moviesData.map(curEle =>  <MovieCard key={curEle} curEle={curEle}></MovieCard> )
              }
           </div>


        </div>
    );
};

export default MoviePage;