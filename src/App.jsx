import { Route, Routes } from 'react-router-dom'

import AddEmployee from './components/AddEmployee'
import EmployeeDashboard from './components/EmployeeDashboard'

function App() {
	return (
		<Routes>
			<Route path='/HoneyCombHR/' element={<EmployeeDashboard />} />
			<Route path='/HoneyCombHR/addEmployee' element={<AddEmployee />} />
		</Routes>
	)
}

export default App
