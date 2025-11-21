import { NOTES } from "../data/notes.js";

export function getNoteIndex(note) {
  return NOTES.indexOf(note);
}

export function transposeNote(note, semitones) {
  const i = getNoteIndex(note);
  return NOTES[(i + semitones + 12) % 12];
}

export function buildScale(root, intervals) {
  const rootIdx = getNoteIndex(root);
  return intervals.map(semi => NOTES[(rootIdx + semi) % 12]);
}
