
let alien1;
let alienarr;

function setup() {
  createCanvas(500, 500);
  background(20);
  alien1 = new SCifalienandstrong (1, width / 2, height / 2, 0, 1);

  alienarr = new Array (25);

  for (let i = 0; i < alienarr.length; i++) {
    alienarr[i] = new SCifalienandstrong (1, random(width), random(height), random(TWO_PI), 0.5);
  }
}

function draw() {
  background(20);
  alien1.display();

  for (let i = 0; i < alienarr.length; i++) {
    alienarr[i].update();
    alienarr[i].display();

    if (alienarr[i].showText) {
      alienarr[i].displayText();
    }
   }
}

function keyPressed() {
  if ( key == ' ') {
      for (let i = 0; i < alienarr.length; i++) {
       alienarr[i].glitch = !alienarr[i].glitch;   
       alienarr[i].showText = !alienarr[i].showText;

      }

       }

       if  (key == 'T' || key == 't') {
        for (let i = 0; i < alienarr.length; i++) {
          alienarr[i].isTiny = !alienarr[i].isTiny;

        }
      // if(alienarr[i].glitch) {
        //alienarr[i].randomizeColor();
       //} else {
       // alienarr[i].revertColor();
      // }
       }

     } 
  


class SCifalienandstrong {
  constructor(k, lx, ly, rot, sc) {
    this.k = k;
    this.lx = lx;
    this.ly = ly;
    this.rot = rot;
    this.sc = sc;
    this.vx = random (-2,2);
    this.vy = random (-2,2);
    this.rotationSpeed = random (-0.09, 0.09)
    this.glitch = false; 
    this.isTiny = false;
    this.showText = false;
    this.color = color(0, 255, 0)
    this.originalColor = this.color;
  }


update(){
  this.lx += this.vx;
  this.ly += this.vy;
  this.rot += this.rotationSpeed;

  if (this.lx > width ||this.lx < 0) {
    this.vx *= -1;
  }
  if (this.ly > height || this.ly < 0) {
    this.vy *= -1;
  }
  if (this.glitch) {
    this.lx += random(-10,10);
    this.ly += random(-10,10);
    this.rot += random (-0.1,0.1);

    this.color = color(random(255), random(255), random(255)); 
  } else {
    this.color = this.originalColor; 
 }

if (this.isTiny) {
  this.sc = 0.2;
} else {
  this.sc = 0.5;
  }
}

  display() {
    push(); 
    translate(this.lx, this.ly); 
    rotate(this.rot);
    scale(this.sc); 

    this.body();
    this.head(0, -75); 
    this.eyes(-20, -90, 20, -90); 
    this.antennae(-30, -110, 30, -110); 
    this.arm(-60, -25);
    this.arm(40, -25);
    this.boots(-30, 75);
    this.boots(30, 75);
    pop();
  }

  body() {
    push();
    fill(this.color);
    ellipse(0, 0, 100 * this.k, 150 * this.k); 

   
    fill(0, 200, 0);
    for (let i = 20; i <= 70; i += 15) {
      ellipse(10, i * this.k, 20 * this.k, 10 * this.k);
      ellipse(-10, i * this.k, 20 * this.k, 10 * this.k); 
    }

    pop();
  }

  head(x, y) {
    push();
    fill(this.color);
    ellipse(x, y, 80 * this.k, 80 * this.k); 

  
    noFill();
    stroke(0);
    strokeWeight(2);
    arc(x, y + 10 * this.k, 50 * this.k, 30 * this.k, 0, PI); 

    pop();
  }

  eyes(x1, y1, x2, y2) {
    push();
    fill(255);
    ellipse(x1, y1, 20 * this.k, 20 * this.k); 
    ellipse(x2, y2, 20 * this.k, 20 * this.k); 
    fill(0);
    ellipse(x1, y1, 10 * this.k, 10 * this.k); 
    ellipse(x2, y2, 10 * this.k, 10 * this.k); 
    pop();
  }

  antennae(x1, y1, x2, y2) {
    push();
    stroke(this.color);
    line(x1, y1, x1 + 10 * this.k, y1 - 30 * this.k); 
    line(x2, y2, x2 - 10 * this.k, y2 - 30 * this.k); 
    noStroke();
    fill(this.color);
    ellipse(x1 + 10 * this.k, y1 - 30 * this.k, 10 * this.k, 10 * this.k); 
    ellipse(x2 - 10 * this.k, y2 - 30 * this.k, 10 * this.k, 10 * this.k); 
    pop();
  }

  arm(x, y) {
    push();
    fill(this.color);
    rect(x, y, 20 * this.k, 70 * this.k); 

  
    fill(0, 200, 0);
    ellipse(x + 10 * this.k, y + 20 * this.k, 35 * this.k, 45 * this.k);
    ellipse(x + 10 * this.k, y + 50 * this.k, 25 * this.k, 45 * this.k); 

   
    fill(this.color);
    ellipse(x + 10 * this.k, y + 85 * this.k, 30 * this.k, 30 * this.k); 

    pop();
  }

  boots(x, y) {
    push();
    fill("yellow"); 
    rect(x - 10 * this.k, y - 15, 20 * this.k, 35 * this.k);
    
    fill("brown");
  rect(x - 12 * this.k, y + 20, 24 * this.k, 8 * this.k); // Sole of the boot

    pop();
  }

  displayText() {
    push();
    fill(0, 255, 0); 
    textSize(16);
    textAlign(CENTER);
    text("We Are One", this.lx, this.ly - 100);
    pop();
  }

}
