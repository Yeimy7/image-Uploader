import { ProgressBar } from "./components/ProgressBar";
import { Upload } from "./components/Upload";
import { UploadSuccess } from "./components/UploadSuccess";

function App() {
  return (
    <div className="App">
      <Upload />
      <ProgressBar/>
      <UploadSuccess/>
    </div>
  );
}

export default App;
