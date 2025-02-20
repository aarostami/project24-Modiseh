
export default function Details({ data }: any) {
	return <div className='md:w-2/3'>
		<h2 className='text-lg inline-block border-s-[3px] ps-2 my-3 border-[#bc264b]'>مشخصات محصول</h2>
		<table className='border-separate border-spacing-y-2 border-spacing-x-1'>
			<tbody>
				{data.map((value: any, index: any) => <tr key={index}>
					<td className='bg-[#f9f9f9] p-4'>{value.cat}</td>
					<td className='bg-[#f9f9f9] p-4'>{value.val}</td>
				</tr>
				)}
			</tbody>
		</table>
		<h2 className='text-lg inline-block border-s-[3px] ps-2 my-3 border-[#bc264b]'>نظرات کاربران</h2>
		<p>نظر شما درباره این کالا</p>
		<form className='flex flex-col gap-y-2 py-8'>
			<label htmlFor='username'>نام مستعار</label>
			<input type='text' id='username' className='border rounded-lg py-1' />
			<label htmlFor='abstr'>خلاصه</label>
			<input type='text' id='abstr' className='border rounded-lg py-1' />
			<textarea placeholder='نظر خود را بنویسید' className='p-2 border rounded-lg' rows={7}></textarea>
			<div className='md:flex justify-between'>
				<div className='flex items-center'>
					<label id='customcheck'>
						<input type='checkbox' id='recommend' />
						<span className='ch rounded-sm'></span>
					</label>
					<label htmlFor='recommend' className='ps-2'>این محصول را پیشنهاد میکنم</label>
				</div>
				<button type='submit' className='px-5 py-2 rounded-lg bg-[#e6e6e6] text-white'>ارسال نظر</button>
			</div>
		</form>
		<hr />
	</div>
}