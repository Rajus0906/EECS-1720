// sound
let loopBeat;
let bassSynth, cymbalSynth;
let counter;

// image
const barWidth = 35;
let lastBar = -1;

function setup() {
  // image
  createCanvas(720, 400);
  let c = color(175, 100, 220);
  fill(c); 
  let blueValue = blue(c);
  fill(0, 0, blueValue); //adds the colour blue  
  noStroke();
  background(0);

  // sound
  counter = 0;

  bassSynth = new Tone.MembraneSynth().toDestination();
  cymbalSynth = new Tone.MetalSynth({
    "frequency": 250,
    "envelope": {
      "attack": 1,
      "decay": 0.5,
      "release": 10,
    },
    "harmonicity": 5.1,
    "modulationIndex": 10,
    "resonance": 40,
    "octaves": 1.5,
  }).toDestination();

  loopBeat = new Tone.Loop(song, "16n");

  Tone.Transport.bpm.value = 10;
  Tone.Transport.start();
  loopBeat.start(0);
}

function song(time) {
  if (counter % 4 === 0) {
    bassSynth.triggerAttackRelease("c1", "8n", time, 1);
  }

  if (counter % 4 !== 1) {
    if (counter === 3 || counter === 12) {
        cymbalSynth.envelope.decay = 0.5;
    } else {
        cymbalSynth.envelope.decay = 0.01;
    }
    cymbalSynth.triggerAttackRelease("c1", "32n", time, 0.3);
  }
  counter = (counter + 1) % 16;
  // console.log(counter);
}

// image
function draw() {
  let whichBar = mouseX / barWidth;
  if (whichBar !== lastBar) {
    let barX = whichBar * barWidth;
    fill(mouseY, height, height);
    circle(mouseX,mouseY, barWidth, height);
    lastBar = whichBar;
  }
}
