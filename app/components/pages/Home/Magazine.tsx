import Image from "next/image";
import mag1 from '../../../images/magazine/Blog_01_Desktop_.webp'
import mag2 from '../../../images/magazine/Blog_02.webp'
import mag3 from '../../../images/magazine/Blog_03.webp'
import mag4 from '../../../images/magazine/Blog_04_Desktop_.webp'

export default function Magazine() {
	return <>
		<h2 className='text-center text-2xl text-[#313131]'>مجله مدیسه</h2>
		<div className='magBox w-full flex justify-between mt-7 gap-x-4'>
			<Image src={mag2} alt='mag2' className='w-1/2 md:w-1/3 md:h-64 rounded-lg' />
			<Image src={mag1} alt='mag1' className='w-1/2 md:w-2/3 md:h-64 rounded-lg' />
		</div>
		<div className='magBox2 w-full flex justify-between mt-5 md:mt-16 gap-x-4'>
			<Image src={mag4} alt='mag4' className='w-1/2 md:w-2/3 md:h-64 rounded-lg' />
			<Image src={mag3} alt='mag3' className='w-1/2 md:w-1/3 md:h-64 rounded-lg' />
		</div>
	</>
}