import { connect } from "react-redux";
import { importAgenda } from "../../StateManagement/Actions/AgendaActions";

function Import(props: any) {
  const { importAgenda } = props;

  // Upload File
  const handleChange = (e: any) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e: any) => {
      importAgenda(e.target.result);
      e.target.value = "";
    };
  };
  return (
    <div>
      <input type="file" onChange={handleChange} />
    </div>
  );
}

const mapDispatchToProps = (dispatch: (arg0: any) => any) => {
  return {
    // dispatching plain actions
    importAgenda: (files: string) => dispatch(importAgenda(files))
  };
};

export default connect(null, mapDispatchToProps)(Import);
