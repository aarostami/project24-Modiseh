import Heading from "./Common/Heading"

export default function Sending({ data }: any) {
	function faq3fn(index: any) {
		var content: any = document.querySelectorAll('p.faq3content')
		if (content[index].style.display == 'block' || content[index].style.display == null) {
			content[index].style.display = 'none'
		} else content[index].style.display = 'block'
	}

	return <><Heading text='پیگیری ارسال سفارش' />
		<div className="py-3">
			{data.map((value: any, index: any) =>
				<div key={index}>
					<button onClick={() => faq3fn(index)} className="text-right accordion py-5 px-5 transition hover:bg-[#f5f5f5] rounded-lg w-full">{value.text}</button>
					<p className="faq3content hidden leading-8 py-2">{value.description}</p>
					<hr style={{ display: (index == data.length - 1) ? 'none' : 'block' }} />
				</div>
			)}
		</div>
	</>
}