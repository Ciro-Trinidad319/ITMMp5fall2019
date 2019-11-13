function setup() {
    // put setup code here
    createCanvas(800, 800);

}

function draw() {
    // put drawing code here
    background("#ffaf00");
    fill("#f3f300");
    ellipse(360, 360, 460, 460);
    fill("#ffdb00");
    stroke("black");

    strokeWeight(10);
    textStyle(BOLD);
    textAlign(CENTER);
    textSize(95);
    text("AM", 360, 360);

    
    if (mouseIsPressed) {

        background("#1e0088");

        fill('#4b5d90');
        ellipse(360, 360, 460, 460);
        fill("#00a2ff");
        stroke("GREY");
        text("PM", 360, 360);
    }



}


function mousePressed() {



}
