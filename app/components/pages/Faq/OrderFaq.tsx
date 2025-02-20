import Heading from "./Common/Heading"

export default function OrderFaq({ data }: any) {
	function faq2fn(index: any) {
		var content: any = document.querySelectorAll('p.faq2content')
		if (content[index].style.display == 'block' || content[index].style.display == null) {
			content[index].style.display = 'none'
		} else content[index].style.display = 'block'
	}

	return <><Heading text='روند ثبت سفارش' />
		<div className="py-4">
			{data.map((value: any, index: any) =>
				<div key={index}>
					<button onClick={() => faq2fn(index)} className="text-right accordion py-5 px-5 transition hover:bg-[#f5f5f5] rounded-lg w-full">{value.text}</button>
					<p className="faq2content hidden leading-8 py-2">{value.description}</p>
					<hr style={{ display: (index == data.length - 1) ? 'none' : 'block' }} />
				</div>
			)}
		</div>
	</>
}