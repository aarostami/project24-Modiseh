import Image from "next/image";
import Button from "../../common/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import 'swiper/css/pagination'

export default function SecondProducts({ data }: any) {
	return <>
		<article className='hidden md:w-1/3 md:flex justify-end items-center pe-20'>
			<div className='flex flex-col gap-y-7'>
				<h2 className='text-xl'>برند لاکچری فیس</h2>
				<Button />
			</div>
		</article>
		<article className='w-full md:w-2/3 bg-[#f1f1f1]'>
			<div className='w-full h-full flex gap-8 relative bottom-12'>
				<Swiper breakpoints={{
					0: { slidesPerView: 2, spaceBetween: 10 },
					768: { slidesPerView: 4, spaceBetween: 10 }
				}}
					className='myswiper'>
					{data.map((value: any, index: any) =>
						<SwiperSlide className='box' key={index}>
							{/* <div className='bg-white productsBox shadow-md rounded pb-3 flex flex-col items-center' key={index}> */}
							<div className='bg-[#f7f7f7] w-full h-full flex flex-col items-center px-3 rounded'>
								<span className='h-10 w-7 bg-[#bc264b] self-end text-white rounded-t'>%{value.percent}</span>
								<Image src={value.image} alt={`${value.image}`} className='w-1/2 h-1/2' />
								<div className='px-3 pt-3 flex flex-col items-center'>
									<h3 className='text-[#989ea6] text-[14px]'>{value.title}</h3>
									<div><span className='pe-5 inline-block'><del>{value.preprice}</del></span><span className='inline-block text-[#6fcf97] font-bold'>{value.curprice} تومان</span></div>
								</div>
							</div>
							{/* </div> */}
						</SwiperSlide>
					)}
				</Swiper>
			</div>
		</article>
	</>
}