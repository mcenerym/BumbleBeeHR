import HeaderLogo from './assets/logo.png'
import EditableDatagrid from './components/EditableDatagrid'
import employeeData from './data/employeesData.json'

function App() {
	return (
		<div className='bg-slate-800 grid w-full h-screen'>
			<div className='w-1/2 h-full'>
				<div className=' flex mb-4 pl-4 pb-2 font-concertOne text-orange-600'>
					<label className='text-5xl'>HoneyC</label>
					<img className='mt-3 h-[30px]' src={HeaderLogo} />
					<label className='text-5xl'>mb HR</label>
				</div>
				<EditableDatagrid data={employeeData} />
			</div>
		</div>
	)
}

export default App
