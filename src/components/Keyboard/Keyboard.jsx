import "./Keyboard.scss";
import { NOTES } from "../data/notes";
import { playNote } from "../../audio/playNote";

export default function Keyboard({ highlightedNotes = [] }) {
  const octaves = [3, 4, 5]; // 3 οκτάβες

  return (
    <div className="keyboard">
      {octaves.map(octave =>
        NOTES.map(note => {
          const isBlack = note.includes("#");
          const fullNote = `${note}${octave}`;
          const isActive = highlightedNotes.includes(note);

          return (
            <div
              key={fullNote}
              className={`key ${isBlack ? "black" : "white"} ${
                isActive ? "active" : ""
              }`}
              onClick={() => playNote(fullNote)}
            >
              {fullNote}
            </div>
          );
        })
      )}
    </div>
  );
}
