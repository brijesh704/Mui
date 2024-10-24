import "./App.css";
import MuiButton from "./components/MuiButton";
import MuiToggleButton from "./components/MuiToggleButton";
import MuiTextField from "./components/MuiTextField";
import MuiSelect from "./components/MuiSelect";

function App() {
  return (
    <div>
      <MuiButton />
      <div className="flex justify-center mt-4">
        <MuiToggleButton />
      </div>
      <MuiTextField />
      <div className="mt-4">
        <MuiSelect />
      </div>
    </div>
  );
}

export default App;
