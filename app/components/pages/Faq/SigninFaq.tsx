import Heading from "./Common/Heading"

export default function SigninFaq({ data }: any) {
	function faq1fn(index: any) {
		// var accodionbtn = document.getElementsByClassName('.accordion')
		var content: any = document.querySelectorAll('p.faq1content')
		// for (let i = 0; i < accodionbtn.length; i++) {
		// accodionbtn[i]?.addEventListener('click', function (this: any) {
		// var content = this.nextElementSibling
		if (content[index].style.display == 'block' || content[index].style.display == null) {
			content[index].style.display = 'none'
		} else content[index].style.display = 'block'
		// }
		// }
	}

	return <><Heading text='ورود و ثبت‌نام' />
		<div className="py-4">
			{data.map((value: any, index: any) =>
				<div key={index}>
					<button onClick={() => faq1fn(index)} className="text-right accordion py-5 px-5 transition hover:bg-[#f5f5f5] rounded-lg w-full">{value.text}</button>
					<p className="faq1content hidden leading-8 py-2">{value.description}</p>
					<hr style={{ display: (index == data.length - 1) ? 'none' : 'block' }} />
				</div>
			)}
		</div>
	</>
}