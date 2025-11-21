export const SCALES = {

  // WESTERN / DIATONIC
  ionian: { name: "Ionian (Major)", intervals: [0,2,4,5,7,9,11] },
  dorian: { name: "Dorian", intervals: [0,2,3,5,7,9,10] },
  phrygian: { name: "Phrygian", intervals: [0,1,3,5,7,8,10] },
  lydian: { name: "Lydian", intervals: [0,2,4,6,7,9,11] },
  mixolydian: { name: "Mixolydian", intervals: [0,2,4,5,7,9,10] },
  aeolian: { name: "Aeolian (Natural Minor)", intervals: [0,2,3,5,7,8,10] },
  locrian: { name: "Locrian", intervals: [0,1,3,5,6,8,10] },

  // NATURAL / HARMONIC / MELODIC MINOR
  naturalMinor: { name: "Natural Minor", intervals: [0,2,3,5,7,8,10] },
  harmonicMinor: { name: "Harmonic Minor", intervals: [0,2,3,5,7,8,11] },
  melodicMinor: { name: "Melodic Minor Ascending", intervals: [0,2,3,5,7,9,11] },

  // MELODIC MINOR MODES (JAZZ)
  dorianFlat2: { name: "Dorian ♭2", intervals: [0,1,3,5,7,9,10] },
  lydianAugmented: { name: "Lydian Augmented", intervals: [0,2,4,6,8,9,11] },
  lydianDominant: { name: "Lydian Dominant", intervals: [0,2,4,6,7,9,10] },
  mixolydianFlat6: { name: "Mixolydian ♭6", intervals:[0,2,4,5,7,8,10] },
  halfDiminished: { name:"Half-Diminished (Locrian ♮2)", intervals:[0,2,3,5,6,8,10] },
  altered: { name:"Altered Scale (Super Locrian)", intervals:[0,1,3,4,6,8,10] },

  // HARMONIC MAJOR + MODES
  harmonicMajor: { name:"Harmonic Major", intervals:[0,2,4,5,7,8,11] },

  // PENTATONICS
  majorPentatonic: { name:"Major Pentatonic", intervals:[0,2,4,7,9] },
  minorPentatonic: { name:"Minor Pentatonic", intervals:[0,3,5,7,10] },
  egyptianPentatonic: { name:"Egyptian Pentatonic", intervals:[0,2,5,7,10] },
  kumoi: { name:"Japanese Kumoi", intervals:[0,2,3,7,9] },

  // BLUES
  blues: { name:"Blues Scale", intervals:[0,3,5,6,7,10] },
  majorBlues: { name:"Major Blues", intervals:[0,2,3,4,7,9] },

  // SYMMETRIC
  wholeTone: { name:"Whole Tone", intervals:[0,2,4,6,8,10] },
  diminishedWholeHalf: { name:"Diminished Whole–Half", intervals:[0,2,3,5,6,8,9,11] },
  diminishedHalfWhole: { name:"Diminished Half–Whole", intervals:[0,1,3,4,6,7,9,10] },

  // EXOTIC / ASIAN / EASTERN
  japaneseHirajoshi: { name:"Japanese Hirajoshi", intervals:[0,2,3,7,8] },
  japaneseInSen: { name:"Japanese In Sen", intervals:[0,1,5,7,10] },
  balinesePelog: { name:"Balinese Pelog", intervals:[0,1,3,7,8] },
  chinese: { name:"Chinese Scale", intervals:[0,4,6,7,11] },

  // PERSIAN / ARABIAN
  persian: { name:"Persian", intervals:[0,1,4,5,6,8,11] },
  arabian: { name:"Arabian", intervals:[0,2,4,5,6,8,10] },
  hijaz: { name:"Hijaz (Arabic)", intervals:[0,1,4,5,7,8,10] },
  hijazKar: { name:"Hijaz Kar (Arabic)", intervals:[0,1,4,5,7,8,11] },

  // HUNGARIAN / GYPSY
  hungarianMinor: { name:"Hungarian Minor", intervals:[0,2,3,6,7,8,11] },
  gypsy: { name:"Gypsy Minor", intervals:[0,1,4,5,7,8,10] },

  // NEAPOLITAN
  neapolitanMinor: { name:"Neapolitan Minor", intervals:[0,1,3,5,7,8,11] },
  neapolitanMajor: { name:"Neapolitan Major", intervals:[0,1,3,5,7,9,11] },

  // GREEK / REBETIKO / ANATOLIAN (12-TET)
  majoreLaiki: { name:"Ματζόρε Λαϊκή", intervals:[0,2,4,5,7,9,11] },
  minoreLaiki: { name:"Μινόρε Λαϊκή", intervals:[0,2,3,5,7,8,10] },
  hitzaz: { name:"Χιτζάζ", intervals:[0,1,4,5,7,8,11] },
  hitzaskiar: { name:"Χιτζασκιάρ", intervals:[0,1,4,5,7,8,11] },
  ousak: { name:"Ουσάκ", intervals:[0,2,3,5,7,9,10] },
  rastGreek: { name:"Ραστ", intervals:[0,2,4,5,7,9,10] },
  sabah: { name:"Σαμπάχ", intervals:[0,1,3,5,7,8,10] },
  houzam: { name:"Χουζάμ", intervals:[0,1,4,5,7,9,10] },
  sazkiar: { name:"Σαζκιάρ", intervals:[0,2,4,6,7,9,11] },
  peiraiotiki: { name:"Πειραιώτικη", intervals:[0,2,3,5,7,8,11] },
  anatolitiki: { name:"Αρμονική Ανατολίτικη", intervals:[0,2,3,5,7,8,11] },
  kardzigar: { name:"Καρτζιγιάρ", intervals:[0,2,3,5,6,8,11] },
  niavent: { name:"Νιαβέντ", intervals:[0,2,3,5,7,9,10] },
  segiah: { name:"Σεγκιάχ", intervals:[0,1,4,6,7,9,10] },
  huseyni: { name:"Χουσεϊνί", intervals:[0,2,3,5,7,9,10] },
  bayati: { name:"Bayati", intervals:[0,1,3,5,7,9,10] },
  kurdi: { name:"Kurdi", intervals:[0,1,3,5,7,8,10] }
};
