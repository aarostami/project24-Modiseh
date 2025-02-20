'use client'
import Image from 'next/image'
import { footer_col2, footer_col3, footer_download, social } from '@/app/api/db'
import FooterColumns from './FooterColumns'

export default function Footer() {

	return <footer className="bg-[#f9f9f9] pt-10 md:pt-16 mx-auto px-4 md:px-44 container">
		<section className='flex flex-wrap md:flex-nowrap gap-y-4 md:gap-x-14'>
			<FooterColumns {...{ footer_col2, footer_col3 }} />
		</section>
		<hr className='my-3' />
		<div className='text-[18px] text-[#889098] flex justify-center md:justify-between'>
			<p className='hidden md:block'>اخبار مدیسه</p>
			<div className='hidden md:block'>
				<input type='email' placeholder='آدرس ایمیلتان را وارد نمایید' className='px-3 py-0.5 rounded-lg w-[35rem]' />
				<button className="py-0.5 px-8 bg-[#bc264b] hover:bg-[#e92828] transition duration-500 rounded-lg text-white">ثبت</button>
			</div>
			<p className='hidden md:block'>شبکه ‌های اجتماعی</p>
			<ul className='flex gap-x-1'>
				{social.map((value, index) => <li key={index}><Image src={value} alt='pic' /></li>)}
			</ul>
		</div>
		<div className='bg-[#f1f1f1] rounded-lg h-20 hidden md:flex items-center px-5 my-20'>
			<h2 className='w-1/4 text-[1.2rem]'>دانلود اپلیکیشن مدیسه</h2>
			<ul className='w-3/4 flex justify-between gap-x-3'>
				{footer_download.map((value, index) => <li key={index}><Image src={value} alt='down' /></li>)}
			</ul>
		</div>
		<p className='text-center text-[#7190d8]'>© تمامی حقوق متعلق به | فروشگاه آنلاین مدیسه (شرکت توسعه تجارت الکترونیک گلستان) میباشد.</p>
	</footer>
}