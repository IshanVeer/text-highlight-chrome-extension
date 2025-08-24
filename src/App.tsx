import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [texts, setTexts] = useState<string[]>([]);
  useEffect(() => {
    if (typeof chrome !== "undefined" && chrome.storage) {
      chrome.storage.local.get("savedText", (result) => {
        setTexts(result.savedText || []);
      });
    } else {
      console.warn("Chrome sotrage not available in dev mode");
    }
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
