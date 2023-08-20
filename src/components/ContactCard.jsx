import Link from 'next/link';
import React from 'react';
import { FaEnvelope, FaRegPaperPlane, FaRocketchat } from "react-icons/fa";

const ContactCard = () => {
    return (
        <>
            <div className="row">
            <div className="md:col-4 ">
                <div className='text-center space-y-2  border-2 p-5 rounded-sm shadow-sm'>
                    <FaEnvelope className='text-red-500 m-auto'></FaEnvelope>
                    <h3 className='text-sm font-semibold'>Email</h3>
                    <p >Monday to Friday expected</p>
                    <p className='mt-5 text-xs'><Link  href='mailto:nieemhossen@gmail.com'>Send Email--  </Link></p>
                </div>
            </div>
            <div className="md:col-4 ">
                <div className='text-center space-y-2  border-2 p-5 rounded-sm shadow-sm'>
                    <FaRocketchat className='text-red-500 m-auto'></FaRocketchat>
                    <h3 className='text-sm  font-semibold'>Live Chat </h3>
                    <p >Monday, 7AM, to Friday expected</p>
                    <p className='mt-5 text-xs'><Link  href='mailto:nieemhossen@gmail.com'>Send Email--  </Link></p>
                </div>
            </div>
            <div className="md:col-4 ">
                <div className='text-center space-y-2  border-2 p-5 rounded-sm shadow-sm'>
                    <FaRegPaperPlane className='text-red-500 m-auto'></FaRegPaperPlane>
                    <h3 className='text-sm  font-semibold'>Community forum</h3>
                    <p >Monday to Friday expected</p>
                    <p className='mt-5 text-xs'><Link  href='mailto:nieemhossen@gmail.com'>Send Email--  </Link></p>
                </div>
            </div>
        </div>
        </>
    );
};

export default ContactCard;