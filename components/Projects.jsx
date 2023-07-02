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
import Ktn from '../public/assets/projects/13.ktn.jpg'
import snk from '../public/assets/projects/15.sink.jpeg'
import stove2 from '../public/assets/projects/16.stove.jpeg'
import stove from '../public/assets/projects/14.stove.jpeg'
import bathroom1 from '../public/assets/projects/17.bathroom.jpeg'
import bathroom2 from '../public/assets/projects/18.bathroom.jpeg'
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
            // projectUrl='/KtnImg'
            tech='Remodel'
          />
          <ProjectItem
            title='Wine'
            backgroundImg={WineImg}
            // projectUrl='/kitchen'
            tech='Cabinet'

          />
          <ProjectItem
            title='Wall Mounted Range Hood'
            backgroundImg={FanImg}
            // projectUrl='/'
            tech='Installation'

          />
          <ProjectItem
            title='Living Room'
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
            // projectUrl='/netflix'
            tech='Countertop'

          />
            <ProjectItem
            title='Custom'
            backgroundImg={Fireplace}
            // projectUrl='/'
            tech='Fireplace'

          />
            <ProjectItem
            title='Custom'
            backgroundImg={Ktn}
            // projectUrl='/'
            tech='Kitchen'
          />
          <ProjectItem
            title='Custom'
            backgroundImg={snk}
            // projectUrl='/'
            tech='Sink'

          />
            <ProjectItem
            title='Kitchen'
            backgroundImg={Countertop}
            // projectUrl='/netflix'
            tech='Countertop'

          />
          <ProjectItem
            title='Custom'
            backgroundImg={stove}
            // projectUrl='/'
            tech='Stove'

          />
          <ProjectItem
            title='Kitchen'
            backgroundImg={stove2}
            // projectUrl='/netflix'
            tech='Countertop'

          />
            <ProjectItem
            title='Custom'
            backgroundImg={bathroom1}
            // projectUrl='/netflix'
            tech='Bathroom'

          />
            <ProjectItem
            title='Custom'
            backgroundImg={bathroom2}
            // projectUrl='/netflix'
            tech='Bathroom'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
