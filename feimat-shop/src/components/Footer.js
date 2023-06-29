import React from 'react';
import watch from './watch.png';
import { Link } from 'react-router-dom';
// import {
//   FacebookButton,
//   InstagramButton,
//   LinkButton,
//   LinkedInButton,
//   TwitterButton,
//   YoutubeButton,
// } from 'components/widgets/Buttons';

function PageFooter() {
  return (
    <>
      <div className="text-white grid grid-cols-3 bg-black pb-4">
        <div>
        <div className='pt-8 pl-10 flex'>
          <Link to="/" className="shrink-0 grow-0 rounded-full">
            <img src={watch} width={100} height={100} alt="Feimat Logo" />
          </Link>
          <p className="pt-10 pl-4 text-3xl">FEIMAT SHOP</p>
        </div>
         <p className="text-white font-semibold pt-10 pl-4">
            {`© Copyright ${new Date().getFullYear()} Feimat Shop All rights reserved.`}
          </p>
        </div>
        <div>
          <h3 className="font-bold text-2xl mt-5 mb-2 text-white">Navigate</h3>
          <div className="grid gap-2 grid-cols-2 mt-6">
            <div className="flex flex-col">
              <Link to="/" className='text-white'>Home</Link>
              <Link to="/" className='text-white'>About Us</Link>
              <Link to="/" className='text-white'>Account</Link>
            </div>

            <div className="flex flex-col">
              <Link to="/" className='text-white'>Men Watches</Link>
              <Link to="/" className='text-white'>Women Watches</Link>
              <Link to="/" className='text-white'>Kid Watches</Link>
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-2xl mt-5 mb-2 text-white">
            Contact Us
          </h3>
          <div className="text-white">
            Nairobi, Kenya
          </div>
          <div className="text-white">
            info@feimat.co.ke
          </div>
          <div className="flex gap-x-4">
          </div>
        </div>
      </div>
      {/* This is the copyright section */}
      <div className="text-white grid grid-cols-3 w-full bg-black">
        <div>
        </div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}

export default PageFooter;
