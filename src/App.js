import "./App.css";
import MuiButton from "./components/MuiButton";
import MuiToggleButton from "./components/MuiToggleButton";
import MuiTextField from "./components/MuiTextField";

function App() {
  return (
    <div>
      <MuiButton />
      <div className="mt-4 flex justify-center">
        <MuiToggleButton />
      </div>
      <MuiTextField />
    </div>
  );
}

export default App;
