import { AgendaType } from '../../Types/Types'

export default function TableRow(props: AgendaType) {
	const { id, title, description, status, published, updated } = props

	const removeAgendaFunction = (id: number) => {
		console.log(id)
	}
	const editAgendaFunction = (id: number) => {
		console.log(id)
	}
	return (
		<tr key={id}>
			<td>{id}</td>
			<td>{title}</td>
			<td>{description}</td>
			<td>{status}</td>
			{updated !== 0 ? <td>{updated}</td> : <td>{published}</td>}
			<td>
				<button onClick={() => removeAgendaFunction(id)}>Remove</button>
				<button onClick={() => editAgendaFunction(id)}>Edit</button>
			</td>
		</tr>
	)
}
