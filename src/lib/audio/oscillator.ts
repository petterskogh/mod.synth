export class Oscillator {
  private readonly _context: AudioContext;
  private readonly _output: AudioNode;
  private _oscillator: OscillatorNode;

  constructor(context: AudioContext, output: AudioNode, options: Audio.OscillatorOptions) {
    this._context = context;
    this._output = output;
    this._oscillator = this.createOscillator(options);
  }

  get frequency(): number {
    return this._oscillator.frequency.value;
  }

  set frequency(frequency: number) {
    this._oscillator.frequency.value = frequency;
  }

  get waveForm(): OscillatorType {
    return this._oscillator.type;
  }

  set waveForm(waveForm: OscillatorType) {
    this._oscillator.type = waveForm;
  }

  get delay(): number {
    return this._oscillator.context.currentTime;
  }

  set delay(delay: number) {
    this._oscillator.start(delay);
  }

  play(delay = 0): void {
    this._oscillator.connect(this._output);
    this._oscillator.start(delay);
  }
  
  stop(): void {
    this._oscillator.stop(0);
    this._oscillator.disconnect();
  }

  private createOscillator({ frequency = 440, waveForm = 'sine', delay = 0 }: Audio.OscillatorOptions): OscillatorNode {
    const oscillator = this._context.createOscillator();
    oscillator.frequency.setValueAtTime(frequency, delay);
    oscillator.type = waveForm;
    return oscillator;
  }
}