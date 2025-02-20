import { Swiper, SwiperSlide } from 'swiper/react'
import { Thumbs, Navigation, FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/thumbs'
import 'swiper/css/navigation'
import Image from 'next/image'
import { useState } from 'react'


export default function Slider({ data }: any) {
	const [thumbsSwiper, setThumbsSwiper]: any[] = useState(null)

	return <>
		<div className='w-1/4'>
			<Swiper modules={[Thumbs]} onSwiper={(swiper :any) => setThumbsSwiper(swiper)} height={120} watchSlidesProgress={true} direction='vertical' className="mySwiper h-[33rem]">
				{data[0].sliderPic.map((value: any, index: any) => <SwiperSlide key={index}><Image src={value} alt='pic' className='h-28 w-20' /></SwiperSlide>)}
			</Swiper>
		</div>
		<div className='w-3/4'>
			<Swiper modules={[Thumbs]} thumbs={{ swiper: thumbsSwiper }} className="mySwiper2 h-[30rem]">
				{data[0].slider2Pic?.map((value: any, index: any) => <SwiperSlide key={index} className='h-full'><Image src={value} alt='pic' className='w-96 h-full' /></SwiperSlide>)}
			</Swiper>
		</div>
	</>
}