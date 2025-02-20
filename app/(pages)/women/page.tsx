'use client'
import { useState, createContext, useContext } from "react"
import '../style.css'
import { shoppingcat, shoppingFilterName, shoppingWoman } from "../../api/db"
import BreadCrumb from "@/app/components/pages/Woman/BreadCrumb"
import Filter from "@/app/components/pages/Woman/Filter"
import Sort from "@/app/components/pages/Woman/Sort"
import Products from "@/app/components/pages/Woman/Products"

// export var UserContext = createContext(shoppingWoman)

export default function shopping() {
	const [filter, setFilter] = useState(shoppingWoman)

	return <section className="py-5 container mx-auto md:px-28">
		<BreadCrumb />
		<section className="md:flex gap-x-5 pt-10">
			<Filter data={shoppingcat} />
			<div className="md:w-3/4">
				<Sort data={shoppingFilterName} NewFilter={setFilter} />
				<hr className="my-3" />
				{/* <Products data={filter} /> */}
				{/* <UserContext.Provider value={filter}> */}
					<Products data={filter} />
				{/* </UserContext.Provider> */}
			</div>
		</section>
	</section>
}
