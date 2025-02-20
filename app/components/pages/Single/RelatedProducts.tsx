import { Swiper, SwiperSlide } from 'swiper/react'
import { Thumbs, Navigation, FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/thumbs'
import 'swiper/css/navigation'
import Image from 'next/image'

export default function RelatedProducts({ data }: any) {
	return <Swiper slidesPerView={7} spaceBetween={5} breakpoints={{
		0: { slidesPerView: 2, spaceBetween: 10 },
		768: { slidesPerView: 7, spaceBetween: 5 }
	}}>
		{data.map((value: any, index: any) =>
			<SwiperSlide key={index} className='border rounded p-3 text-center'>
				<Image src={value.pic} alt='pic' className='w-44 h-48' />
				<h4>{value.title}</h4>
				<p className='text-sm text-[#6fcf97]'>{value.price}</p>
				<del className='text-sm'>{value.prevprice}</del>
			</SwiperSlide>)}
	</Swiper>
}