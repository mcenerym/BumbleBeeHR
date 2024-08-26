import { Route, Routes } from 'react-router-dom'

import AddEmployee from './components/AddEmployee'
import EmployeeDashboard from './components/EmployeeDashboard'

function App() {
	return (
		<Routes>
			<Route path='/' element={<EmployeeDashboard />} />
			<Route path='/addEmployee' element={<AddEmployee />} />
		</Routes>
	)
}

export default App
