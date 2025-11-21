export const SCALES = {
  // ============================
  // 1. MAJOR SYSTEM (DIATONIC)
  // ============================

  ionian: {
    name: "Ionian (Major)",
    intervals: [0, 2, 4, 5, 7, 9, 11]
  },
  dorian: {
    name: "Dorian",
    intervals: [0, 2, 3, 5, 7, 9, 10]
  },
  phrygian: {
    name: "Phrygian",
    intervals: [0, 1, 3, 5, 7, 8, 10]
  },
  lydian: {
    name: "Lydian",
    intervals: [0, 2, 4, 6, 7, 9, 11]
  },
  mixolydian: {
    name: "Mixolydian",
    intervals: [0, 2, 4, 5, 7, 9, 10]
  },
  aeolian: {
    name: "Aeolian (Natural Minor)",
    intervals: [0, 2, 3, 5, 7, 8, 10]
  },
  locrian: {
    name: "Locrian",
    intervals: [0, 1, 3, 5, 6, 8, 10]
  },

  // ============================
  // 2. HARMONIC MINOR + MODES
  // ============================

  harmonicMinor: {
    name: "Harmonic Minor",
    intervals: [0, 2, 3, 5, 7, 8, 11]
  },
  locrianNatural6: {
    name: "Locrian ♮6 (Mode 2 Harmonic Minor)",
    intervals: [0, 1, 3, 5, 6, 9, 10]
  },
  ionianSharp5: {
    name: "Ionian ♯5",
    intervals: [0, 2, 4, 6, 7, 9, 11]
  },
  dorianSharp4: {
    name: "Dorian ♯4",
    intervals: [0, 2, 3, 6, 7, 9, 10]
  },
  phrygianDominant: {
    name: "Phrygian Dominant",
    intervals: [0, 1, 4, 5, 7, 8, 10]
  },
  lydianSharp2: {
    name: "Lydian ♯2",
    intervals: [0, 3, 4, 6, 7, 9, 11]
  },
  superLocrianUltra: {
    name: "Super Locrian Ultra (Altered b♭7)",
    intervals: [0, 1, 3, 4, 6, 8, 9]
  },

  // ============================
  // 3. MELODIC MINOR (JAZZ) + MODES
  // ============================

  melodicMinor: {
    name: "Melodic Minor Ascending",
    intervals: [0, 2, 3, 5, 7, 9, 11]
  },
  dorianFlat2: {
    name: "Dorian ♭2",
    intervals: [0, 1, 3, 5, 7, 9, 10]
  },
  lydianAugmented: {
    name: "Lydian Augmented",
    intervals: [0, 2, 4, 6, 8, 9, 11]
  },
  lydianDominant: {
    name: "Lydian Dominant",
    intervals: [0, 2, 4, 6, 7, 9, 10]
  },
  mixolydianFlat6: {
    name: "Mixolydian ♭6",
    intervals: [0, 2, 4, 5, 7, 8, 10]
  },
  halfDiminished: {
    name: "Half Diminished (Locrian ♮2)",
    intervals: [0, 2, 3, 5, 6, 8, 10]
  },
  altered: {
    name: "Altered Scale (Super Locrian)",
    intervals: [0, 1, 3, 4, 6, 8, 10]
  },

  // ============================
  // 4. PENTATONICS
  // ============================

  majorPentatonic: {
    name: "Major Pentatonic",
    intervals: [0, 2, 4, 7, 9]
  },
  minorPentatonic: {
    name: "Minor Pentatonic",
    intervals: [0, 3, 5, 7, 10]
  },

  // ============================
  // 5. BLUES SCALES
  // ============================

  blues: {
    name: "Blues Scale",
    intervals: [0, 3, 5, 6, 7, 10]
  },
  majorBlues: {
    name: "Major Blues",
    intervals: [0, 2, 3, 4, 7, 9]
  },

  // ============================
  // 6. SYMMETRIC SCALES
  // ============================

  wholeTone: {
    name: "Whole Tone",
    intervals: [0, 2, 4, 6, 8, 10]
  },
  diminishedHalfWhole: {
    name: "Diminished (Half–Whole)",
    intervals: [0, 1, 3, 4, 6, 7, 9, 10]
  },
  diminishedWholeHalf: {
    name: "Diminished (Whole–Half)",
    intervals: [0, 2, 3, 5, 6, 8, 9, 11]
  },

  // ============================
  // 7. EXOTIC / ETHNIC SCALES
  // ============================

  arabian: {
    name: "Arabian",
    intervals: [0, 2, 4, 5, 6, 8, 10]
  },
  persian: {
    name: "Persian",
    intervals: [0, 1, 4, 5, 6, 8, 11]
  },
  doubleHarmonicMajor: {
    name: "Double Harmonic Major",
    intervals: [0, 1, 4, 5, 7, 8, 11]
  },
  hungarianMinor: {
    name: "Hungarian Minor",
    intervals: [0, 2, 3, 6, 7, 8, 11]
  },
  gypsy: {
    name: "Gypsy Scale",
    intervals: [0, 1, 4, 5, 7, 8, 10]
  },
  japaneseHirajoshi: {
    name: "Japanese Hirajoshi",
    intervals: [0, 2, 3, 7, 8]
  },
  japaneseInSen: {
    name: "Japanese In Sen",
    intervals: [0, 1, 5, 7, 10]
  },
  japaneseKumoi: {
    name: "Japanese Kumoi",
    intervals: [0, 2, 3, 7, 9]
  },
  enigmatic: {
    name: "Enigmatic",
    intervals: [0, 1, 4, 6, 8, 10, 11]
  }
};
