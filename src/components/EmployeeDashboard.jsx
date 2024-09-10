import employeeData from '../data/employeesData.json'

export default function EmployeeDashboard() {
	let employeeParseData = JSON.parse(JSON.stringify(employeeData))
	const headerData = Object.keys(employeeParseData.reduce((o, c) => Object.assign(o, c)))

	return (
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
					{employeeData &&
						employeeData.map((employee, id) => (
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

		// <div>
		// 	<table classNameName='table-auto'>
		// 		<thead>
		// 			<tr>
		// 				{headerData &&
		// 					headerData.map((header, id) => (
		// 						<th key={id} classNameName='text-white bg-blue-700 border px-8 py-2'>
		// 							{header}
		// 						</th>
		// 					))}
		// 			</tr>
		// 		</thead>
		// 		<tbody>
		// 			{employeeData &&
		// 				employeeData.map((employee, id) => (
		// 					<tr key={id}>
		// 						{headerData &&
		// 							headerData.map((header, id) => (
		// 								<td key={id} classNameName='bg-white border px-8 py-2'>
		// 									{employee[header]}
		// 								</td>
		// 							))}
		// 					</tr>
		// 				))}
		// 		</tbody>
		// 	</table>
		// </div>
	)
}
