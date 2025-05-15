
// This contains the use of both the Sounds and Scenemanager libraries

let wood, snd1;
let opi;






function preload() {
    snd1 = loadSound("assets/beat.mp3");
  wood = loadSound("assets/wood.mp3");
  opi = loadImage("assets/octo.png");
  backgroundImage = loadImage("assets/logo3.png");
  imageC = loadImage("assets/C.png");
  imageD = loadImage("assets/D.png");
  imageE = loadImage("assets/E.png");
  imageO = loadImage("assets/O.png");
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
 
  
}


// define your p5.play sprites as global objects first.
var ghosty;


// global manager object
var mgr;


function setup() {
    createCanvas(800, 800);
  //  console.log(hell);

     mgr = new SceneManager();
    // Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.
    mgr.addScene (terminalScene);
    mgr.addScene (mainScene);
    //mgr.showScene (mainScene);
   // mgr.addScene (scene3);
   // mgr.addScene (theend);
    mgr.showNextScene();

}

function draw() {
    // pass the current draw function into the SceneManager
    mgr.draw();
}

// function mousePressed()
// {
//    // pass the mousePressed message into the SceneManager
//   mgr.mousePressed();
// }


// function mouseDragged()
// {
//    // pass the mouseMoved message into the SceneManager
//     mgr.handleEvent("mouseDragged");
// }

function keyPressed() {
    mgr.handleEvent("keyPressed");
    // You can optionaly handle the key press at global level...
    switch(key)
    {
        case '1':
            mgr.showScene( terminalScene );
            break;
        case '2':
            mgr.showScene( mainScene );
            break;
        case '3':
            mgr.showScene( scene3 );
            break;
        case '4':
            mgr.showScene( scene3 );
            break;
        case '5':
            mgr.showScene( scene3 );
            break;
         case '6':
            mgr.showScene( theend );
            break;
    }

    // ... then dispatch via the SceneManager.
 
}
