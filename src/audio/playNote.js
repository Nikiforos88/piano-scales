import { piano } from "./piano";
import * as Tone from "tone";

export function playNote(note) {
  Tone.start(); // απαιτείται για browser policies
  piano.triggerAttackRelease(note, "8n");
}
