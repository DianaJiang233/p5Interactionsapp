

let bg;
let y = 0;
let capture;
let playAudioButton;
let compliment;
let complislider;
let morecompli;
let complislider2;
let applause;
let applauseslider1;
let applause2;
let applauseslider2;
let s = 'The Louver museum had to turn ticket holders away as it struggled to manage long lines of visitors forming inside the galleries.';
let g = 'There are';
let o = 'people waiting in lines to see you!';

function preload(){
  compliment=loadSound("../audio/compli1.mp3");
  morecompli=loadSound("../audio/compli2.mp3");
  applause=loadSound("../audio/clap1.mp3");
  applause2=loadSound("../audio/clap2.mp3");
}
function setup() {
  // The background image must be the same size as the parameters
  // into the createCanvas() method. In this program, the size of
  // the image is 720x400 pixels.

  bg = loadImage('../image/monalisa.jpg');

  createCanvas(windowWidth, windowHeight);
  playAudioButton=createButton('Compliments');
  playAudioButton.mousePressed(playAudioToggle);
  complislider=createSlider(0, 3,1,0.01);
  playAudioButton2=createButton('More Compliments');
  playAudioButton2.mousePressed(playAudioToggle2);
  complislider2=createSlider(0, 3,1,0.01);
  playAudioButton3=createButton('Applause');
  playAudioButton3.mousePressed(playAudioToggle3);
  applauseslider1=createSlider(0, 3,1,0.01);
  playAudioButton4=createButton('More Applause');
  playAudioButton4.mousePressed(playAudioToggle4);
  applauseslider2=createSlider(0, 3,1,0.01);


complislider.position(1200,540);
playAudioButton.position(1200,520);
complislider2.position(1200,620);
playAudioButton2.position(1200,600);
applauseslider1.position(1200,360);
playAudioButton3.position(1200,340);
applauseslider2.position(1200,450);
playAudioButton4.position(1200,430);
  capture = createCapture(VIDEO);

  capture.hide();

  frameRate(30);


}

function playAudioToggle(){
  if(!compliment.isPlaying()){
    compliment.play();
    playAudioButton.html('No Compliments');
  }else{
    compliment.pause();
    playAudioButton.html('Compliments');
  }
}

function playAudioToggle2(){
  if(!morecompli.isPlaying()){
    morecompli.play();
    playAudioButton2.html('No More Compliments');
  }else{
    morecompli.pause();
    playAudioButton2.html('Play More Compliments');
  }
}
  function playAudioToggle3(){
    if(!applause.isPlaying()){
      applause.play();
      playAudioButton3.html('Stop Applause');
    }else{
      applause.pause();
      playAudioButton3.html('Applause');
    }
  }
  function playAudioToggle4(){
    if(!applause2.isPlaying()){
      applause2.play();
      playAudioButton4.html('No more Applause');
    }else{
      applause2.pause();
      playAudioButton4.html('More Applause');
    }
  }

function draw() {

compliment.setVolume (complislider.value());
morecompli.setVolume (complislider2.value());
applause.setVolume (applauseslider1.value());
applause2.setVolume (applauseslider2.value());

image(bg, 0, 0,1000,800);
image(capture, 460, 350, 85,170);


fill(250, 141, 97);
rect(1000, 0, 500, 1800);

fill(255,255,255,255);
rect(1000, 130, 500, 150);

textSize(20);
fill(255,255,255,255);
text(s, 1040, 50, 400, 1300); // Text wraps within text box
textSize(25);
fill(0,0,0);

text(g, 1040, 150, 400, 1300);
text(o,1050, 230, 400, 1300);

textSize(60);
text(frameCount, 1240, 150,400,1300);





}
