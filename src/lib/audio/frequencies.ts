export const notes: Audio.Note[] = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G','G#', 'A', 'A#', 'B'];

export const getFrequency = (note: Audio.Note, octave: Audio.Octave): number => {
  const semitonesFromA4 = getSemitonesFromA4(note, octave);
  return 440 * Math.pow(2, semitonesFromA4 / 12);
}

const getSemitonesFromA4 = (note: Audio.Note, octave: Audio.Octave): number => {
  const keyIndex = notes.indexOf(note);
  const aIndex = notes.indexOf('A');
  const octaveIndex = (octave - 4) * 12;
  return keyIndex - aIndex + octaveIndex;
}