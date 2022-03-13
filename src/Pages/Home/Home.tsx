import { Drawer } from 'antd'
import { useState } from 'react'
import NewAgenda from '../../Components/Agenda/NewAgenda'
import Export from '../../Components/Export/Export'
import Import from '../../Components/Import/Import'
import TableContent from '../../Components/TableContent/TableContent'
import styles from '../../StyleSheets/Home.module.css'

export default function Home() {
	// Drawer Functionalities
	const [visible, setVisible] = useState<boolean>(false)
	const showDrawer = () => {
		setVisible(true)
	}
	const onClose = () => {
		setVisible(false)
	}
	return (
		<div className={styles.wrap}>
			<div className={styles.section}>
				<table className={styles.table}>
					<thead>
						<tr>
							<th>Function</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<button
									className={[styles.button, styles.addButton].join(
										' '
									)}
									onClick={showDrawer}>
									Add New Agenda
								</button>
								<Drawer
									title='New Agenda'
									placement='right'
									onClose={onClose}
									visible={visible}>
									<NewAgenda setVisible={setVisible} />
								</Drawer>
							</td>
							<td>Open Drawer and put data and then press Submit button</td>
						</tr>
						<tr>
							<td>
								<Export />
							</td>
							<td>Export data as JSON file</td>
						</tr>
						<tr>
							<td>
								<Import />
							</td>
							<td>Import JSON file</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className={styles.section}>
				<h2 className={styles.title}>Agenda List</h2>
				<table className={styles.table}>
					<thead>
						<tr>
							<th style={{ width: '5%' }}>ID</th>
							<th style={{ width: '5%' }}>Name</th>
							<th style={{ width: '59%' }}>Description</th>
							<th style={{ width: '5%' }}>Status</th>
							<th style={{ width: '14%' }}>Last Updated</th>
							<th style={{ width: '12%' }}>Actions</th>
						</tr>
					</thead>
					<TableContent />
				</table>
			</div>
		</div>
	)
}
