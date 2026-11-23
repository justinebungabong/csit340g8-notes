import { useState, useEffect } from "react";
import { SettingsContext } from "./SettingsContext.js";
import Notes from "./components/Notes.jsx";
import Info from "./components/Info.jsx";

function App() {
  const [largeText, setLargeText] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("largeText")) ?? false;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    localStorage.setItem("largeText", JSON.stringify(largeText));
  }, [largeText]);

  return (
    <SettingsContext value={{ largeText, setLargeText }}>
      <div className="bg-[#f5f5f5] font-light text-[#111]">
        <Notes />
        <Info name="Justine Bungabong" />
      </div>
    </SettingsContext>
  );
}

export default App;
