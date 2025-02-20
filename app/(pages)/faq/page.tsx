'use client'
import { useEffect, useState } from "react"
import { faqlist, faq1, faq2, faq3, faq4 } from "../../api/db"
import SigninFaq from "../../components/pages/Faq/SigninFaq"
import OrderFaq from "../../components/pages/Faq/OrderFaq"
import Sending from "../../components/pages/Faq/Sending"
import OffCart from "../../components/pages/Faq/OffCart"

export default function privacy() {

	return <section className='container mx-auto md:px-44 flex gap-x-3 py-16'>
		<article className="w-2/6">
			<h3 className="bg-[#f5f5f5] px-3 py-1 text-[1.2rem]">پرسش‌های متداول</h3>
			<ul className="list-disc flex flex-col gap-y-4 py-3">
				{faqlist.map((value, index) => <li key={index} className="text-[1.1rem]">{value}</li>)}
			</ul>
		</article>
		<article className="w-4/6">
			<SigninFaq data={faq1} />
			<OrderFaq data={faq2} />
			<Sending data={faq3} />
			<OffCart data={faq4} />
		</article>
	</section>
}