// import Image from 'next/image';
// import Link from 'next/link';
import React from 'react';
import KtnImg from '../public/assets/projects/1.ktn.png';
import WineImg from '../public/assets/projects/3.wine.JPEG'
import FanImg from '../public/assets/projects/4.fan.JPEG'
import TvImg from '../public/assets/projects/5.tv.JPEG'
import sixImg from '../public/assets/projects/6.mix.JPEG'
import sevenImg from '../public/assets/projects/7.bath.JPEG'
import eightImg from '../public/assets/projects/8cab.JPEG'
import nineImg from '../public/assets/projects/9.sink.JPEG'
import Pantry from '../public/assets/projects/10.pantry.jpg'
import Countertop from '../public/assets/projects/11.countertops.jpg'
import Fireplace from '../public/assets/projects/12.fireplace.jpg'
import Ktn from '../public/assets/projects/20.kitchen.jpg'
import Bathroom from '../public/assets/projects/14.bathroom.jpeg'
import Bathroom2 from '../public/assets/projects/15.bath.jpeg'
import stove from '../public/assets/projects/17.stove.jpeg'
import Stove from '../public/assets/projects/18.Stove.jpeg'
import Sink from '../public/assets/projects/19.Sink.jpeg'
import Ksink from '../public/assets/projects/21.sink.jpg'
import Bsink from '../public/assets/projects/16.Bsink.jpeg'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#6C744A]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Kitchen'
            backgroundImg={KtnImg}
            projectUrl='/KtnImg'
            
          />
          <ProjectItem
            title='Wine Cabinet'
            backgroundImg={WineImg}
            projectUrl='/kitchen'
            

          />
          <ProjectItem
            title='Wall Mounted Range Hood'
            backgroundImg={FanImg}
            projectUrl='/netflix'
            

          />
          <ProjectItem
            title='Kitchen'
            backgroundImg={TvImg}
            // projectUrl='/'
            

          />
            <ProjectItem
            title='Cabinets'
            backgroundImg={sixImg}
            // projectUrl='/'
            

          />
            <ProjectItem
            title='Cabinets'
            backgroundImg={sevenImg}
            // projectUrl='/'
            

          />
            <ProjectItem
            title='Cabinets'
            backgroundImg={eightImg}
            // projectUrl='/'
            

          />
            <ProjectItem
            title='Cabinets'
            backgroundImg={nineImg}
            // projectUrl='/'
            

          />
            <ProjectItem
            title='Pantry'
            backgroundImg={Pantry}
            // projectUrl='/'
            

          />
            <ProjectItem
            title='Kitchen'
            backgroundImg={Countertop}
            // projectUrl='/netflix'
            

          />
            <ProjectItem
            title='Bathroom'
            backgroundImg={Fireplace}
            // projectUrl='/'
            

          />
            <ProjectItem
            title='Bathroom'
            backgroundImg={Bathroom}
            // projectUrl='/'
           

          />
                   
            <ProjectItem
            title='Fireplace'
            backgroundImg={Bathroom2}
            // projectUrl='/'
            

          />
            
                    
            <ProjectItem
            title='Sink'
            backgroundImg={Bsink}
            // projectUrl='/'
            

          />

            <ProjectItem
            title='Sink'
            backgroundImg={Sink}
            // projectUrl='/'
            

          />  
          
            <ProjectItem
            title='Countertops'
            backgroundImg={Stove}
            // projectUrl='/'
            

          />
            <ProjectItem
            title='Countertops'
            backgroundImg={stove}
            // projectUrl='/'
            

          />

            <ProjectItem
            title='Kitchen'
            backgroundImg={Ktn}
            // projectUrl='/'
            

          />
            <ProjectItem
            title='Kitchen Sink'
            backgroundImg={Ksink}
            // projectUrl='/'
            

          />
       
        </div>
      </div>
    </div>
  );
};

export default Projects;
