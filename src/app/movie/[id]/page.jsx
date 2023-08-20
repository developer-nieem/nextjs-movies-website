import Image from 'next/image';
import React from 'react';

const SingleMovie = async({params}) => {
    const id =  params.id

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
    const moviesData=  data.titles.find(element => element.jawSummary.id === parseInt(id))
    console.log(moviesData.jawSummary.type);

    const curData=  moviesData.jawSummary
    return (
        <div className='container w-2/3 py-10'>
            <div>
                <h3 className='font-semibold text-lg my-10'>Netflix \ <span className='text-red-500'> {curData.type} </span> </h3>
                <Image src={moviesData.jawSummary.backgroundImage.url} alt='movie' width={400} height={300}></Image>
                <h2 className='text-4xl mt-5'>{curData.title}</h2>
                <p>{curData.synopsis}</p>
            </div>
        </div>
    );
};

export default SingleMovie;