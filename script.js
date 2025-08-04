/* VARIABLES */
let screen;
screen = 0;

/* PRELOAD LOADS FILES */
function preload(){
  
}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#c2dfe3");
}

/* DRAW LOOP REPEATS */
function draw() {

  // Game only runs in desktop
  if (windowWidth < 1000) {
    background(0);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(windowWidth*0.049);
    textStyle("bold");
    textFont('Georgia')
    text(`⚠️ Unsupported Device\n
    "Life: In Pieces" is best experienced\non a computer with a keyboard.\n
    Mobile play is currently\nnot supported.`, width / 2, height / 2);
    noLoop();
    return; 
  }

  if (screen == 0) {
    introPage();
  } else if (screen == 1) {
    childhood();
  } else if (screen == 2) {
    childhoodGame();
  }
  
}

/* FUNCTIONS */

function introPage() {
  background("#c2dfe3");
  noStroke()
  textAlign(CENTER, CENTER);
  textSize(70);
  textStyle("normal");
  textFont("Verdana");
  fill("#253237");
  text("Life: In Pieces", width/2, height/2-200);
  textSize(30);
  textFont("Helvetica");
  textStyle("bold");
  fill("#34474e");
  text(`The game explores the human journey\nthrough different life stages
     childhood, adolescence, adulthood, and beyond\nwith a mix of genres\nincluding choose-your-own-adventure, collection, simulation, and symbolic arcade challenges.`,
    width / 2, height / 2);
  fill("#253237");
  textStyle("italic");
  text(`Click anywhere on the screen to continue`,
    width / 2, height / 2 + 200);
  if (mouse.presses()) {
    screen=1
  }
}

function childhood() {
  background("A2D2FF");
  textSize(35);
  textFont("verdana");
  textStyle("bold");
  fill("#954AC1");
  textStyle("italic");
  text(`The world feels big. Your legs are small.
 Every day is an adventure - chasing butterflies, sneaking cookies,\nhiding under the bed when the thunder's too loud.
 You don't understand everything. But you feel everything.
 Every toy, every hug, every scraped knee becomes a memory.
 Some are sweet. Some sting a little.`, width / 2, height / 2 )
 textSize(20);
 fill("#67228E");
 text(`Press the space bar to continue`,
    width / 2, height / 2 + 200);
  if (kb.pressing("space")) {
    screen=2; 
  }
}

function childhoodGame() {
  background("#FFF3B0");
}
