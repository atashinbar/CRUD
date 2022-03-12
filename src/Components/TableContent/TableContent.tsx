import { Button, Drawer, Space } from 'antd'
import { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { removeAgenda } from '../../StateManagement/Actions/AgendaActions'
import { rootReducerType } from '../../StateManagement/Reducers'
import { AgendaReducerStateType, AgendaType } from '../../Types/Types'
import EditAgenda from '../Agenda/EditAgenda'
import NewAgenda from '../Agenda/NewAgenda'

function TableContent(props: AgendaReducerStateType) {
	const { data } = props
	const [agendaId, setAgendaId] = useState<number>(0)
	const [visible, setVisible] = useState(false)
	const dispatch = useDispatch()

	const removeAgendaFunction = (id: number) => {
		dispatch(removeAgenda(id))
	}
	const editAgendaFunction = () => {
		setVisible(true)
	}

	const onClose = () => {
		setVisible(false)
	}
	return (
		<tbody>
			{visible ? (
				<Drawer
					title='Edit Agenda'
					placement='right'
					onClose={onClose}
					visible={visible}>
					<EditAgenda setVisible={setVisible} agendaId={agendaId} />
				</Drawer>
			) : null}
			{data.length > 0
				? data.map((item: AgendaType) => {
						const date =
							item.updated !== 0
								? new Date(item.updated)
								: new Date(item.published)
						const dateFormat =
							date.getDate() +
							'-' +
							(date.getMonth() + 1) +
							'-' +
							date.getFullYear() +
							' ' +
							date.getHours() +
							':' +
							date.getMinutes() +
							':' +
							date.getSeconds()
						return (
							<tr key={item.id}>
								<td>{item.id}</td>
								<td>{item.title}</td>
								<td>{item.description}</td>
								<td>{item.status}</td>
								<td>{dateFormat}</td>
								<td>
									<button onClick={() => removeAgendaFunction(item.id)}>
										Remove
									</button>
									<button
										onClick={() => {
											editAgendaFunction()
											setAgendaId(item.id)
										}}>
										Edit
									</button>
								</td>
							</tr>
						)
				  })
				: null}
		</tbody>
	)
}

const mapStateToProps = (state: rootReducerType) => ({
	data: state.agenda.data,
	count: state.agenda.count
})

export default connect(mapStateToProps)(TableContent)
