import { shoppingWoman } from "../../../api/db";
import { useContext } from "react";
// import { UserContext } from "@/app/(pages)/women/page";

export default function Sort({ data, NewFilter }: any) {
	// var UserFilter = useContext(UserContext)
	
	function filterNew(index: any) {
		// const obj = new FilterDataAdvanced()
		// console.log(obj.filterByKeyValue(shoppingWoman, 'price', '2260000'))
		// shoppingWoman.sort((a, b: any) => a.price.localeCompare(b.price))
		// var newFilter = filter.map((v) => Number(v.price.split(',').join('')))
		switch (index) {
			case 0:
				// setFilter(shoppingWoman)
				NewFilter(shoppingWoman)
				// NewFilter(UserFilter)
				break;
			case 1:
				// setFilter(shoppingWoman.toSorted((a, b) => a.price - b.price))	//in doroste
				// NewFilter(shoppingWoman.toSorted((a, b) => a.price - b.price))	//in doroste	//dar build error "Property 'toSorted' does not exist on type" mide.
				NewFilter(shoppingWoman.sort((a, b) => a.price - b.price))	//in doroste
				// setFilter(shoppingWoman.filter((v) => shoppingWoman.sort((a, b) => a.price - b.price)))	//in first element ro sort nemikone. chon original ro change mikone.
				// NewFilter(UserFilter.toSorted((a, b) => a.price - b.price))
				break;
			case 2:
				// setFilter(shoppingWoman.toSorted((a, b) => b.price - a.price))
				// NewFilter(shoppingWoman.toSorted((a, b) => b.price - a.price))	//dar build error "Property 'toSorted' does not exist on type" mide.
				NewFilter(shoppingWoman.sort((a, b) => b.price - a.price))
				// NewFilter(UserFilter.toSorted((a, b) => b.price - a.price))
				break;
		}
	}

	return <ul className="md:flex gap-x-2">
		<p>مرتب سازی:</p>
		{/* {shoppingFilterName.map((value, index) => <li key={index} onClick={() => (index == 1) ? filterNew() : ""}> */}
		{data.map((value: any, index: any) => <li key={index} onClick={() => filterNew(index)}>
			<a href="#" className="hover:text-[#bc264b]">{value}</a>
		</li>)}
	</ul>
}