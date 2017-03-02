var f = 0;
var redValue = 0;
var greenValue = 0;
var blueValue = 0;


function setup() {
    createCanvas(800, 800);
}

function draw() {
    background(0);
    noStroke();
    
    
    //her drawing machine week 7 example
    //pink circle has a pink quivering circle inside
    redValue = random(255);
    greenValue = random(255);
    blueValue = random(255);
    stroke(redValue, greenValue, blueValue);
    if (mouseIsPressed == false) {
        ellipse(mouseX, mouseY, height / 20, height / 20);
    } else {
        background(0);
        fill(0);
    }
    
    //a moving flower (instead of her red bus)
    push();
    translate(f, 0);
    fill(204, 21, 192, 127);
    stroke(127, 63, 120);
    translate(580, 200);
    noStroke();
    for (var i = 0; i < 10; i ++) {
    ellipse(20, 130, 20, 380);
    rotate(PI/5);
    }
    if (f < width + 25) {
        f++;
    } else {
        f = -250;
    }
    pop();
 
    //diagonal purple lines
    fill(255);
    stroke(127, 63, 120); 
    for (var y = 20; y <= height-20; y += 100) {
    for (var x = 20; x <= width-20; x += 100) {
    ellipse(x, y, 4, 4);
    // Draw a line to the center of the display
    line(x, y, 0, 0);
    }
    }
 
    //purple circle when move mouse, black circle when mouse pressed
    //moves w/mouse due to mouseX,mouseY
    if (mouseIsPressed) {
    fill(0);
    } 
    else {
    fill(204, 21, 192, 127);
    }
    ellipse(mouseX, mouseY, 80, 80);

    //changes blue to purple ellipse, no movement w/mouse cuz no mouseX,mouseY
    if (mouseIsPressed) {
    fill(155,150,190,147);
    } else {
    fill(0, 155, 255,97);
    }
    //ellipse(width / 2, 250, 100, 600);
    ellipse(450, 250, 100, 600);
    
    // A design for a simple flower 
    fill(204, 101, 192, 147);
    stroke(127, 63, 120);
    translate(500, 200);
    noStroke();
    for (var i = 0; i < 10; i ++) {
    rotate(mouseX / 100.0); //makes it spin  
    ellipse(0, 30, 20, 80);
    rotate(PI/5);//gives it flower shape
    }
    
    //from book, vertical lines that go over each other   
    stroke(225, 163, 120);
    line(0, 0, mouseX, height); // Purple line
    stroke(0,0,255);
    var mx = mouseX/2 + 10;
    line(0, 0, mx, height); // Blue line
    translate(mouseX, mouseY); 

}