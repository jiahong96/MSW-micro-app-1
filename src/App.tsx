import { useEffect } from "react";
import "./App.css";
import "./msw.ts";

function App() {
  useEffect(() => {
    async function getInsuranceData() {
      const url = "/insurances";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);
      } catch (error: unknown) {
        if (error instanceof Error) console.error(error.message);
      }
    }

    getInsuranceData();
  });
  return <div>MicroApp1</div>;
}

export default App;
