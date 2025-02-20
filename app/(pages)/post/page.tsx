import Image from "next/image";
import { lastblog } from "../../api/db";
import img from '../../images/blog/jean-pants.webp'
import img2 from '../../images/blog/jean-with-shomiz.jpg'
import img3 from '../../images/blog/boot-1030x687.jpg'
import LatestPosts from "@/app/components/pages/Post/LatestPosts";

export default function post() {
	return <section className="flex my-5 container mx-auto px-44">
			<article className="w-2/3 shadow-lg p-5 rounded-lg">
				<h1 className="text-[2rem] font-bold">10 ترفند برای استایل با شلوار جین</h1>
				<span>02 دی 1403</span>
				<Image src={img} alt="pic" className="rounded-lg mx-auto my-4" />
				<span className="px-3 border rounded-xl">اشتراک‌گذاری</span>
				<p className="leading-8 text-justify pt-5">شلوار جین را چگونه استایل کنیم؟ برای استفاده روزانه از شلوار جین، می‌توان آن را با چه چیزی پوشید؟ شلوار جین جزو لباس‌ هایی است که از گذشته همواره محبوب بوده و در هر سنی و با هر سلیقه‌ ای می‌توان آن را استایل کرد؛ در واقع شلوار جین هیچ وقت از مد نمی‌افتد و فقط کافیست بدانیم چه مدلی از آن را با چه چیزی ست کنیم. در این مطلب از سایت مدیسه قصد داریم به ترفندهایی بپردازیم که با کمک آنها می‌توان شلوار جین را به طور روزانه استایل کرد. پس تا انتهای این نوشته همراه ما باشید.</p>
				<h2 className="text-[#ff3a3a] text-[1.7rem] py-5">استایل شلوار جین برای زنان</h2>
				<p className="leading-8 text-justify">در استایل‌ ها شلوار جین زنانه را می‌توان در موقعیت‌ های رسمی و کژوال استفاده کرده و یک ظاهر شیک و به روز داشت، در ادامه به چند مورد از این استایل‌ها می‌پردازیم:</p>
				<h2 className="text-[#ff3a3a] text-[1.7rem] py-5">1. استایل شلوار جین با شومیز</h2>
				<p className="leading-8 text-justify">یکی از استایل‌های ساده و شیک که هیچ وقت از مد نمی‌افتد و همواره می‌توان آن را انتخاب کرد، شلوار جین، ترجیحا جین راسته، با شومیز است. انتخاب یک شومیز ساده مثل شومیز ساده سفید یا مشکی یک گزینه عالی برای این استایل است.</p>
				<Image src={img2} alt="pic" className="rounded-lg mx-auto my-3" />
				<h2 className="text-[#ff3a3a] text-[1.7rem] py-5">2. استایل شلوار جین با چکمه</h2>
				<p className="leading-8 text-justify">در فصل زمستان می‌توانید شلوار جین جذب یا اسکینی را با چکمه یا بوت بلند استایل کنید، دقت داشته باشید سایر لباس‌ها را ساده انتخاب کنید. می‌توانید برای جذاب‌ تر شدن از کاپشن کوتاه استفاده کنید.</p>
				<Image src={img3} alt="pic" className="rounded-lg mx-auto my-3" />
				<h2 className="text-[#ff3a3a] text-[1.7rem] py-5">3. استایل کت جین با پلیور</h2>
				<p className="leading-8 text-justify">این استایل در کنار ساده و غیر رسمی بودن، بسیار شیک و جذاب است به خصوص اگر شما از یک شلوار جین راسته مشکی استفاده کنید و کفش کتانی یا اسپرت بپوشید. در فصل پاییز و برای محیط‌ های کاری و دوستانه، این استایل یک انتخاب مناسب است.</p>
			</article>
			<LatestPosts data={lastblog} />
	</section>
}