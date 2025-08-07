/* VARIABLES */
let screen;
screen = 0;
let teddy, scissor, candy, catcher, scoreChildhood, flagChildhood;
scoreChildhood = 0;
flagChildhood = false;
let flagAdolescenceGame = false;

/* PRELOAD LOADS FILES */
function preload(){
  candyImg = loadImage('assets/candy.png');
  scissorsImg = loadImage('assets/scissors.png');
  teddyImg = loadImage('assets/teddy.png');
}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#c2dfe3");

  candyImg.resize(70,130);
  scissorsImg.resize(70,0);
  teddyImg.resize(90,0);


  // CHILDHOOD GAME SPRITES
    // falling objects
  childhoodSprites = new Group();
  teddy = new Sprite(teddyImg, -200,-200,50,50);
  // teddy.color = color("brown");
  teddy.vel.y = 5;
  teddy.rotationLock = true;

  candy = new Sprite(candyImg,-900,-900,50,50);
  // candy.color = color("pink");
  candy.vel.y = 4;
  candy.rotationLock = true;

  scissor = new Sprite(scissorsImg,-1100,-1100,50);
  // scissor.color = color("black");
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
  } else if ( screen == 5 ) {
    adulthoodIntro();
  } else if (screen == 6 ) {
    adulthoodGame();
  }
  
}

/* FUNCTIONS */

function adulthoodGame() {
  
}

function adulthoodIntro() {
  phase = "Adulthood"
  description = `Freedom feels amazing… until it doesn’t.
 You're juggling too much - classes, jobs, late-night calls, ramen again.
 Everyone says these are the best years. 
 But no one tells you how lonely they can get.
 You’re figuring it out. One week at a time. Messy. Brave. Real.`;
screenNumber = 6;
phaseIntro(phase, description, screenNumber);
}

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
  if (kb.presses("space")) {
    screen=screenNumber; 
  }
}

function adolescenceGame () {
  background("#EF476F");
  // draw maze  
  if (!flagAdolescenceGame) {
    walls = new Group();
  noStroke()
  walls.color="black";
  new walls.Sprite(160, 10, 300, 5,);
  new walls.Sprite(10, 198, 5, 380);  
  new walls.Sprite(150, 60, 5, 100);
  new walls.Sprite(230, 390, 325, 5); 
  new walls.Sprite(50, 300, 75, 5); 
  new walls.Sprite(340, 146, 110, 5);
  new walls.Sprite(340, 250, 110, 5);
  new walls.Sprite(285, 198, 5, 109);
  new walls.Sprite(185, 332, 5, 109);
  new walls.Sprite(190, 197, 185, 5);
  new walls.Sprite(395, 200, 5, 380);
  walls.collider = "static";

  // player 
  player = new Sprite(350, 50, 40, 40);
  player.color = "#FFD166";
  player.rotationLock = true;
  
  // obstacles 
  firstObstacle = new Sprite(110,50,40,40, "k");
  firstObstacle.color = "white";
  firstObstacle.rotationLock = true;
  firstObstacle.vel.y = 1;

  secondObstacle = new Sprite(50,250,40,40, "k");
  secondObstacle.rotationLock = true;
  secondObstacle.color = "black";
  secondObstacle.vel.x = 1;

  flagAdolescenceGame = true;
  }
  
  //Move the obstacle
    if (firstObstacle.y > 155){
      firstObstacle.vel.y = -1;
    } else if(firstObstacle.y < 50){
      firstObstacle.vel.y = 1;
    }

    if (secondObstacle.x > 200){
      secondObstacle.vel.x = -1;
    } else if(firstObstacle.y < 50){
      secondObstacle.vel.x = 1;
    }
  
    //If player touches obstacle, start again
    if (player.collides(firstObstacle) || (player.collides(secondObstacle))) {
      player.x = 350;
      player.y = 50;
    } 

  // Draw start and end text
  fill("white");
  textSize(20);
  text('Start', 350, 20);
  text('End', 35, 390);

  //Move the player
  if (kb.pressing("left")) {
    player.vel.x=-3;
  } else if (kb.pressing("right")) {
    player.vel.x=3;
  } else if (kb.pressing("up")) {
    player.vel.y=-3;
  } else if (kb.pressing("down")) {
    player.vel.y=3;
  } else {
    player.vel.x = 0;
    player.vel.y = 0;
  }

  //Player cannot go above maze
  if (player.y < 20) {
    player.y = 20;
  }

  // Player wins
  if (player.y > 380) {
    textSize(20);
    text('You Win!', 170, 170);
    player.vel.x = 0;
    player.vel.y = 0;
    firstObstacle.remove();
    secondObstacle.remove();
    textStyle("italic");
    textSize(17);
    text(`Press the space bar\nto continue`,
    175, 230);
  if (kb.presses("space")) {
    screen=5;
    walls.removeAll();
    player.remove();
  }
  }

  // Instructions 
  textStyle("italic")
  textSize(35);
  textAlign(CENTER, CENTER);
  text(`You're a rebellious teen sneaking out at midnight.
Use the arrow keys to navigate the maze.
Avoid obstacles - one wrong move and you're busted.
Make it out without getting caught. Freedom awaits.
`, width/2 + 200, height/2 - 100);
  
  
}

function adolescence() {
  phase = "Adolescence"
  description = `You want to be seen. You want to disappear.
 You slam doors. You stay up late. 
 You whisper secrets to someone who just might matter.
 Rules feel tight. Feelings feel louder.
You start testing limits - theirs, yours, the world's.`;
screenNumber = 4;
phaseIntro(phase, description, screenNumber);
}

function childhood() {
  phase = "Childhood";
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
