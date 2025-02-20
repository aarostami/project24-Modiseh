import { sliderMain } from "../../../api/db";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import 'swiper/css'
import 'swiper/css/pagination'

export default function Slider() {
	return <Swiper pagination={{ clickable: true }} modules={[Pagination, Autoplay]} autoplay={{ delay: 3000 }} loop={true} spaceBetween={20} className='myswiper'>
		{sliderMain.map((value: any, index: any) => <SwiperSlide key={index}><Image src={value} alt='slide' priority className='h-64 md:h-auto' /></SwiperSlide>)}
	</Swiper>
}