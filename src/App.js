import "./App.css";
import MuiButton from "./components/MuiButton";
import MuiToggleButton from "./components/MuiToggleButton";
import MuiTextField from "./components/MuiTextField";
import MuiSelect from "./components/MuiSelect";
import MuiRadio from "./components/MuiRadio";
import MuiCheckbox from "./components/MuiCheckbox";

function App() {
  return (
    <div className="ml-10">
      <MuiButton />
      <div className="flex justify-center mt-4">
        <MuiToggleButton />
      </div>
      <MuiTextField />
      <div className="mt-4">
        <MuiSelect />
      </div>
      <div className="mt-4">
        <MuiRadio />
      </div>
      <div className="mt-4">
        <MuiCheckbox />
      </div>
    </div>
  );
}

export default App;
