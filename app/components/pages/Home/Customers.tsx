import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import 'swiper/css/pagination'

export default function Customers({ data }: any) {
	return <>
		<h2 className='text-center text-2xl text-[#313131]'>پرفروش ترین برندها در مدیسه</h2>
		<div className='flex mt-5 justify-center gap-x-5'>
			<Swiper breakpoints={{
				0: { slidesPerView: 3, spaceBetween: 10 },
				768: { slidesPerView: 4, spaceBetween: 10 }
			}}
				className='myswiper'>
				{data.map((value: any, index: any) =>
					<SwiperSlide className='box' key={index}>
						<div className='h-20 md:h-48 border flex justify-center items-center bg-[#f9f9f9]' key={index}>
							<Image src={value} alt='pic' />
						</div>
					</SwiperSlide>
				)}
			</Swiper>
		</div>
	</>
}