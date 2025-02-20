import Image from "next/image";
import pic1 from '../../../images/blog/jean-pants.webp'
import pic2 from '../../../images/blog/converse-all-star.jpg'
import pic3 from '../../../images/blog/pic3.jpg'
import pic4 from '../../../images/blog/pic4.jpg'

export default function HeaderNews() {
	return <>
		<div className='w-full md:w-1/2 relative group overflow-hidden rounded-lg'>{/*rounded-lg baraye ine dar hover saf mishe. */}
			<span className='bg-[#2e508d] text-white px-2 rounded-lg absolute top-3 start-3 z-10'>عمومی</span>
			<Image src={pic1} alt='pic' className='h-[30rem] rounded-lg group-hover:scale-110 transition duration-500' />
			<h2 className='text-[1.7rem] absolute bottom-14 start-4 text-white z-10'>10 ترفند برای استایل با شلوار جین</h2>
			<p className='text-slate-100 z-10 absolute start-4 bottom-6'>02 دی 1403</p>
			<div className='w-full h-full bg-red-500 absolute top-0 opacity-50 rounded-lg'></div>
		</div>
		<div className='flex flex-col w-full md:w-1/2 gap-y-1'>
			<div className='relative group overflow-hidden rounded-lg'>
				<span className='bg-[#852a2a] text-white px-2 rounded-lg absolute top-3 start-3 z-10'>مد و استایل</span>
				<Image src={pic2} alt='pic' className='h-[15rem] rounded-lg group-hover:scale-110 transition duration-500' />
				<h2 className='text-[1.3rem] absolute bottom-12 start-4 text-white z-10'>تفاوت کفش کانورس و آل استار در چیست؟</h2>
				<p className='text-slate-100 z-10 absolute start-4 bottom-5'>02 دی 1403</p>
				<div className='w-full h-full bg-blue-500 absolute top-0 opacity-50 rounded-lg'></div>
			</div>
			<div className='flex gap-x-1'>
				<div className='w-1/2 relative group overflow-hidden rounded-lg'>
					<Image src={pic3} alt='pic' className='h-[15rem] rounded-lg group-hover:scale-110 transition duration-500' />
					<h2 className='text-[1.2rem] absolute bottom-5 start-4 text-white z-10'>10 نکته کاربردی برای انتخاب لباس مهمانی مناسب</h2>
					<div className='w-full h-full bg-green-500 absolute top-0 opacity-50 rounded-lg'></div>
				</div>
				<div className='w-1/2 relative group overflow-hidden rounded-lg'>
					<Image src={pic4} alt='pic' className='h-[15rem] rounded-lg group-hover:scale-110 transition duration-500' />
					<h2 className='text-[1.2rem] absolute bottom-5 start-4 text-white z-10 w-5/6'>تم تولد السا، 6 ایده جذاب و کم‌ هزینه برای یک جشن تولد جادویی</h2>
					<div className='w-full h-full bg-indigo-500 absolute top-0 opacity-50 rounded-lg'></div>
				</div>
			</div>
		</div>
	</>
}