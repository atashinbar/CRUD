import { connect } from "react-redux";
import { rootReducerType } from "../../StateManagement/Reducers";
import { AgendaReducerStateType } from "../../Types/Types";
import styles from "../../StyleSheets/Home.module.css";

function Export(props: AgendaReducerStateType) {
  const { data } = props;

  // Export JSON file
  const export2txt = () => {
    const blob = new Blob([JSON.stringify(data)], { type: "fileType" });
    const a = document.createElement("a");
    a.download = "data.json";
    a.href = window.URL.createObjectURL(blob);
    const clickEvt = new MouseEvent("click", {
      view: window,
      bubbles: true,
      cancelable: true
    });
    a.dispatchEvent(clickEvt);
    a.remove();
  };
  return (
    <button
      className={[styles.button, styles.exportButton].join(" ")}
      onClick={() => export2txt()}
    >
      Export
    </button>
  );
}

const mapStateToProps = (state: rootReducerType) => ({
  data: state.agenda.data,
  count: state.agenda.count
});

export default connect(mapStateToProps)(Export);
