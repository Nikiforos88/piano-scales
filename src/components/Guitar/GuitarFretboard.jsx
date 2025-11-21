import "./GuitarFretboard.scss";
// import { transposeNote } from "../../components/utils/music";
import { transposeNote } from "../utils/music";

const GUITAR_STRINGS = [
  "E", // 6th string
  "A",
  "D",
  "G",
  "B",
  "E"  // 1st string
];

export default function GuitarFretboard({ highlightedNotes = [] }) {
  const frets = 13; // 0–12 (1 οκτάβα)

  return (
    <div className="guitar">
      {GUITAR_STRINGS.map((openNote, stringIndex) => (
        <div className="string" key={stringIndex}>
          {Array.from({ length: frets }).map((_, fret) => {
            const note = transposeNote(openNote, fret);
            const isHighlighted = highlightedNotes.includes(note);

            return (
              <div className="fret" key={fret}>
                {isHighlighted && <div className="dot"></div>}
                <span className="fret-label">
                  {fret === 0 ? openNote : ""}
                </span>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
