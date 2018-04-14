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
var noteTypes = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
// var oct = [1,2,3,4,5,6,7,8];
oct = 5 // [0, 4] + 2 --> [2, 6]

// var majorKeySequence = [0,2,2,1,2,2,2]
var majorKeySequence = [0,2,4,5,7,9,11]
var indexNoteForMajor = 2

majorNotes = []
for (var i = 0; i < majorKeySequence.length; i++) {
    majorNotes.push(noteTypes[(indexNoteForMajor + majorKeySequence[i]) % noteTypes.length]);
}

// var octPos = 0;
// var notePos = 0;
// var counter = 0;
var instruments = ['piano', 'organ', 'acoustic', 'edm'];

testInstance === Synth; // true

function playNote(dataPoint, min, max) {
	// octave = oct[Math.floor(dataPoint/noteTypes.length)]
	// note = noteTypes[dataPoint % noteTypes.length]
	// console.log("Data point: " + dataPoint + " octave " + oct + " note " + note + " tyr this " + Math.floor(dataPoint/noteTypes.length));
	// Synth.play(instruments[0], note, octave, 2);
	octave = Math.floor(dataPoint / majorNotes.length) % oct + 2
	note = majorNotes[dataPoint % majorNotes.length]
	if(min != 0 || max != 0) {
		Synth.play(instruments[2], note, octave, 1);
		Synth.setVolume(1.00);
	} else {
		Synth.setVolume(.2);
		Synth.play(instruments[0], note, octave, 2);
	}
	// console.log("Data point: " + dataPoint + " octave " + octave + " note " + note + " tyr this " + Math.floor(dataPoint/noteTypes.length));
	// console.log("MajorNotes Length: " + majorNotes.length + " index " + dataPoint % majorNotes.length)
}
//Synth.setSampleRate(20000);