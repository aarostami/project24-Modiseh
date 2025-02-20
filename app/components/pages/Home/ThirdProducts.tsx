import Image from "next/image";
import Button from "../../common/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import 'swiper/css/pagination'

export default function ThirdProducts({ data }: any) {
	return <><article className='hidden md:flex justify-center items-center md:px-16'>
		<div className='flex flex-col gap-y-7'>
			<h2 className='text-xl'>برند لاکچری فیس</h2>
			<Button />
		</div>
	</article>
		<section className='flex justify-between gap-x-10 p-2 md:p-8'>
			<Swiper breakpoints={{
				0: { slidesPerView: 2, spaceBetween: 10 },
				768: { slidesPerView: 4, spaceBetween: 10 }
			}}
				className='myswiper'>
				{data.map((value: any, index: any) =>
					<SwiperSlide className='box' key={index}>
						<div className='overflow-hidden productsBox border pb-3 rounded flex flex-col items-center' key={index}>
							<div className='bg-[#f7f7f7] w-full flex flex-col items-center px-3'>
								<span className='h-10 w-7 bg-[#bc264b] text-white self-end rounded-t'>%{value.percent}</span>
								<Image src={value.image} alt={`${value.image}`} className='w-1/2' />
							</div>
							<div className='px-3 pt-3 flex flex-col items-center'>
								<h3 className=''>{value.title}</h3>
								<span className='pe-5 inline-block'><del>{value.preprice}</del></span><span className='inline-block text-[#6fcf97] font-bold'>{value.curprice} تومان</span>
							</div>
						</div>
					</SwiperSlide>
				)}
			</Swiper>
		</section>
	</>
}