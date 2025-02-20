import Image from "next/image";

export default function Atr({ data }: any) {
	// return <div className='w-full md:w-1/3'>
	return <div className='w-full'>
		<h2 className='bg-[#f1dfe6] text-[#9e2358] p-1 ps-5 rounded-md text-[1.2rem]'>عطر و ادکلن</h2>
		{data.map((value: any, index: any) =>
			<article key={index} className='flex mt-5 gap-x-3'>
				<Image src={value.pic} alt='pic' className='rounded-lg h-20' />
				<div className='flex flex-col justify-between'>
					<h6>{value.title}</h6>
					<p className='text-[#a75bb5] text-sm'>{value.date}</p>
				</div>
			</article>
		)}
	</div>
}
