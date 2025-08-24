import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [texts, setTexts] = useState<string[]>([]);
  useEffect(() => {
    chrome.storage.local.get("savedTexts", (result) => {
      setTexts(result.savedTexts || []);
    });
  }, []);
  return (
    <>
      <h2>Saved Text</h2>
      <ul>
        {texts.map((text, i) => (
          <li key={i}>{text}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
