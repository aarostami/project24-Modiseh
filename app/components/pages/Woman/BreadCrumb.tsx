import Link from "next/link";

export default function BreadCrumb() {
	return <ul className="flex">
		<li><Link href={'#'} className="text-sm">مدیسه</Link></li>
		<li><Link href={'#'} className="text-sm"><span className="inline-block align-middle px-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
			<path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
		</svg></span>زنانه</Link></li>
		<li><Link href={'#'} className="text-sm"><span className="inline-block align-middle px-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
			<path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
		</svg></span>لباس زنانه</Link></li>
	</ul>
}