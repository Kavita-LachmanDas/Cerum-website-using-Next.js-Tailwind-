'use client'
import Image from 'next/image';

import App from './Slider';
import Card from './Card';
import Card2 from './Card2';
import Card3 from './Card3';

const MainContent = () => {
  return (
    <div id="main-content" className="hidden p-8 mt-16 mb-24 flex-1">
      <main>
        <section className="hero relative text-center text-white mt-8 px-4">
          <Image src='/main.avif' alt='hi' width={300} height={300} className="w-[65%] max-w-full mx-auto rounded-xl" />
          <div className="hero-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-4 rounded-lg w-[63%] box-border">
            <h2 className='font-serif text-3xl text-white'>Welcome to My Website</h2>
            <p className='font-serif text-white'>Explore our services and learn more about what we offer.</p>
          </div>
        </section>

        <div className="card w-[400px] p-5 text-center mx-auto mb-8 bg-blue-300">
          <h1 className='text-black font-serif text-2xl '>Our Services</h1>
          <p className='text-black'>We offer a wide range of services to meet your needs. From skin care to salon services, we&apos;ve got you covered.</p>
        </div>

        <Card />
        <Card2 />
        
        {/* Swiper */}
        <App />
        
        <Card3 />
      </main>
    </div>
  );
};

export default MainContent;
