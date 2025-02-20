import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import 'swiper/css/pagination'

export default function FirstProducts({ data }: any) {
	return <Swiper breakpoints={{
		0: { slidesPerView: 2, spaceBetween: 10 },
		768: { slidesPerView: 5, spaceBetween: 10 }
	}}
		className='myswiper'>
		{data.map((value: any, index: any) =>
			<SwiperSlide className='box' key={index}>
				<div className='overflow-hidden productsBox border rounded px-5 pb-5 flex flex-col items-center' key={index}>
					<span className='h-10 w-7 bg-[#bc264b] self-end text-white rounded-t text-[14px] pt-0.5 font-bold'>%{value.percent}</span>
					<Image src={value.image} alt={`${value.image}`} className='w-1/2 h-1/2' />
					<h3>{value.title}</h3>
					<div><span className='pe-5 inline-block'><del>{value.preprice}</del></span><span className='inline-block text-[#6fcf97]'>{value.curprice} تومان</span></div>
					<p className='self-start text-[#f6b0b0] text-sm'>{value.reminder} عدد باقیمانده</p>
				</div>
			</SwiperSlide>
		)}
	</Swiper>
}