import { connect, useDispatch } from "react-redux";
import { addAgenda } from "../../StateManagement/Actions/AgendaActions";
import { rootReducerType } from "../../StateManagement/Reducers";
import { AgendaPropsType } from "../../Types/Types";
import { useForm } from "react-hook-form";
import styles from "../../StyleSheets/Form.module.css";

function NewAgenda(props: AgendaPropsType) {
  const { setVisible } = props;
  const published = Date.now();
  const updated = 0;
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const onSubmit = (data: any, e: any) => {
    dispatch(
      addAgenda({
        id: 0,
        title: data.title,
        description: data.description,
        status: data.status,
        published,
        updated
      })
    );
    setVisible(false);
    reset();
  };
  return (
    <form className={styles.drawerForm} onSubmit={handleSubmit(onSubmit)}>
      <label>
        <div>Title:</div>
        <input
          type="text"
          {...register("title", {
            validate: (value) => value.length > 3
          })}
        />
        {errors.title && <p>Your title is less than 3 characters</p>}
      </label>
      <label>
        <div>Description:</div>
        <textarea
          {...register("description", { required: true, minLength: 5 })}
        />
        {errors.description && (
          <p>Your description is less than 5 characters</p>
        )}
      </label>
      <label>
        <div>Status:</div>
        <select {...register("status")}>
          <option value="draft">Draft</option>
          <option value="publish">Publish</option>
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

const mapStateToProps = (
  state: rootReducerType,
  props: { setVisible: any }
) => ({
  data: state.agenda.data,
  setVisible: props.setVisible
});

export default connect(mapStateToProps)(NewAgenda);
