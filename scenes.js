
// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================

// exmample of global var that can be used between scenes
let loy = 0;
let backgroundImage; 
let imageC, imageO, imageD, imageE, 
    imageA, imageB, imageF, imageG, 
    imageH, imageI, imageJ, imageK, 
    imageL, imageM, imageN, imageP, 
    imageQ, imageR, imageS, imageT, 
    imageU, imageV, imageW, imageX, 
    imageY, imageZ;
  

////////////////////////////// 1 /////////////////
function terminalScene() {
  let userInput = ""; 
  let correctPhrase = "A101"; 
  let boxX, boxY, boxWidth, boxHeight; 


 this.preload = function () { 
  backgroundImage = loadImage("assets/logo3.png");
  imageA = loadImage ("assets/A.png");
  imageB = loadImage ("assets/B.png");
  imageC = loadImage("assets/C.png");
  imageD = loadImage("assets/D.png");
  imageE = loadImage("assets/E.png");
  imageF = loadImage("assets/F.png");
  imageG = loadImage("assets/G.png");
  imageH = loadImage("assets/H.png");
  imageI = loadImage("assets/I.png");
  imageJ = loadImage("assets/J.png");
  imageK = loadImage("assets/K.png");
  imageL = loadImage("assets/L.png");
  imageM = loadImage("assets/M.png"); 
  imageN = loadImage("assets/N.png");
  imageO = loadImage("assets/O.png");
  imageP = loadImage("assets/P.png");
  imageQ = loadImage("assets/Q.png");
  imageR = loadImage("assets/R.png");
  imageS = loadImage("assets/S.png");
  imageT = loadImage("assets/T.png");
  imageU = loadImage("assets/U.png");
  imageV = loadImage("assets/V.png");
  imageW = loadImage("assets/W.png");
  imageX = loadImage("assets/X.png");
  imageY = loadImage("assets/Y.png");
  imageZ = loadImage("assets/Z.png");

  
  
  console.log("Images loaded:", backgroundImage); // Debugging
};

  this.setup = function () {
    background(0);
    console.log("We are at the terminal scene");

    
    boxX = width / 2 - 150;
    boxY = height / 2 - 50;
    boxWidth = 300;
    boxHeight = 50;
  };

  this.draw = function () {
//logo//
   if (backgroundImage) { 
    image(backgroundImage, 150, -25, width/3 + 225, height/3 + 100);
   } else {
    background(0);
   }

   if (imageC) {
    image(imageC, 280, 290, 50, 50); // Draw image C at (100, 300) with size 50x50
  }
  if (imageO) {
    image(imageO, 340, 290, 50, 50); // Draw image O at (160, 300) with size 50x50
  }
  if (imageD) {
    image(imageD, 400, 290, 50, 50); // Draw image D at (220, 300) with size 50x50
  }
  if (imageE) {
    image(imageE, 460, 290, 50, 50); // Draw image E at (280, 300) with size 50x50
  }
   

  //post-it note//
  push();
  translate(700, 200);
  rotate(1);
  scale(2);

  let startColor = color(250, 234, 5); // Yellow
  let endColor = color(255, 180, 0);   // Orange
  let rectWidth = 100;
  let rectHeight = 100;

  noStroke();
  for (let y = 0; y < rectHeight; y++) {
    let inter = map(y, 0, rectHeight, 0, 1); 
    let c = lerpColor(startColor, endColor, inter); 
    fill(c);
    rect(100, 100 + y, rectWidth, 1); 
  }
  pop();

   //post-it note fold//
   push();
   translate(515,680);
   fill(0);
   noStroke();
   rect(50,50,50);
   pop();

//post-it note text//
   push();
   fill(0);
   stroke(0);
   rotate(-0.5);
   scale(0.75);
textSize(24);
textAlign(CENTER,CENTER);
   text("password: A101", 320, 1050);
   pop();

   
    noFill();
    stroke(0, 255, 0); 
    strokeWeight(2);
    rect(boxX, boxY, boxWidth, boxHeight);

   
    fill(0, 255, 0); 
    textAlign(LEFT, CENTER);
    textSize(20);
    text(userInput, boxX + 10, boxY + boxHeight / 2); 
  };

  this.keyPressed = function () {
    if (keyCode === BACKSPACE) {
      // Remove the last character from the user input string on backspace
      if (userInput.length > 0) {
        userInput = userInput.slice(0, -1);
      }

    } else if (keyCode === ENTER) {
      // Check if the user input matches the correct phrase
      if (userInput === correctPhrase) {
        console.log("Correct phrase entered! Transitioning to the next scene...");
        this.sceneManager.showNextScene(); // Transition to the next scene
      } else {
        console.log("Incorrect phrase. Try again.");
      }
    } else if (key.length === 1 && keyCode !== SHIFT) {
      // Add the typed character to the user input string
      userInput += key;
    }
  };
}


///////////////////////  2  ////////////////////////

function mainScene()  {
let images = [];
let keyToImage = {};
let lineY; 
let a, b, c, d, 
      e, f, g, h, 
      i, j, k, l, 
      m, n, o, p, 
      q, r, s, t, 
      u, v, w, x, 
      y, z;


this.preload = function () {
  console.log("preload() called in mainScene");
  
  keyToImage = {
  a: loadImage("assets/A.png"),
  b: loadImage("assets/B.png"),
  c: loadImage("assets/C.png"),
  d: loadImage("assets/D.png"),
  e: loadImage("assets/E.png"),
  f: loadImage("assets/F.png"),
  g: loadImage("assets/G.png"),
  h: loadImage("assets/H.png"),
  i: loadImage("assets/I.png"),
  j: loadImage("assets/J.png"),
  k: loadImage("assets/K.png"),
  l: loadImage("assets/L.png"),
  m: loadImage("assets/M.png"), 
  n: loadImage("assets/N.png"),
  o: loadImage("assets/O.png"),
  p: loadImage("assets/P.png"),
  q: loadImage("assets/Q.png"),
  r: loadImage("assets/R.png"),
  s: loadImage("assets/S.png"),
  t: loadImage("assets/T.png"),
  u: loadImage("assets/U.png"),
  v: loadImage("assets/V.png"),
  w: loadImage("assets/W.png"),
  x: loadImage("assets/X.png"),
  y: loadImage("assets/Y.png"),
  z: loadImage("assets/Z.png"),
  };
  console.log("Loaded images:", keyToImage);
};

  this.setup = function() {
      background(0);
      console.log("We are at setup for mainScene");

      lineY = height / 4;
  };

    this.draw = function() {
      background(0);
      noStroke();

      //Line
      stroke(255); 
      strokeWeight(2); 
      line (0, lineY, width, lineY);

      let x = 50 
      
      for (let img of images) { 
        if (img) {
          image(img, x, lineY - 100, 50, 50); 
          x += 60;
        }
      }
    };
    
  this.keyPressed = function() {
    let keyLower = key.toLowerCase(); 
    if (keyToImage[keyLower]) {
    images.push(keyToImage[keyLower]);
    console.log("added image for  key:", keyLower);
    } else {
      console.log("No imagemapped for key:", keyLower);
      }
  };
}


////////////////////////////// 3 /////////////////

function scene3() {

  let loy= 255;

    this.setup = function()  {
        console.log("We are at setup for scene3");


    }

    this.enter = function()  {
        let loy= 255;
       
        console.log("We are entering scene3");
        snd1.stop(); // stop the sound so we can have it start again when we return.
        wood.play();
    }




    this.draw = function() {
      background(100,0,255-loy);
      textAlign(CENTER);
      textSize(35);
      text("Help", 90, 70);
      textSize(29);

        push();
      
        translate(width/2,loy*3);
        image(opi, -160,0);
        fill(255);
        translate(0,loy*.90);
        text("Wiggle the mouse to get their attention...", 0, 100);
        text("Click the mouse or hit 'H' to go back.", 0, 150);

        if (loy < 0) {
          loy = 255;
        } else {
          loy-=.45;
        }
        //
        pop();

    }

    this.mousePressed = function()  {

      mgr.showScene( scene2 );
    }



    // this.keyPressed = function()  {
    //
    //       switch(key)
    //       {
    //           case 'h':
    //               mgr.showScene( scene2 );
    //           break;
    //           // case '2':
    //           //     mgr.showScene( scene2 );
    //           //     break;
    //           // case '3':
    //           //     mgr.showScene( scene3 );
    //           default:
    //           mgr.showScene( scene1 );
    //
    //       }
    //
    //       // ... then dispatch via the SceneManager.
    //
    //   }

}




function theend() {

  this.setup = function()  {
      console.log("we are setting up on the result scene");
  }

  this.enter = function() {
     console.log("we are entering the result scene");

  }

 this.draw = function() {
   background(255,0,0);
   text("the result",width/2,height/2);

 }


}
