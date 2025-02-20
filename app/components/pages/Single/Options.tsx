import Image from "next/image";

export default function Options({ data }: any) {
	return <ul className='flex justify-between py-5'>
		{data.map((value: any, index: any) => <li className='flex items-center gap-x-1' key={index}>
			<Image src={value.pic} alt='pic' />
			<p className='text-[#91939b]'>{value.text}</p>
		</li>)}
	</ul>
}