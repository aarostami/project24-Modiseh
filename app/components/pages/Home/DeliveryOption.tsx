import Image from "next/image";

export default function DeliveryOption({ data }: any) {
	return <ul className='flex flex-col md:flex-row justify-center gap-x-14'>
		{data.map((value: any, index: any) => <li className='flex flex-col justify-center items-center gap-y-7' key={index}>
			<Image src={value.image} alt='op' className='w-20 h-20' />
			<p className='text-sm text-[#818190]'>{value.text}</p>
		</li>)}
	</ul>
}