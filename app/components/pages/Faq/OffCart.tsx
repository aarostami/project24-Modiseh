import Heading from "./Common/Heading"

export default function OffCart({ data }: any) {
	function faq4fn(index: any) {
		var content: any = document.querySelectorAll('p.faq4content')
		if (content[index].style.display == 'block' || content[index].style.display == null) {
			content[index].style.display = 'none'
		} else content[index].style.display = 'block'
	}

	return <><Heading text='کد تخفیف و کارت هدیه' />
		<div className="py-3">
			{data.map((value: any, index: any) =>
				<div key={index}>
					<button onClick={() => faq4fn(index)} className="text-right accordion py-5 px-5 transition hover:bg-[#f5f5f5] rounded-lg w-full">{value.text}</button>
					<p className="faq4content hidden leading-8 py-2">{value.description}</p>
					<hr style={{ display: (index == data.length - 1) ? 'none' : 'block' }} />
				</div>
			)}
		</div>
	</>
}