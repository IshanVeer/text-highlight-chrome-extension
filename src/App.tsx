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

  const deleteSavedTextHandler = (index: number) => {
    const updatedSavedText = texts.filter((_, i) => i !== index);
    setTexts(updatedSavedText);

    if (typeof chrome !== "undefined" && chrome.storage) {
      chrome.storage.local.set({ savedText: updatedSavedText });
    }
  };
  return (
    <>
      <h2>Saved Text</h2>
      <ul>
        {texts.map((text, i) => (
          <li key={i}>
            <p>{text}</p>{" "}
            <button onClick={() => deleteSavedTextHandler(i)}>
              <img src="/delete-icon.png" alt="delete" />
            </button>{" "}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
