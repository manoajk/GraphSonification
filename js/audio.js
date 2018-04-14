// tempo = 100;

// var notes = [
//     [659, 4],
//     [659, 4],
//     [659, 4],
//     [523, 8],
//     [0, 16],
//     [783, 16],
//     [659, 4],
//     [523, 8],
//     [0, 16],
//     [783, 16],
//     [659, 4],
//     [0, 4],
//     [987, 4],
//     [987, 4],
//     [987, 4],
//     [1046, 8],
//     [0, 16],
//     [783, 16],
//     [622, 4],
//     [523, 8],
//     [0, 16],
//     [783, 16],
//     [659, 4]
// ];

// // notes.reverse(); 
// tempo = 100;

// // create web audio api context
// var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// function playMelody(){
//     if (notes.length > 0){
//         note = notes.shift()
//         playNote(note[0],1000*256/(note[1]*tempo));
//     }
// }

// function playNote(frequency, duration) {
// // create Oscillator node
// var oscillator = audioCtx.createOscillator();

// oscillator.type = 'square';
// oscillator.frequency.value = frequency; // value in hertz
// oscillator.connect(audioCtx.destination);
// oscillator.start();
  
// setTimeout(
//     function(){
//         oscillator.stop();
//         playMelody();
//     }, duration);
// }

// playMelody();

Synth instanceof AudioSynth; // true

var testInstance = new AudioSynth;
testInstance instanceof AudioSynth; // true
var noteTypes = ['C','C#','D', 'D#','E','F','F#','A','A#','B'];
var oct = [2,3,4,5,6];
var octPos = 0;
var notePos = 0;
var counter = 0;
var instruments = ['piano', 'organ', 'acoustic', 'edm'];

testInstance === Synth; // true
//Synth.setSampleRate(20000);