var f = 0;

function setup() {
    createCanvas(800, 800);   
}

function draw() {
    background(0);
    
    //moon at top left
    fill(255, 204, 229, 197);
    stroke(255);
    ellipse(0,0,150,150);
    
    //moving pink flower (instead of her red bus)
    push();
    translate(f, 200);//changed from 0 to 300, I put 200
    fill(204, 21, 192, 97);
    //translate(580, 200); she deleted this
    noStroke();
    for (var i = 0; i < 10; i ++) {//makes ellipse into flower shape
    ellipse(20, 130, 20, 380);
    rotate(PI/5);
    }
    if (f < width + 300) {//she changed from 25 to 300
        f++;
    } else {
        f = -300;//she changed from -250 to -300
    }
    pop();
    
    //moving purple flower (instead of her red bus)
    push();
    translate(f, 500);//changed from 0 to 300, I put 500, lowers flower
    fill(104, 21, 242, 57);
    translate(580, 200);//put in to lower it, move to rt 
    noStroke();
    for (var i = 0; i < 10; i ++) {
    ellipse(20, 130, 20, 380);
    rotate(PI/4);
    }
    if (f < width + 300) {//she changed from 25 to 300
        f++;
    } else {
        f = -300;//she changed from -250 to -300
    }
    pop();
    
    //moving blue flower (instead of her red bus)
    push();
    translate(f, 400);//changed from 0 to 300
    fill(40, 21, 242, 37);
    translate(280, 70);//put in to lower it, move to rt 
    noStroke();
    for (var i = 0; i < 10; i ++) {
    ellipse(20, 130, 20, 380);
    rotate(PI/4);
    }
    if (f < width + 300) {//she changed from 25 to 300
        f++;
    } else {
        f = -300;//she changed from -250 to -300
    }
    pop();
 
    //diagonal pink lines w/white tips
    fill(255);
    stroke(127, 63, 120); 
    strokeWeight(1);   
    for (var y = 18; y <= height+18; y += 100) {
    for (var x = 18; x <= width+18; x += 100) {
    ellipse(x, y, 4, 4);
    // Draw a line to the center of the display
    line(x, y, 0, 0);
    }   
    }
 
    //pink circle when move mouse, black circle when mouse pressed
    //moves w/mouse due to mouseX,mouseY
    if (mouseIsPressed) {
    fill(0);
    } 
    else {
    fill(204, 21, 192, 127);
    }
    ellipse(mouseX, mouseY, 40, 40);

    //blue to purple ellipse when mouse pressed, no movement         w/mouse cuz no mouseX,mouseY 
    if (mouseIsPressed) {
    fill(104, 21, 242, 67);//purple when pressed
    } else {
    fill(0, 155, 255,77);//blue normally
    strokeWeight(3); 
    }
    ellipse(500, 250, 20, 550);//instead of 500 can do width/2 but then oval is centered
    
  
    //simple pink flower rotates
    fill(204, 101, 192, 147);
    stroke(127, 63, 120);
    translate(500, 200);
    noStroke();
    for (var i = 0; i < 10; i ++) {
    rotate(mouseX / 100.0); //makes it spin  
    ellipse(0, 30, 20, 80);
    rotate(PI/5);//gives it flower shape
    }
    
    //diag blue/orange lines that spiral,from book
    stroke(0, 155, 255,87); //Blue line
    line(0, 0, mouseX, height); 
    
    stroke(104, 21, 242, 200);//Purple line
    line(0, 0, mouseX + 120, height); 
    
    stroke(225, 163, 120, 200);//Orange line
    line(0, 0, mouseX + 250, height);
    
    stroke(204, 21, 192, 197);// Pink line
    var mx = mouseX/2 + 10;
    line(0, 0, mx, height); 
    translate(mouseX, mouseY);
    
}


