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
    console.log(data);


    return (
        <div>
           
           
           <Link href='./movie/1' className='btn btn-secondary'>See more movie</Link >
        </div>
    );
};

export default MoviePage;