'use client'
import { singleProduct, singleOption, detail, relatedProduct } from '../../api/db'
import Slider from '@/app/components/pages/Single/Slider'
import Buy from '@/app/components/pages/Single/Buy'
import RelatedProducts from '@/app/components/pages/Single/RelatedProducts'
import Options from '@/app/components/pages/Single/Options'
import Details from '@/app/components/pages/Single/Details'
import CheckoutFloat from '@/app/components/pages/Single/CheckoutFloat'
import '../style.css'

function single() {

	return <section className="py-10 mx-auto md:px-48 container">
		<section className='md:flex gap-x-2'>
			<section className='md:w-1/2 flex'>
				<Slider data={singleProduct} />
			</section>
			<section className='md:w-1/2'>
				<Buy data={singleProduct} />
			</section>
		</section>
		<section>
			<h2 className='text-lg text-[#bc264b] inline-block border-b-2 py-2 border-[#bc264b]'>کالاهای مرتبط</h2>
			<hr />
		</section>
		<article className='py-4'>
			<RelatedProducts data={relatedProduct} />
		</article>
		<section className='hidden md:block'>
			<Options data={singleOption} />
		</section>
		<section>
			<h2 className='text-lg inline-block border-b-2 border-[#bc264b]'>مشخصات محصول</h2>
			<hr />
			<article className='md:flex'>
				<Details data={detail} />
				<CheckoutFloat data={singleProduct} />
			</article>
		</section>
	</section>
}

export default single