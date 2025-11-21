import { useState } from "react";
import Keyboard from "./components/Keyboard/Keyboard";
import { NOTES } from "./components/data/notes";
import { SCALES } from "./components/data/scales";
import { buildScale } from "./components/utils/music";


function App() {
  const [root, setRoot] = useState("C");
  const [scale, setScale] = useState("ionian");

  const highlighted = buildScale(root, SCALES[scale].intervals);

  return (
    <div>
      <h1>Piano Scales</h1>

      {/* Root note selection */}
      <select value={root} onChange={e => setRoot(e.target.value)}>
        {NOTES.map(n => (
          <option key={n} value={n}>{n}</option>
        ))}
      </select>

      {/* Scale selection */}
      <select value={scale} onChange={e => setScale(e.target.value)}>
        {Object.entries(SCALES).map(([key, obj]) => (
          <option key={key} value={key}>{obj.name}</option>
        ))}
      </select>

      <Keyboard highlightedNotes={highlighted} />
    </div>
  );
}

export default App;
