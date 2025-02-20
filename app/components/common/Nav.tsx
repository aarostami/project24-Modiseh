import Link from "next/link";

export default function Nav({ data }: any) {
	return <ul className='hidden md:flex justify-between mt-3 relative'>
		{data.map((value: any, index: any) =>
			<li key={index} className='text-[#889098] group'>
				<Link href={`http://localhost:3000/${value.link}`}>{value.text}</Link>
				<ul className={`absolute w-full start-0 z-10 text-[#889098] bg-white shadow-lg ${value?.subnav ? 'group-hover:flex' : ''} hidden py-4 group-hover:justify-between`}>
					{value.subnav?.map((value: any, index: any) =>
						<li className='list-[square] marker:text-[#f04d44] marker:text-[1.2rem] align-middle' key={index}>
							<a href='#' className='mx-2 font-bold'>{value.text}</a>
							<ul className='mx-4 my-3' key={index}>
								{value.subsubnav?.map((value: any, index: any) => <li className='py-1' key={index}>{value}</li>)}
							</ul>
						</li>
					)}
				</ul>
			</li>
		)}
	</ul>
}