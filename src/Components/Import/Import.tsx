import React, { useState } from 'react'
import { connect } from 'react-redux'
import { importAgenda } from '../../StateManagement/Actions/AgendaActions'
import { rootReducerType } from '../../StateManagement/Reducers'
import { AgendaType } from '../../Types/Types'

function Import(props: any) {
	const { importAgenda } = props
	const [files, setFiles] = useState('')

	const handleChange = (e: any) => {
		const fileReader = new FileReader()
		fileReader.readAsText(e.target.files[0], 'UTF-8')
		fileReader.onload = (e: any) => {
			setFiles(e.target.result)
			importAgenda(e.target.result)
			e.target.value = ''
		}
	}
	return (
		<div>
			<input type='file' onChange={handleChange} />
		</div>
	)
}

const mapDispatchToProps = (dispatch: (arg0: any) => any) => {
	return {
		// dispatching plain actions
		importAgenda: (files: string) => dispatch(importAgenda(files))
	}
}

export default connect(null, mapDispatchToProps)(Import)
