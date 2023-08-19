import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HeroSection = ({title, imgUrl}) => {
    return (
        <div className=''>
           <div className='bg-slate-300'>
           <div className='container'>
                <div className='row items-center'>
                    <div className='md:col-6 space-y-5'>
                        <h2 className='text-4xl font-semibold '>{title}</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque placeat accusamus nihil consequuntur alias similique!</p>
                        <Link href='/movie' className='btn btn-warning'>See more movies</Link>
                    </div>
                    <div className='md:col-6 py-10'>
                        <Image src={imgUrl} alt="web" height={200} width={400}></Image>
                    </div>
                </div>
            </div>
           </div>
        </div>
    );
};

export default HeroSection;