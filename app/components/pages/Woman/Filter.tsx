import { useState } from "react"

export default function Filter({ data }: any) {
	const [filterOpen, setFilterOpen]: any = useState({ id: null, open: false })

	return <div className="hidden md:block md:w-1/4">
		<div className="flex items-center w-64">
			<label className="relative inline-flex items-center cursor-pointer">
				<input type="checkbox" className="sr-only peer" />
				<div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-white rounded-full peer dark:bg-gray-700 peer-checked:bg-[#bc264b]"></div>
				<div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white border border-gray-300 rounded-full transition-transform peer-checked:translate-x-full"></div>
			</label>
			<span className="text-lg font-semibold text-gray-800 ps-3">فقط کالاهای موجود</span>
		</div>
		<ul className="flex flex-col gap-y-2 pt-2">
			{data.map((value: any, index: any) =>
				<li key={index} className="border justify-between px-3 py-2 rounded-lg">
					<button onClick={() => setFilterOpen({ ...filterOpen, id: index, open: !filterOpen.open })} className="w-full flex justify-between items-center"><span>{value.title}</span>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`bi bi-chevron-left transition duration-500 ${(filterOpen.open == true && filterOpen.id == index) ? '-rotate-90' : ''}`} viewBox="0 0 16 16">
							<path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
						</svg></button>
					<ul id="list">{(filterOpen.open == true && filterOpen.id == index) ?
						<>
							<input type="search" placeholder="جستجو در زمان ارسال" className="p-1 w-full ps-3 my-2 input bg-[#f1f1f1] rounded-lg" />
							<div className="max-h-56 overflow-auto">
								{value.content?.map((v: any, index: any) => <li key={index} className="pt-1">
									<input type="checkbox" value={value.content} id={String(index)} className="bg-[#f1f1f1]" />
									<label htmlFor={String(index)} className="text-lg ms-2 hover:text-red-700">{v}</label><br />
								</li>)}
							</div>
						</> : ''}
					</ul>
				</li>
			)}
		</ul>
	</div>
}