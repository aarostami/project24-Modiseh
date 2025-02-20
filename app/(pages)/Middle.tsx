'use client'
import '../header.css'
import { dataArray, albiBrandArray, customersArray, luxuryBrandArray, aboutusArray, optionsArray, productsArray } from '../api/db'
import Image from 'next/image'
import Search from '../components/Search'
import pic1 from '../images/pic1.webp'
import pic2 from '../images/pic2.webp'
import ad1 from '../images/advert/1.webp'
import ad2 from '../images/advert/2.webp'
import ad3 from '../images/advert/3.webp'
import ad4 from '../images/advert/4.webp'
import CategorySlider from '../components/pages/Home/CategorySlider'
import FirstProducts from '../components/pages/Home/FirstProducts'
import SecondProducts from '../components/pages/Home/SecondProducts'
import ThirdProducts from '../components/pages/Home/ThirdProducts'
import Customers from '../components/pages/Home/Customers'
import Magazine from '../components/pages/Home/Magazine'
import About from '../components/pages/Home/About'
import Slider from '../components/pages/Home/Slider'
import DeliveryOption from '../components/pages/Home/DeliveryOption'

export default function Middle() {
	return <main className='main bg-[#f9f9f9]'>
		{/* <Search /> */}
		<section className='pb-8 md:pt-8'>
			<Slider />
		</section>
		<section className='container mx-auto md:px-44'>
			<section className='flex justify-between gap-x-2'>
				<CategorySlider data={dataArray} />
			</section>
			<section className='flex justify-between gap-x-3 py-12'>
				<FirstProducts data={productsArray} />
			</section>
			<section className='flex flex-col md:flex-row justify-center gap-x-4 gap-y-4 md:gap-y-0'>
				<Image src={pic1} alt='pic1' className='md:w-4/6 h-2/3 rounded-xl' />
				<div className='flex flex-col gap-y-4 items-end'>
					<Image src={pic2} alt='pic2' className='h-2/3 rounded-xl w-full' />
					<Image src={pic2} alt='pic3' className='h-2/3 rounded-xl w-full' />
				</div>
			</section>
		</section>
		<section className='flex h-64 my-20 md:my-24'>
			<SecondProducts data={luxuryBrandArray} />
		</section>
		<section className='container'>
			<section className='border w-full md:w-10/12 mx-auto rounded-lg'>
				<ThirdProducts data={albiBrandArray} />
			</section>
			<section className='container mx-auto md:px-44'>
				<div className='arvertBox md:flex md:h-64 gap-x-4 mt-14'>
					<Image src={ad1} alt='ad1' className='w-full md:w-1/2 rounded-lg' />
					<Image src={ad2} alt='ad2' className='w-full md:w-1/2 rounded-lg mt-5 md:mt-0' />
				</div>
				<Image src={ad3} alt='ad3' className='h-14 md:h-24 my-4 rounded-lg' />
				<Image src={ad4} alt='ad4' className='h-56 my-4 rounded-lg' />
			</section>
			<section className='customers my-16 mx-auto md:px-44'>
				<Customers data={customersArray} />
			</section>
			<section className='magazine my-14 container mx-auto md:px-44'>
				<Magazine />
			</section>
			<section>
				<DeliveryOption data={optionsArray} />
			</section>
			<section className='aboutus container mx-auto md:px-44 py-10'>
				<About data={aboutusArray} />
			</section>
		</section>
	</main>
}
