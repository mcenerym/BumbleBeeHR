import employeeData from './data/employeesData.json'

function App() {
	const headerData = Object.keys(employeeData.reduce((o, c) => Object.assign(o, c)))

	return (
		<div className='bg-slate-800 grid w-full h-screen border-2 place-items-center'>
			<div className='bg-zinc-800 w-1/2 h-screen'>
				<table className='table-auto'>
					<thead>
						<tr>
							{headerData &&
								headerData.map((header, id) => (
									<th key={id} className='bg-blue-700 border px-8 py-2'>
										{header}
									</th>
								))}
						</tr>
					</thead>
					<tbody>
						{employeeData &&
							employeeData.map((employee, id) => (
								<tr key={id}>
									{headerData &&
										headerData.map((header, id) => (
											<td key={id} className='bg-white border px-8 py-2'>
												{employee[header]}
											</td>
										))}

									{/* <td className='bg-white border px-8 py-2'>{employee.Title}</td>
									<td className='bg-white border px-8 py-2'>{employee.Department}</td> */}
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default App
