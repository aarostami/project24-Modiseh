import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import 'swiper/css/pagination'

export default function CategorySlider({ data }: any) {
	return <>
		<Swiper breakpoints={{
			0: { slidesPerView: 4, spaceBetween: 10 },
			768: { slidesPerView: 8, spaceBetween: 10 },
		}}
			className='myswiper'>
			{data.map((value: any, index: any) =>
				<SwiperSlide className='box' key={index}>
					<Image src={value.image} alt={`${value.text}`} priority className='w-32 h-16 md:h-32 rounded-lg' />
					<p className='text-center py-2'>{value.text}</p>
				</SwiperSlide>
			)}
		</Swiper>
	</>
}