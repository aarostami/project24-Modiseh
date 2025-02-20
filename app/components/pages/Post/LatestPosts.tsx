import Image from "next/image";

export default function LatestPosts({ data }: any) {
	return <aside className='w-1/3 max-h-fit rounded-lg p-8'>
		<h2 className='text-[1.5rem] text-[#9e2358]'>آخرین مطالب</h2>
		<ul>
			{data.map((value: any, index: any) =>
				<li key={index} className='flex mt-5 gap-x-3'>
					<Image src={value.pic} alt='pic' className='rounded-lg w-20 h-20' />
					<div className='flex flex-col justify-between'>
						<h6>{value.title}</h6>
						<p className='text-[#a75bb5] text-sm'>{value.date}</p>
					</div>
				</li>
			)}
		</ul>
	</aside>
}