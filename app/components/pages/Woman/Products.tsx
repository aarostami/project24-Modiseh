import Link from "next/link"
import { FilterDataAdvanced } from 'filter-data-advanced/dist/FilterDataAdvanced'
import { LazyLoadImage } from "react-lazy-load-image-component"
import { useContext } from "react"
// import { UserContext } from "../../../(pages)/women/page"

export default function Products({ data }: any) {
	// const UserFilter = useContext(UserContext)

	return <section className="flex flex-wrap gap-y-3 md:gap-y-0 md:gap-3">
		{/* {shoppingWoman.map((value, index) => { */}
		
		{data.map((value: any, index: any) => {
		// {UserFilter.map((value: any, index: any) => {
			// var x = Number(value.price).split(',').join('')
			// var x = String(value.price).split('').join(',')
			return (
				<div key={index} className="rounded-lg w-1/2 md:w-56 shadow-lg relative">
					{/* <Image loading="lazy" src={value.pic} alt="pic" className="h-64" /> */}
					{/* <div className='h-64 imagebox' style={{backgroundImage: `url('${value.pic.src}')`}}></div> */}
					<LazyLoadImage
						src={value.pic.src}
						alt="pic"
						className="h-64"
					/>
					{(value?.discount) ? <span className='h-10 w-7 bg-[#bc264b] self-end text-white rounded-b text-[14px] pt-0.5 font-bold z-10 absolute top-0 end-2'>{value?.discount}</span> : ''}
					<div className="p-2 flex flex-col justify-between">
						<Link href='/single' className="hover:text-gray-600">{value.title}</Link>
						{(value?.priceDiscount) ? <><del>{value.price}</del><span>{value?.priceDiscount}</span></> : <h3 className="text-center font-bold pt-2">{value.price}</h3>}
					</div>
				</div>)
		})}
	</section>
}