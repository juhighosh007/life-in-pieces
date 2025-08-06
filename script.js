/* VARIABLES */
let screen;
screen = 0;
let teddy, scissor, candy, catcher, scoreChildhood, flagChildhood;
scoreChildhood = 0;
flagChildhood = false;

/* PRELOAD LOADS FILES */
function preload(){
  
}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#c2dfe3");

  // CHILDHOOD GAME SPRITES
    // falling objects
  childhoodSprites = new Group();
  teddy = new Sprite(-200,-200,50,50);
  teddy.color = color("brown");
  teddy.vel.y = 5;
  teddy.rotationLock = true;

  candy = new Sprite(-900,-900,50,50);
  candy.color = color("pink");
  candy.vel.y = 4;
  candy.rotationLock = true;

  scissor = new Sprite(-1100,-1100,50);
  scissor.color = color("black");
  scissor.vel.y = 5;
  scissor.rotationLock = true;
  
   // catcher 
  catcher = new Sprite(width / 2, height -  30 , 160, 20);
  catcher.color = color("black");
  catcher.collider = "k";

  // adding them to group
  childhoodSprites.add(teddy);
  childhoodSprites.add(candy);
  childhoodSprites.add(scissor);
  childhoodSprites.add(catcher);
  childhoodSprites.visible=false;

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
// screen changes
  if (screen == 0) {
    introPage();
  } else if (screen == 1) {
    childhood();
  } else if (screen == 2) {
    childhoodGame();
  } else if (screen == 3 ) {
    adolescence();
  } else if (screen == 4 ) {
    adolescenceGame();
  }
  
}

/* FUNCTIONS */

function introPage() {
  background("#c2dfe3");
  noStroke()
  textAlign(CENTER, CENTER);
  textSize(70);
  textStyle("bold");
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

function phaseIntro(phase, description, screenNumber) {
  background("A2D2FF");
// title
  textSize(45);
  textFont("verdana");
  textStyle("bold");
  fill("#954AC1");
  text(phase,
    width / 2, height / 2 - 200);
// intro text
  textStyle("italic");
  textSize(35);
  text(description, width / 2, height / 2 )
 textSize(20);
 fill("#67228E");
 text(`Press the space bar to continue`,
    width / 2, height / 2 + 200);
  if (kb.pressing("space")) {
    screen=screenNumber; 
  }
}

function adolescenceGame () {
  
}

function adolescence() {
  phase = "Adolescence (11-18)"
  description = `You want to be seen. You want to disappear.
 You slam doors. You stay up late. 
 You whisper secrets to someone who just might matter.
 Rules feel tight. Feelings feel louder.
You start testing limits - theirs, yours, the world's.`;
screenNumber = 4;
phaseIntro(phase, description, screenNumber);
}

function childhood() {
  phase = "Childhood (Age 0-10)";
  description = `The world feels big. Your legs are small.
 Every day is an adventure - chasing butterflies, sneaking cookies,\nhiding under the bed when the thunder's too loud.
 You don't understand everything. But you feel everything.
 Every toy, every hug, every scraped knee becomes a memory.
 Some are sweet. Some sting a little.`;
 screenNumber = 2;
 phaseIntro(phase, description, screenNumber);
}

function childhoodGame() {
  background("#FFF3B0");
  childhoodSprites.visible=true;
  // Instructions
  fill("#382145");
  textFont("Helvetica");
  textStyle("normal");
  textSize(40);
  textAlign(CENTER, CENTER);
  text(`Use the arrow keys to catch falling toys and snacks to earn points.
Stay alert - some things aren't meant for little hands.`, width/2, height/2);

 // Position of fallingObjects
 if (!flagChildhood) {
  teddy.pos = {x:200, y:0};
 candy.pos = {x:900, y:0};
 scissor.pos = {x:1100, y:0};
 flagChildhood = true;
 }
 

  // Draw score
  textAlign(RIGHT, RIGHT)
  textSize(40);
  fill("#382145");
  textStyle("bold");
  text("score = " + scoreChildhood, width - 50, 40);
  textSize(20);
  textStyle("normal");
  text("collect 50 points to win :)", width - 25, 80);
  text("a negative score means you lose", width - 25, 100);

  // Movement of catcher
  if (kb.pressing("left")) {
    catcher.vel.x=-6;
  } else if (kb.pressing("right")) {
    catcher.vel.x=6;
  } else {
    catcher.vel.x=0;
  }
  

  //Stop catcher at edges of screen
  if (catcher.x>(width-20)) {
    catcher.x=width-20;
  } else if (catcher.x < 50) {
    catcher.x=50;
  }

  // If fallingObjects reaches bottom, move back to random position at top
  if (teddy.y >= height) {
    teddy.y=0;
    teddy.x=random(30,width-105);
    teddy.vel.y=random(4,7);
  } else if (candy.y >= height) {
    candy.y=0;
    candy.x=random(30,width-105);
    candy.vel.y=random(4,7);
  } else if (scissor.y >= height) {
    scissor.y=0;
    scissor.x=random(30,width-105);
    scissor.vel.y=random(4,7);
  }

  //If fallingObjects collides with catcher, move back to random position at top
  if (teddy.collides(catcher)) {
    teddy.y=0;
    teddy.x=random(30,width-105);
    teddy.vel.y=random(2,6);
    teddy.direction="down";
    scoreChildhood+=10;
  } else if (candy.collides(catcher)) {
    candy.y=0;
    candy.x=random(30,width-105);
    candy.vel.y=random(2,6);
    candy.direction="down";
    scoreChildhood+=10;
  } else if (scissor.collides(catcher)) {
    scissor.y=0;
    scissor.x=random(30,width-105);
    scissor.vel.y=random(4,7);
    scissor.direction="down";
    scoreChildhood-=5;
  }

  // Win or Lose
  if (scoreChildhood>=50) {
    background("#FFF3B0");
    textAlign(CENTER, CENTER);
    textSize(45);
    fill("#382145");
  textFont("Helvetica");
  textStyle("bold");
    childhoodSprites.removeAll();
    text(`You head into the world with wonder still in your pocket
      - curious, kind, and ready to grow.`, width/2,height/2);
  fill("#382145");
  textSize(20);
  textStyle("italic");
  text(`Press the space bar to continue`,
    width / 2, height / 2 + 150);
  if (kb.pressing("space")) {
    screen=3;
  }
  } else if (scoreChildhood < 0) {
    background("#FFF3B0");
    childhoodSprites.removeAll();
    textAlign(CENTER, CENTER);
    textSize(45);
    fill("#382145");
  textFont("Helvetica");
  textStyle("bold");
    text(`You leave with fewer smiles than you deserved.
      But you're still standing.
      And that matters too.`, width/2,height/2);
  fill("#382145");
  textSize(20);
  textStyle("italic");
  text(`Press the space bar to continue`,
    width / 2, height / 2 + 150);
  if (kb.pressing("space")) {
    screen=3;
  }
  }
}
