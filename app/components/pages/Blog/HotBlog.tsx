import Image from "next/image";
import Link from "next/link";

export default function HotBlog({ data }: any) {
	return <>
		<h2 className='py-2 bg-[#e7e7e7] text-[#ff3a3a] rounded-lg ps-3 text-[1.3rem] font-bold border-r-4 border-[#ff3a3a]'>مقالات داغ</h2>
		<div className='py-4 columns-1 md:columns-2 gap-x-6 space-y-6'>
			{data.map((value: any, index: any) =>
				<article className='w-full rounded-lg shadow-lg h-[29rem]' key={index}>
					<Image src={value.picture} alt='pic' className='rounded-t-lg' />
					<div className='p-5'>
						<Link href='/post' className='text-lg'><h2>{value.heading}</h2></Link>
						<span className='py-2 inline-block text-[#a75bb5]'>{value.author}</span>
						<p className='text-[#888]'>{value.text}</p>
					</div>
				</article>
			)}
		</div>
	</>
}