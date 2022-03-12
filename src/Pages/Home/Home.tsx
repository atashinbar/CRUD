import TableRow from '../../Components/TableRow/TableRow'
import styles from '../../StyleSheets/Home.module.css'

export default function Home() {
	const agendaData = [
		{
			id: 1,
			title: 'Ahmad',
			description: 'ddddddd',
			status: 'publish',
			published: 123123132,
			updated: 15151155
		},
		{
			id: 2,
			title: 'Ahmad',
			description: 'ddddddd',
			status: 'publish',
			published: 123123132,
			updated: 15151155
		},
		{
			id: 3,
			title: 'Ahmad',
			description: 'ddddddd',
			status: 'publish',
			published: 123123132,
			updated: 0
		},
		{
			id: 4,
			title: 'Ahmad',
			description: 'ddddddd',
			status: 'publish',
			published: 123123132,
			updated: 0
		},
		{
			id: 5,
			title: 'Ahmad',
			description: 'ddddddd',
			status: 'publish',
			published: 123123132,
			updated: 0
		}
	]
	const showNewAgendaForm = () => {
		console.log('show form')
	}
	return (
		<div className={styles.wrap}>
			<div className={styles.section}>
				<button onClick={() => showNewAgendaForm()}>Add New Agenda</button>
			</div>
			<div className={styles.section}>
				<h2 className={styles.title}>Agenda List</h2>
				<table className={styles.table}>
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Description</th>
							<th>Status</th>
							<th>Last Updated</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{agendaData.map((item) => {
							return (
								<TableRow
									key={item.id}
									id={item.id}
									title={item.title}
									description={item.description}
									status={item.status}
									published={item.published}
									updated={item.updated}
								/>
							)
						})}
					</tbody>
				</table>
			</div>
		</div>
	)
}
