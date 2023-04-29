import Image from 'next/image';
import Link from 'next/link';
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
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Kitchen'
            backgroundImg={KtnImg}
            projectUrl='/KtnImg'
            tech='Remodel'
          />
          <ProjectItem
            title='Wine'
            backgroundImg={WineImg}
            projectUrl='/kitchen'
            tech='Cabinet'

          />
          <ProjectItem
            title='Wall Mounted Range Hood'
            backgroundImg={FanImg}
            projectUrl='/netflix'
            tech='Installation'

          />
          <ProjectItem
            title='Kitchen'
            backgroundImg={TvImg}
            // projectUrl='/'
            tech='Cabinets'

          />
            <ProjectItem
            title='Kitchen'
            backgroundImg={sixImg}
            // projectUrl='/'
            tech='Cabinets'

          />
            <ProjectItem
            title='Bathroom'
            backgroundImg={sevenImg}
            // projectUrl='/'
            tech='Cabinets'

          />
            <ProjectItem
            title='Kitchen'
            backgroundImg={eightImg}
            // projectUrl='/'
            tech='Cabinets'

          />
            <ProjectItem
            title='Bathroom'
            backgroundImg={nineImg}
            // projectUrl='/'
            tech='Cabinets'

          />
            <ProjectItem
            title='Kitchen'
            backgroundImg={Pantry}
            // projectUrl='/'
            tech='Pantry'

          />
            <ProjectItem
            title='Kitchen'
            backgroundImg={Countertop}
            projectUrl='/netflix'
            tech='Countertop'

          />
            <ProjectItem
            title='Custom'
            backgroundImg={Fireplace}
            // projectUrl='/'
            tech='Fireplace'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
