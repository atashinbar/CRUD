import { connect, useDispatch } from 'react-redux'
import { rootReducerType } from '../../StateManagement/Reducers'
import { AgendaType, EditAgendaPropsType } from '../../Types/Types'
import { useForm } from 'react-hook-form'
import { editAgenda } from '../../StateManagement/Actions/AgendaActions'

function EditAgenda(props: EditAgendaPropsType) {
	const { data, agendaId, setVisible } = props
	const dispatch = useDispatch()

	var result = data.find((obj: AgendaType) => {
		return obj.id === agendaId
	})
	console.log(result)

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		defaultValues: {
			title: result?.title,
			description: result?.description,
			status: result?.status
		}
	})
	const onSubmit = (data: any, e: any) => {
		dispatch(
			editAgenda({
				id: result ? result?.id : 0,
				title: data.title,
				description: data.description,
				status: data.status,
				published: 0,
				updated: Date.now()
			})
		)
		setVisible(false)
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<label>
				<div>Title:</div>
				<input
					type='text'
					{...register('title', {
						validate: (value) => (value ? value.length > 3 : false)
					})}
				/>
				{errors.title && <p>Your title is less than 3 characters</p>}
			</label>
			<label>
				<div>Description:</div>
				<textarea {...register('description')} />
			</label>
			<label>
				<div>Status:</div>
				<select {...register('status')}>
					<option value='draft'>Draft</option>
					<option value='publish'>Publish</option>
				</select>
			</label>
			<input type='submit' value='Submit' />
		</form>
	)
}

const mapStateToProps = (
	state: rootReducerType,
	props: { agendaId: number; setVisible: any }
) => ({
	data: state.agenda.data,
	agendaId: props.agendaId,
	setVisible: props.setVisible
})

export default connect(mapStateToProps)(EditAgenda)
