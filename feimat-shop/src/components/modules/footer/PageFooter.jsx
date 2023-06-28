import React from 'react';
import { watch } from 'assets/images';
import { Link } from 'react-router-dom';
import {
	FacebookButton,
	InstagramButton,
	LinkButton,
	LinkedInButton,
	TwitterButton,
	YoutubeButton,
} from 'components/widgets/Buttons';

function PageFooter() {
	return (
		<>
			<div className='text-white grid grid-cols-3'>
				<div>
					<Link to='/' className='shrink-0 grow-0 rounded-full'>
						<img src={watch} width={150} height={150} alt='Feimat Logo' />
					</Link>
				</div>
				<div>
					<h3 className='font-bold text-2xl mt-5 mb-2 text-white'>
						Navigate
					</h3>
					<div className='grid gap-2 grid-cols-2 mt-6'>
						<div className='flex flex-col'>
							<LinkButton to='/'>Home</LinkButton>
							<LinkButton to='/about-us'>About Us</LinkButton>
							<LinkButton to='/announcement'>Account</LinkButton>
							<LinkButton to='/project'>Cart</LinkButton>
						</div>

						<div className='flex flex-col'>
							<LinkButton to='/blog'>Men Watches</LinkButton>
							<LinkButton to='/'>Women Watches</LinkButton>
							<LinkButton to='/program'>Kid Watches</LinkButton>
							<LinkButton to='/'>Contact Us</LinkButton>
						</div>
					</div>
				</div>
				<div>
					<h3 className='font-bold text-2xl mt-5 mb-2 text-white'>
						Contact Us
					</h3>
					<div className='text-white flex gap-x-2'>
						{/* <LocationButton /> */}
						Nairobi, Kenya
					</div>
					<div className='text-white flex gap-x-2 pt-4'>
						{/* <EmailButton /> */}
						info@feimat.co.ke
					</div>
					<h3 className='font-bold text-2xl mt-5 mb-2 text-white'>Join Us On</h3>
					<div className='flex gap-x-4'>
						<InstagramButton />
						<LinkedInButton />
						<FacebookButton />
						<TwitterButton />
						<YoutubeButton />
					</div>
				</div>
			</div>
      {/* This is the copyright section */}
      <div className='text-white grid grid-cols-3 w-full border-b-4 border-solid border-[#f2f5f7]'>
				<div>
					<p className='text-white font-semibold'>
						{`© Copyright ${new Date().getFullYear()} Feimat Shop All rights reserved.`}
					</p>
				</div>
				<div></div>
				<div></div>
			</div>
		</>
	);
}

export default PageFooter;