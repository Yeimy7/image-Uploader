import { Container } from "./components/Container";
import { Upload } from "./components/Upload";
import FileState from "./context/fileState";

function App() {

  return (
    <FileState>
      <Container />
    </FileState>
  );
}

export default App;
