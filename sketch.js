// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.


var engine;
var ground;
var canonBase, canonHead, canonHead2, canonShooter, canonShooter2;
var x = 1;
/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    var canvas = createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world ;

    ground = new Ground(200, 390, 400, 20);

}

function draw() {
// Remember to update the Matter Engine and set the background.
background(0);
Engine.update(engine);

fill ("yellow");
textSize = 20;
text("Use Arrow Keys To Rotate The Shooter", 100, 50);

//console.log(x);

if(x > 0.88){
    if(keyIsDown(DOWN_ARROW)){
        x = (x - 0.02);
    }
}

if(x < 1.4){
    if(keyIsDown(UP_ARROW)){
        x = x + 0.02;
    }
}

canonBase = new CanonBase(100, 350, 100, 60);
canonShooter = new CanonShooter(140, 300, 80, 30, PI/x);

ground.display();

canonShooter.display();

canonHead2 = circle(100, 320, 100);

canonBase.display();





}


function keyReleased() {
    // Call the shoot method for the cannon.
}