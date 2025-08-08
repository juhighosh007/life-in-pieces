/* VARIABLES */
let teddy, scissor, candy, catcher, box, currentScenariosIndex;
let screen = 0;
let scoreChildhood = 0;
let flagChildhood = false;
let flagAdolescenceGame = false;
let flagAdulthood = false;
currentScenariosIndex = 0;

// variables for adulthood simulation
let burnout = 20;
let joy = 60;
let progress = 30;
let scenarios;
scenarios = {
  weeks: ["Week 1 - The First Storm", "Week 2 - The Tempting Weekend", "Week 3 - The Side Dream",
    "Week 4 - The Lonely Scroll","Week 5 - Crunch Time","Week 6 - Birthday Crossroads"],
  scenario: ["Your first major assignment / work project lands sooner than expected.\nThe excitement of a new chapter is already clashing with deadlines.",
    "A friend offers you free tickets to a weekend music festival in another city.\nBut Monday has an important deliverable.",
    "You've been itching to start your own passion project,\nbut you barely have enough energy for your main commitments.",
    "You've noticed your social circle shrinking.\nEveryone seems busy, and you've been scrolling alone most nights.",
    "A surprise deadline hits.\nYou're unprepared and already running low on sleep.",
    "It's your birthday.\nFriends have planned something special, but your boss/client drops urgent last-minute work."
  ]
}

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

  // adulthood game sprites
  box = new Sprite(-400, -400, 1000,400);
  box.color = "#F2E9E4";
  box.rotationLock = true;
  box.collider= "s";

  buttons = new Group()
  buttonOne = new buttons.Sprite(-400, -400);
  buttonTwo = new buttons.Sprite(-400, -400);
  buttonThree = new buttons.Sprite(-400, -400);
  buttons.color = "#C9ADA7";
  buttons.width = 315;
  buttons.height = 50;
  buttons.rotationLock = true;
  buttons.collider= "s";
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
  } else if (screen == 7 ) {
    adulthoodEnd();
  } else if (screen == 8 ) {
    oldAgeIntro();
  } else if (screen == 9) {
    oldAgeGame();
  }
  
}

/* FUNCTIONS */

function oldAgeGame() {
  background("#9A8C98");
}

function adulthoodGame() {
  background("#C9ADA7");
  textFont("verdana");
  box.x= width/2;
  box.y = height/2;
  drawSprites();
    // showing variables
  fill("#4A4E69");
  textSize(15);
  textStyle("bold");
  textAlign(LEFT, LEFT);
  text("burnout = " + burnout, width/2 - 470, height/2 - 160);
  text("joy = " + joy, width/2 - 340, height/2 - 161);
  text("progress = " + progress, width/2 - 240, height/2 - 162);

// titles
    fill("#22223B");
  textAlign(LEFT, LEFT);
  textSize(30);
  let heading = scenarios.weeks[currentScenariosIndex];
  text(heading, width/2 - 470, height/2 - 100);
  let message = scenarios.scenario[currentScenariosIndex]
  textSize(16);
  text(message, width/2 - 470, height/2 - 60);
  

  // choices buttons
  buttonOne.pos = {x: width/2 + 160, y: height/2 + 40};
  buttonTwo.pos = {x: width/2 - 160, y: height/2 + 40};
  buttonThree.pos = {x: width/2 - 10, y: height/2 + 110};

  buttons.textColor="#22223B";
  if (currentScenariosIndex == 0) {
    buttonOne.text = "Dive head-first into work";
    buttonTwo.text = "Do a balanced amount, then go out for\ndinner with new friends";
    buttonThree.text = "Procrastinate and binge a show";
    if (buttonOne.mouse.presses()) {
      progress+=18;
      burnout+=15;
      joy-=5;
      currentScenariosIndex++
    } else if (buttonTwo.mouse.presses()) {
      progress+=10
      joy+=8;
      burnout+=7
      currentScenariosIndex++
    } else if (buttonThree.mouse.presses()) {
      joy+=12;
      burnout-=5;
      progress-=15;
      currentScenariosIndex++
    }
  }  else if (currentScenariosIndex == 1) {
    buttonOne.text = "Go all weekend, ignore work";
    buttonTwo.text = "Decline and work all weekend";
    buttonThree.text = "Go for one day, work the rest";
    if (buttonOne.mouse.presses()) {
      progress-=20;
      burnout-=10;
      joy+=20;
      currentScenariosIndex++
    } else if (buttonTwo.mouse.presses()) {
      progress+=20;
      burnout+=18;
      joy-=8;
      currentScenariosIndex++
    } else if (buttonThree.mouse.presses()) {
      joy+=12;
      progress+=8;
      burnout+=5;
      currentScenariosIndex++
    }
  } else if (currentScenariosIndex == 2) {
    buttonOne.text = "Dedicate evenings to it";
    buttonTwo.text = `Save it for "later"`;
    buttonThree.text = "Drop a few main commitments to make time";
    if (buttonOne.mouse.presses()) {
      progress+=12;
      joy+=15;
      burnout+=12;
      currentScenariosIndex++
    } else if (buttonTwo.mouse.presses()) {
      progress+=10;
      burnout+=5;
      joy-=5;
      currentScenariosIndex++
    } else if (buttonThree.mouse.presses()) {
      joy+=18;
      burnout-=8;
      progress-=10;
      currentScenariosIndex++
    }
  } else if (currentScenariosIndex == 3) {
    buttonOne.text = "Host a small gathering";
    buttonTwo.text = "Join a local club or event";
    buttonThree.text = "Ignore it and focus on work";
    if (buttonOne.mouse.presses()) {
      joy+=15;
      burnout-=5;
      currentScenariosIndex++
    } else if (buttonTwo.mouse.presses()) {
      joy+=12;
      burnout+=5;
      progress+=5;
      currentScenariosIndex++
    } else if (buttonThree.mouse.presses()) {
      progress+=15;
      burnout+=10;
      joy-=10;
      currentScenariosIndex++
    }
  } else if (currentScenariosIndex == 4) {
    buttonOne.text = "Pull two all-nighters";
    buttonTwo.text = "Submit a rough version";
    buttonThree.text = "Ask for an extension ";
    if (buttonOne.mouse.presses()) {
      progress+=20;
      burnout+=25;
      joy-=5;
      currentScenariosIndex++
    } else if (buttonTwo.mouse.presses()) {
      progress-=5;
      burnout+=5;
      currentScenariosIndex++
    } else if (buttonThree.mouse.presses()) {
      progress+=10;
      joy+=5;
      currentScenariosIndex++
    }
  } else if (currentScenariosIndex == 5) {
    buttonOne.text = "Choose the celebration";
    buttonTwo.text = "Balance both (leave party early)";
    buttonThree.text = "Cancel plans for work";
    if (buttonOne.mouse.presses()) {
      joy+=22;
      burnout-=10;
      progress-=10;
      screen = 7;
    } else if (buttonTwo.mouse.presses()) {
      joy+=12;
      progress+=12;
      burnout+=5;
      screen = 7;
    } else if (buttonThree.mouse.presses()) {
      progress+=18;
      burnout+=15;
      joy-=12;
      screen = 7;
    }
  }
}

function adulthoodEnd() {
  buttons.removeAll();
  background("#C9ADA7");
  box.x= width/2;
  box.y = height/2;
  drawSprites();
  
  fill("#22223B");
  textAlign(CENTER, CENTER);
  textSize(40);

  if (joy>=70 && progress >= 70 ) {
    textStyle("bold");
    text("Thriving", width/2, height/2 - 100);
    textSize(20);
    textStyle("normal");
    text(`You've built a life that excites you. Work, friendships, and personal goals are in harmony. 
      You're thriving — and you know it.`, width/2, height/2);
  } else if (joy <=20) {
    textStyle("bold");
    text("Alone in the Crowd", width/2, height/2 - 100);
    textSize(20);
    textStyle("normal");
    text(`You've got the degrees, the job, maybe even the apartment… 
      but the silence at the end of the day feels louder than any success.`,width/2, height/2);
    } else if (progress>=80 && burnout > 50 ) {
    textStyle("bold");
    text("The Achiever",width/2, height/2 - 100);
    textSize(20);
    textStyle("normal");
    text(`Your career is impressive, but the cost shows. 
      The late nights and sacrifices have left you wondering what you missed.`, width/2, height/2);
  } else if (burnout >= 80) {
    textStyle("bold");
    text("Burned Out",width/2, height/2 - 100);
    textSize(20);
    textStyle("normal");
    text(`You've run on empty for too long. 
      Your body forces you to stop, whether you like it or not.`,width/2, height/2);
  } else {
    textStyle("bold");
    text("Coasting",width/2, height/2 - 100);
    textSize(20);
    textStyle("normal");
    text(`Life's not perfect, but it's steady. 
      You get by, with enough good days to keep going.`,width/2, height/2);
  }
  fill("#22223B");
  textSize(20);
  textStyle("italic");
  text(`Press the space bar to continue`,
    width / 2, height / 2 + 100);
  if (kb.presses("space")) {
    screen=8;
  }
}

function oldAgeIntro() {
  phase = "Old Age"
  description = `Your body slows. Your thoughts wander.
 You forget names, but remember laughter.
 You've carried so much - years, people, moments that changed you.
 Now, you're trying to hold on just a little longer.
 Every breath is a goodbye. And a thank you.`;
  screenNumber = 9;
  phaseIntro(phase, description, screenNumber);
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
  if (teddy.y >= height || teddy.y<=0) {
    teddy.y=0;
    teddy.x=random(30,width-105);
    teddy.vel.y=random(4,7);
  } else if (candy.y >= height || candy.y<=0) {
    candy.y=0;
    candy.x=random(30,width-105);
    candy.vel.y=random(4,7);
  } else if (scissor.y >= height || scissor.y<=0) {
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
