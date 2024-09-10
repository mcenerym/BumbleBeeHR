import { useEffect, useState } from 'react'
import AddDatagridItem from './AddDatagridItem'
import Datagrid from './controls/Datagrid'

export default function EditableDatagrid(props) {
	const [isAddingOrEditing, setAddingOrEditing] = useState()

	useEffect(() => {
		setAddingOrEditing(false)
	}, [])

	function addEmployee() {
		setAddingOrEditing(true)
	}

	return (
		<div hidden={props.isHidden}>
			<Datagrid isHidden={isAddingOrEditing} data={props.data} />
			<AddDatagridItem isHidden={!isAddingOrEditing} />
			<button
				style={{ display: isAddingOrEditing ? 'none' : 'block' }}
				onClick={addEmployee}
				className='bg-blue-500 ml-auto mr-2 mt-1 block hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
				Add
			</button>
		</div>
	)
}
