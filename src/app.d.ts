// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  interface Window { webkitAudioContext: typeof AudioContext }
  
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

  namespace Audio {
    type Note = 'C' | 'C#' | 'D' | 'D#' | 'E' | 'F' | 'F#' | 'G' | 'G#' | 'A' |'A#' | 'B';
    type Octave = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
    interface OscillatorOptions {
      frequency?: number;
      waveForm?: OscillatorType;
      delay?: number; }
    }
}

export {};
