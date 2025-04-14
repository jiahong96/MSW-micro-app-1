import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    console.log(window.mswWorker);
  });
  return <div>MicroApp1</div>;
}

export default App;
