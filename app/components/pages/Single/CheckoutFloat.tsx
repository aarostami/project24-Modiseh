import Image from "next/image";

export default function CheckoutFloat({ data }: any) {
	return <div className='md:w-1/3'>
		<div className='bg-[#f9f9f9] rounded-lg p-3 mt-3 sticky top-0'>
			<div className='flex items-center gap-x-2'>
				<Image src={data[0].sliderPic[0]} alt='pic' className='rounded-lg border max-w-20 max-h-20' />
				<p>{data[0].title}</p>
			</div>
			<hr className='my-2' />
			<p>سایز:</p>
			<span>Free</span>
			<p className='py-4 text-2xl font-bold text-center'>{data[0].price}</p>
			<button className='bg-[#bc264b] text-white text-lg block w-full py-1 rounded-md'>افزودن به سبد خرید</button>
		</div>
	</div>
}