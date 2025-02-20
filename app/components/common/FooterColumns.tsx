import Image from "next/image";
import Link from "next/link";
import p1 from '../../images/footer/Icon-Phone.svg'
import p2 from '../../images/footer/Icon-Email.svg'
import p3 from '../../images/footer/Icon-Map.svg'
import logof from '../../images/Modiseh-f.webp'

export default function FooterColumns(props: any) {
	return <>
		<div className='column w-full md:w-1/4'>
			<Image src={logof} alt='logo' />
		</div>
		<div className='column w-1/2 md:w-1/4'>
			<ul className='flex flex-col gap-y-5'>{props.footer_col2.map((value: any, index: any) => <li key={index} className='text-[18px] text-[#889098]'><Link href='/blog'>{value}</Link></li>)}</ul>
		</div>
		<div className='column w-1/2 md:w-1/4'>
			<ul className='flex flex-col gap-y-5'>{props.footer_col3.map((value: any, index: any) => <li key={index} className='text-[18px] text-[#889098]'><Link href={value.link ?? '#'}>{value.text}</Link></li>)}</ul>
		</div>
		<div className='column w-full md:w-1/4 text-[18px] text-[#889098] leading-7'>
			<Link href='/contact'>ارتباط با مدیسه</Link>
			<p><Image src={p1} alt='phone' className='inline' />021-48633333</p>
			<p><Image src={p2} alt='email' className='inline' />support@modiseh.com</p>
			<p>شنبه تا پنجشنبه و ایام تعطیل رسمی به جز جمعه ها از ساعت ۰۸:۰۰ الی ۱۹</p>
			<p><Image src={p3} alt='map' className='inline' />تهران، محله شهرک استقلال ، خيابان دكتر عبيدی ، خيابان دوم ، پلاک 12 ، طبقه دوم ، واحد جنوبی كد پستی : 1389798308</p>
		</div>
	</>
}