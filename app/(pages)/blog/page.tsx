'use client'
import '../../header.css'
import { atr, bloghot, lastblog, poost, morghebat } from '../../api/db'
import HeaderNews from '../../components/pages/Blog/HeaderNews'
import HotBlog from '../../components/pages/Blog/HotBlog'
import LatestPosts from '../../components/pages/Blog/LatestPosts'
import Atr from '../../components/pages/Blog/Atr'
import Poost from '../../components/pages/Blog/Poost'
import Moragheb from '../../components/pages/Blog/Moragheb'

const blog = () => {
	return <section className='py-10 container mx-auto md:px-44'>
		<div className='flex flex-col md:flex-row gap-x-1'>
			<HeaderNews />
		</div>
		<section className='flex flex-col md:flex-row gap-x-5 py-5'>
			<article className='w-full md:w-2/3'>
				<HotBlog data={bloghot} />
			</article>
			<aside className='w-full md:w-1/3 max-h-fit rounded-lg p-8'>
				<LatestPosts data={lastblog} />
			</aside>
		</section>
		<section className='shadow-lg p-5 rounded-lg'>
			<h2 className='text-[#9e2358] text-[1.3rem] py-3'>مقالات بر اساس دسته بندی</h2>
			<div className='grid gap-8 md:grid-cols-3'>
				{/* grid-template-columns: repeat(auto-fill, 200px); */}
				<Atr data={atr} />
				<Poost data={poost} />
				<Moragheb data={morghebat} />
			</div>
		</section>
	</section>
}

export default blog