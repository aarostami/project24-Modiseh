'use client'
import Image from 'next/image'
import logo from '../../images/logo.png'
import Link from 'next/link'
import Nav from './Nav'
import profileIcon from '../../images/profile.svg'
import searchIcon from '../../images/search.svg'
import modiIcon from '../../images/modi.svg'
import basketIcon from '../../images/basket.svg'
import modiredIcon from '../../images/modilogored.svg'
import { useState } from 'react'
import { productsArray } from '../../api/db'

export default function Header() {
	const dataArray = [
		{
			text: 'زنانه', link: 'women', subnav: [
				{
					text: 'لباس زنانه',
					subsubnav: [
						'پالتو زنانه',
						'کاپشن زنانه',
						'بارانی زنانه',
						'بافت و سویشرت زنانه',
						'مانتو زنانه',
						'سارافون زنانه',
						'شال و روسری و مقنعه'
					]
				},
				{ text: 'لباس زیر و راحتی زنانه' },
				{ text: 'کیف و کفش زنانه' },
				{ text: 'اکسسوری زنانه' }
			]
		},
		{ text: 'مردانه', link: 'men' },
		{ text: 'بچگانه', link: 'kids' },
		{ text: 'آرایشی و بهداشتی', link: 'category-beauty' },
		{ text: 'لوازم خانه', link: 'homeware' },
		{ text: 'سوپرمارکت', link: 'supermarket' },
		{ text: 'الکترونیک', link: 'electronic' },
		{ text: 'سفر و ورزش', link: 'travel', subnav: [{ text: 'پوشاک و کفش ورزشی' }, { text: 'لوازم ورزش و سفر' }] },
		{ text: 'هدیه', link: 'gifts' },
		{ text: 'ارتباط با مدیسه', link: 'contactus' },
	]

	const [searchkey, setSearchkey] = useState(false)
	const [searchArr, setSearchArr]: any = useState([])

	function searchHandle(e: any) {
		setSearchkey(true)
		var s = productsArray.map((v) => {
			if (e.target.value != '') {
				if (v.title.search(e.target.value) != -1 || v.preprice.search(e.target.value) != -1 || v.curprice.search(e.target.value) != -1) {
					return v
				}
			}
		})
		setSearchArr(s)
	}

	return <><header className="mx-auto bg-[#f9f9f9] py-6 hidden md:flex flex-row justify-between gap-x-4 items-center">
		{/* <div className='container flex flex-row mx-auto justify-between gap-x-4 items-center'> */}
		<div className='logo hidden md:block w-3/12'>
			<Link href='/'><Image src={logo} alt='logo' className='w-6/12 justify-self-end' /></Link>
		</div>
		<nav className='w-full md:w-6/12 relative'>
			<input type='search' onBlur={() => setSearchkey(false)} onChange={(e) => searchHandle(e)} className='block w-full p-2 bg-gray-100 rounded-lg' placeholder="جستجو کنید ..." />
			{searchkey == true ? <div className='flex w-full h-72 bg-white border rounded-md absolute z-10 mt-2'>
				{searchArr.map((value: any, index: any) => {
					if (value == undefined) return false;
					else {
						if (index >= 2) {
							console.log(value)
							return <div className='w-1/3 productsBox border pb-3 rounded flex flex-col items-center' key={index}>
								<div className='bg-[#f7f7f7] w-full flex flex-col items-center px-3'>
									{/* <span className='h-10 w-7 bg-[#bc264b] text-white self-end rounded-t'>%{value.percent}</span> */}
									<Image src={value.image} alt={`${value.image}`} className='w-1/2 h-20' />
								</div>
								<div className='px-3 pt-3 flex flex-col items-center'>
									<h3 className=''>{value.title}</h3>
									<span className='pe-5 inline-block'><del>{value.preprice}</del></span><span className='inline-block text-[#6fcf97] font-bold'>{value.curprice} تومان</span>
								</div>
							</div>
						}
					}
				})}
			</div> : ''}
			<Nav data={dataArray} />
		</nav>
		<div className='login hidden md:block w-3/12'>
			<h5 className='text-gray-700'>وارد شوید</h5>
		</div>
		{/* </div> */}
	</header>
		<header className='block md:hidden bg-white h-20'>
			<nav className='w-full md:w-6/12'>
				<input type='search' className='block w-full p-2 bg-gray-100 rounded-lg' placeholder="جستجو کنید ..." />
				<Nav data={dataArray} />
			</nav>
			<div className='fixed bottom-0 bg-white h-[4rem] sm:h-[4rem] w-full z-10 border-t'>
				<ul className='flex justify-between bg-[#F0F0F0] mx-1 rounded-full absolute bottom-0 w-[97%]'>
					<li className='flex flex-col justify-center w-1/5 text-center py-1'>
						<Link href='/' className='text-[11px]'>
							<i><Image src={basketIcon} alt='pic' className='mx-auto' /></i>
							سبد خرید
						</Link>
					</li>
					<li className='bg-white w-1/5'>
						<span className='flex flex-col justify-center h-full bg-[#F0F0F0] rounded-tl-[40px] text-center'>
							<Link href='/' className='text-[11px]'>
								<i><Image src={searchIcon} alt='pic' className='mx-auto' /></i>
								دسته بندی و جستجو
							</Link>
						</span>
					</li>
					<li className='w-1/5 bg-white'>
						<div className='flex flex-col justify-center h-full w-14 mx-auto border-white rounded-full bg-[#F0F0F0]'>
							<Image src={modiredIcon} alt='pic' className='mx-auto bg-[#F0F0F0]' />
						</div>
					</li>
					<li className='bg-white w-1/5'>
						<span className='flex flex-col justify-center h-full bg-[#F0F0F0] rounded-tr-[40px] text-center'>
							<Link href='/' className='text-[11px]'>
								<i><Image src={modiIcon} alt='pic' className='mx-auto' /></i>
								شهر مدیسه
							</Link>
						</span>
					</li>
					<li className='flex flex-col justify-center w-1/5 text-center'>
						<Link href='/' className='text-[11px]'>
							<i><Image src={profileIcon} alt='pic' className='mx-auto' /></i>
							پروفایل
						</Link>
					</li>
				</ul>
			</div>
		</header>
	</>
}
