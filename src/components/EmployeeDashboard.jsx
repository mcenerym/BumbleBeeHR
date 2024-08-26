import { Link } from 'react-router-dom'
import employeeData from '../data/employeesData.json'

function EmployeeDashboard() {
	const headerData = Object.keys(employeeData.reduce((o, c) => Object.assign(o, c)))

	return (
		<div className='bg-slate-800 grid w-full h-screen border-2 place-items-center'>
			<div className='bg-zinc-800 w-1/2 h-screen'>
				<div className='inline-block'>
					<table className='table-auto'>
						<thead>
							<tr>
								{headerData &&
									headerData.map((header, id) => (
										<th key={id} className='text-white bg-blue-700 border px-8 py-2'>
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
									</tr>
								))}
						</tbody>
					</table>
					<Link
						className='bg-blue-600 text-white px-3 py-3 text-lg mt-3 float-right'
						to='/BumbleBeeHR/addEmployee'>
						Add Employee
					</Link>
				</div>
			</div>
		</div>
	)
}

export default EmployeeDashboard
