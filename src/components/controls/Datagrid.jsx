export default function Datagrid(props) {
	let parseData = JSON.parse(JSON.stringify(props.data))
	const headerData = Object.keys(parseData.reduce((o, c) => Object.assign(o, c)))

	return (
		<div hidden={props.isHidden}>
			<div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
				<table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
					<thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
						<tr>
							{headerData &&
								headerData.map((header, id) => (
									<th key={id} className='px-8 py-2'>
										{header}
									</th>
								))}
						</tr>
					</thead>
					<tbody>
						{props.data &&
							props.data.map((employee, id) => (
								<tr
									key={id}
									className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
									{headerData &&
										headerData.map((header, id) => (
											<td
												key={id}
												className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
												{employee[header]}
											</td>
										))}
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</div>
	)
}
