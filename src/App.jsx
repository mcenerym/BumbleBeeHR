import AddEmployee from './components/AddEmployee'
import EmployeeDashboard from './components/EmployeeDashboard'

import HeaderLogo from './assets/logo.png'

function App() {
	return (
		<div className='bg-slate-800 grid w-full h-screen'>
			<div className='w-1/2 h-full'>
				<div className=' flex mb-4 pl-4 pb-2 font-concertOne text-orange-600'>
					<label className='text-5xl'>HoneyC</label>
					<img className='mt-3 h-[30px]' src={HeaderLogo} />
					<label className='text-5xl'>mb HR</label>
				</div>
				<EmployeeDashboard />
				<button class='bg-blue-500 ml-auto mr-2 mt-1 block hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
					Add
				</button>
				<AddEmployee />
			</div>
		</div>
	)
}

export default App
