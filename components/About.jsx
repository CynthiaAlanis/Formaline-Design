import React from 'react';
import Image from 'next/image';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            
          </p>
          <p className='py-2 text-gray-600'>
          Welcome to Formaline Design and Construction, your one-stop-shop for all your renovation needs. With over four decades of experience in the industry, we have been serving California homeowners with exceptional construction services since 1983.
<br/>
<br/>
Our founder and lead contractor discovered his passion for construction while working alongside his father during his teenage years. Since then, he has been devoted to bringing people's home improvement dreams to life. Our team of skilled professionals is committed to delivering quality craftsmanship and outstanding customer service, and we take pride in the relationships we build with our clients.
<br/>
<br/>
At Formaline Design and Construction, we offer a wide range of renovation services, tailored to your specific preferences, style, and budget. From planning and design to material selection and construction, we work with you every step of the way to ensure that your vision becomes a reality. Whether you're looking to upgrade your kitchen, bathroom, or entire home, we have the expertise to get the job done right.
<br/>
<br/>
Thank you for considering Formaline Design and Construction for your next renovation project. We look forward to working with you and bringing your home improvement dreams to life.
<br/>
          </p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
