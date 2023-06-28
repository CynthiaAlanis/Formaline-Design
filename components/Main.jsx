import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';

import { FaHouzz, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'  >
        <div >
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-gray-700 '>
            Hi, Welcome to <span className='text-[#5651e5]'> 
            <br/>
            Formaline Design <br/>
            & 
            Construction</span>
          </h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
          At Formaline Design and Construction, we offer a wide range of renovation services, tailored to your specific preferences, style, and budget. 
          </p>
          <Link href='/#projects'>
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Click here 
              </button>
          </Link>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/frank-ramirez-jr-46966921'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://www.houzz.com/professionals/kitchen-and-bath-designers/formaline-design-and-construction-inc-pfvwus-pf~310509934'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaHouzz />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
          
          </div>
        </div>
      </div>
    </div>
 
  );
};

export default Main;
