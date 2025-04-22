
  // 20 x 25
let gridarr1 = [
   
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0],
    [0, 5, 4, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 4, 4, 0, 0],
    [4, 4, 4, 4, 0, 0, 0, 1, 1, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0],
    [0, 4, 4, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 3, 0, 0, 0, 5, 4, 0],
    [0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0, 4, 4, 4, 4],
    [0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0, 0, 4, 4, 0],
    [0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0, 3, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 3, 0, 0, 0, 3, 0, 0],
    [0, 0, 0, 2, 0, 0, 0, 2, 1, 1, 1, 1, 3, 0, 0, 0, 0, 3, 0, 0],
    [0, 0, 2, 0, 0, 0, 0, 0, 2, 1, 1, 3, 0, 0, 0, 0, 3, 0, 0, 0],
    [0, 0, 2, 0, 0, 0, 0, 2, 2, 1, 1, 1, 3, 0, 0, 3, 0, 0, 0, 0],
    [0, 0, 0, 2, 0, 0, 2, 2, 1, 1, 1, 1, 3, 3, 3, 0, 0, 3, 0, 0],
    [0, 0, 0, 0, 2, 2, 0, 2, 1, 1, 1, 1, 1, 3, 0, 0, 0, 3, 0, 0],
    [0, 0, 0, 2, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 3, 3, 3, 0, 0, 0],
    [0, 0, 0, 2, 2, 0, 2, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
    [4, 4, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [4, 4, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 5, 4, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 4, 4, 4, 4, 0],
    [0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0],
    [0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 4, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0]
];

let gridarrTH = [
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 1, 0, 0, 0, 6, 6],
    [0, 0, 0, 0, 0, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 0, 0, 0, 6, 6],
    [0, 0, 0, 0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 6, 6, 0],
    [0, 0, 0, 0, 0, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 6, 6, 6, 0],
    [0, 0, 0, 0, 0, 3, 3, 4, 5, 4, 3, 3, 3, 3, 3, 4, 5, 4, 3, 1, 0, 6, 6, 6, 0],
    [0, 0, 0, 0, 0, 3, 4, 4, 5, 4, 4, 3, 3, 3, 4, 4, 5, 4, 4, 3, 0, 0, 6, 6, 6],
    [0, 0, 0, 0, 0, 3, 3, 4, 5, 4, 3, 3, 3, 3, 3, 4, 5, 4, 3, 3, 0, 0, 6, 6, 6],
    [0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 6, 6, 6],
    [0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 6, 6],
    [0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 4, 3, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 6, 6],
    [0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 6, 6],
    [0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 3, 3, 3, 3, 6, 6],
    [0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 3, 3, 6, 6],
    [0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 3, 3, 6, 6],
    [0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 3, 3, 6, 6],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
    // 20 x 25
let textarr = [
    ["ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean"],
    ["ocean", "ocean", "ocean", "big", "big", "big", "big", "big", "ocean", "ocean", "big", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean"],
    ["ocean", "big", "big", "me", "me", "me", "me", "me", "big", "ocean", "big", "big", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean"],
    ["ocean", "me", "me", "me", "me", "me", "me", "me", "big", "ocean", "ocean", "ocean", "big", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean"],
    ["me", "me", "me", "me", "me", "me", "me", "me", "me", "big", "ocean", "ocean", "big", "ocean", "ocean", "ocean", "ocean", "big", "big", "ocean"],
    ["me", "me", "me", "me", "me", "me", "me", "me", "me", "big", "ocean", "ocean", "big", "ocean", "ocean", "ocean", "big", "ocean", "ocean", "ocean"],
    ["me", "me", "me", "me", "me", "me", "me", "me", "me", "me", "big", "big", "ocean", "big", "big", "ocean", "big", "ocean", "ocean", "ocean"],
    ["me", "me", "me", "me", "me", "me", "me", "me", "me", "me", "big", "ocean", "ocean", "big", "ocean", "big", "ocean", "ocean", "ocean", "ocean"],
    ["boom", "me", "me", "me", "me", "me", "me", "me", "me", "me", "me", "big", "big", "ocean", "ocean", "ocean", "ocean", "big", "big", "ocean"],
    ["ocean", "boom", "boom", "me", "me", "me", "me", "me", "me", "me", "me", "big", "ocean", "ocean", "ocean", "big", "big", "ocean", "ocean", "big"],
    ["ocean", "ocean", "ocean", "boom", "me", "me", "me", "me", "me", "me", "me", "me", "big", "ocean", "big", "ocean", "ocean", "ocean", "ocean", "ocean"],
    ["ocean", "ocean", "ocean", "ocean", "boom", "me", "boom", "me", "me", "me", "me", "me", "me", "big", "big", "ocean", "ocean", "ocean", "me", "me"],
    ["boom", "boom", "boom", "ocean", "ocean", "boom", "ocean", "boom", "me", "me", "me", "me", "me", "me", "me", "ocean", "ocean", "me", "ocean", "ocean"],
    ["boom", "ocean", "boom", "ocean", "boom", "ocean", "boom", "ocean", "boom", "boom", "ocean", "me", "ocean", "ocean", "me", "ocean", "ocean", "me", "ocean", "ocean"],
    ["ocean", "ocean", "boom", "boom", "boom", "boom", "ocean", "boom", "ocean", "ocean", "ocean", "me", "ocean", "ocean", "ocean", "me", "me", "ocean", "ocean", "ocean"],
    ["ocean", "ocean", "ocean", "ocean", "ocean", "boom", "ocean", "boom", "ocean", "ocean", "ocean", "ocean", "me", "me", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean"],
    ["ocean", "ocean", "ocean", "ocean", "boom", "ocean", "ocean", "ocean", "boom", "ocean", "ocean", "ocean", "ocean", "me", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean"],
    ["ocean", "ocean", "ocean", "boom", "ocean", "ocean", "ocean", "ocean", "ocean", "boom", "boom", "ocean", "ocean", "ocean", "me", "ocean", "ocean", "ocean", "ocean", "ocean"],
    ["ocean", "ocean", "ocean", "boom", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "boom", "ocean", "ocean", "ocean", "ocean", "me", "ocean", "ocean", "ocean", "ocean"],
    ["ocean", "ocean", "ocean", "ocean", "boom", "ocean", "ocean", "ocean", "ocean", "ocean", "boom", "ocean", "ocean", "ocean", "ocean", "me", "ocean", "ocean", "ocean", "ocean"],
    ["ocean", "ocean", "ocean", "ocean", "ocean", "boom", "ocean", "ocean", "ocean", "boom", "ocean", "ocean", "ocean", "me", "me", "ocean", "ocean", "ocean", "ocean", "ocean"],
    ["ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "boom", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean"],
    ["ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean"],
    ["ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean"],
    ["ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean", "ocean"]
];

let seanYtextarr = [
    ["plate", "plate", "plate", "plate", "plate", "plate", "plate", "plate", "plate", "plate", "plate", "plate", "plate", "plate", "plate", "plate", "plate","plate", "plate", "plate", "plate", "plate", "plate","plate", "plate",],
    ["plate", "plate", "plate", "plate", "plate", "plate", "plate", "plate", "plate", "plate", "plate", "plate", "plate", "plate", "plate", "plate", "plate","plate", "plate", "plate", "plate", "plate", "plate","plate", "plate",],
    ["plate", "plate", "plate", "plate", "plate", "plate", "plate", "plate", "plate", "plate", "plate", "plate", "plate", "plate", "plate", "plate", "plate","plate", "plate", "plate", "plate", "plate", "plate","plate", "plate",],
    ["plate", "plate", "plate", "plate", "plate", "plate", "plate", "plate", "plate", "plate", "plate", "plate", "plate", "plate", "plate", "plate", "plate","plate", "plate", "plate", "plate", "plate", "plate","plate", "plate",],
    ["plate", "plate", "plate", "plate", "plate", "plate","plate", "plate", "plate", "plate","plate", "plate", "soup", "plate", "plate","plate", "plate","plate", "plate","plate", "plate", "plate", "plate","plate", "plate",],
    ["plate", "plate", "plate", "plate", "plate", "plate","plate", "plate", "plate", "plate","plate", "plate", "soup", "plate", "plate","plate", "plate","plate", "plate","plate", "plate", "plate", "plate","plate", "plate",],
    ["plate", "plate", "plate", "plate", "plate", "plate","plate", "plate", "plate", "plate","plate","sushi", "sushi", "sushi", "plate", "plate", "plate", "plate", "plate", "plate","plate", "plate", "plate", "plate","plate",],
    ["plate", "plate", "plate", "plate", "plate", "plate","plate", "plate","plate", "plate", "sushi", "sushi", "sushi", "sushi", "sushi", "plate", "plate", "plate", "plate","plate", "plate","plate", "plate","plate", "plate",],
    ["plate", "plate", "plate", "plate", "plate", "plate", "plate", "plate", "plate", "sushi", "void", "[blank]", "sushi", "void", "[blank]", "sushi", "plate", "plate", "plate", "plate", "plate", "plate", "plate", "plate", "plate",],
    ["plate","plate", "plate", "plate", "plate", "plate", "plate","plate", "plate", "sushi", "void", "void", "sushi", "void", "void", "sushi", "plate", "plate","plate", "plate", "plate", "plate", "plate", "plate", "plate",],
    ["plate", "plate","plate", "plate", "plate", "jazz-hands", "plate", "plate", "plate", "sushi", "sushi", "sushi", "sushi", "sushi", "sushi", "sushi","plate", "plate", "plate", "jazz-hands", "plate", "plate", "plate", "plate", "plate",],
    ["plate", "plate", "plate", "plate","plate", "plate", "filet", "plate", "plate", "plate", "plate", "sushi", "sushi", "sushi", "plate", "plate", "plate", "plate","filet", "plate", "plate", "plate", "plate","plate", "plate",],
    ["plate", "plate", "plate", "plate", "plate", "plate", "plate", "filet", "plate", "plate", "sushi", "tooth", "sushi", "tooth", "sushi", "plate", "plate","filet", "plate", "plate", "plate", "plate", "plate", "plate", "plate",],
    ["plate", "plate", "plate", "plate", "plate", "plate", "plate", "plate", "filet", "wrapper", "wrapper", "tooth", "wrapper", "tooth", "wrapper", "wrapper", "filet", "plate", "plate", "plate", "plate", "plate", "plate","plate", "plate",],
    ["plate", "plate", "plate", "plate", "plate", "plate", "plate", "plate", "plate", "wrapper", "wrapper", "wrapper","wrapper", "wrapper", "wrapper", "wrapper", "plate", "plate", "plate", "plate", "plate","plate", "plate", "plate", "plate",],
    ["plate", "plate","plate", "plate", "plate", "plate", "plate", "plate", "wrapper", "wrapper", "shiny", "wrapper", "wrapper", "wrapper", "shiny","wrapper", "wrapper", "plate", "plate", "plate", "plate", "plate", "plate", "plate", "plate",],
    ["plate", "plate", "plate", "plate","plate", "plate", "plate", "wrapper", "wrapper", "wrapper","wrapper", "wrapper", "wrapper", "wrapper", "wrapper", "wrapper", "wrapper","wrapper", "plate", "plate", "plate", "plate", "plate", "plate", "plate",],
    ["plate", "plate", "plate", "plate","plate", "plate","plate", "plate", "wrapper", "wrapper", "wrapper", "wrapper", "wrapper", "wrapper", "wrapper", "wrapper", "wrapper", "plate", "plate", "plate", "plate", "plate", "plate", "plate", "plate",],
    ["plate", "plate", "plate", "plate","plate", "plate", "plate", "plate", "plate", "fish", "plate", "plate", "plate","plate", "plate", "fish", "plate", "plate", "plate", "plate", "plate", "plate", "plate", "plate", "plate",],
    ["plate", "plate", "plate", "plate", "plate",  "plate", "plate","plate", "plate", "stick", "plate", "plate","plate", "plate", "plate", "stick", "plate", "plate","plate", "plate", "plate", "plate", "plate", "plate", "plate",],
];


let font1;
let images =[];

let currentPage = 0;

function preload()  {

       font1 = loadFont('assets/oswald.ttf');
       images[0] = loadImage('assets/octopus1.jpg');
       images[1] = loadImage('assets/octopus2.jpg');
       images[2] = loadImage('assets/octopus3.jpg');
       images[3] = loadImage('assets/octopus4.jpg');
       images[4] = loadImage('assets/octopus5.png');
       images[5] = loadImage('assets/octopus6.jpg');
       images[6] = loadImage('assets/purple6.jpg');
       images[7] = loadImage('assets/purple7.jpg');
       images[8] = loadImage('assets/purple8.png');
       images[9] = loadImage('assets/purple9.jpeg');
       images[10] = loadImage('assets/purple10.jpg');
       images[11] = loadImage('assets/purple11.png');
       images[12] = loadImage('assets/purple12.jpg');

}


function setup() {
     createCanvas(1200, 1200);
     background(0);
     fill(100);
     textFont(font1);
     noLoop();
     frameRate(1);
           //2darr, x,y,rot,scale, alpha
   
}

function draw(){ 
background(0);
    if (currentPage == 0) {

    mapToColorShapes(gridarr1, 350, 50, 10, 1.25, 255);
     mapToEmoji(textarr, 150, 50, 10, 1.25, 255);
     mapToColorTextBitMap(textarr, images, 150, 50, -10, 0.75, 175);
     mapToBitMapImages(gridarr1,images, 300, 100, -3, 1.55);
     mapToColorText(textarr, 150, 350, 10, 1.25, 255);
     mapToInvertedColorBubble(gridarr1, 150, 350, 10, 1.25, 255);
    
   
   
     

} else if (currentPage == 1) {

    mapTo3D(gridarr1, 150, 350, 10, 1.25, 255);
    mapToPattern(textarr, 150, 350, 10, 1.25,  255);
    mapToTriangle(gridarr1, 150,  350, 10, 1.25, 255);
    mapTo3DText(textarr, 150, 350, 10, 1.25, 255);
    
} else if (currentPage == 2) {
    mapToEmojiSY(seanYtextarr, 150, 350, 10, 1.25, 255);
    mapTo3DTH(gridarrTH, 150, 350, 10, 1.25, 255);
    push();
    translate(40,50);
    fill(200);
    textSize(20);
    let t = "On the left; Sean Y's text array that I bitmapped with emojis";
    t += "\n";   // this is a command you can put in text to create a line break.
    t += "On the right; Tristan H's grid array that I bitmapped into 3D tiles";
    text(t,0,0,400);

    
    pop();
    }
}

function keyPressed() { 
    if ( key == '1' ) { 
      console.log("Page 0");
      currentPage = 0;

      push();
      translate(100,30);
      fill(200);
      textSize(20);
      let t = "This and example of my 2 arrays , mapped a total of six different ways."
      text(t,0,0,300);  
      pop();

     } else if ( key == '2' ) { 
        console.log("Page 1");
        currentPage = 1;
        
     } else if ( key == '3' ) { 
        console.log("Page 2");
        currentPage = 2;   

     } else if ( key == '4' ) { 
        console.log("Page 3");
        currentPage = 3;   
     } else {
        
        currentPage = 0;

     }
  redraw();
    }

    function mapTo3DTH(arr,) {
    
        let cellSize = 15;
      
        for (let i = 0; i < gridarrTH.length; i++) {
          for (let j = 0; j < gridarrTH[i].length; j++) {
            let value = gridarrTH[i][j];
      
            if (value === 0) {
              fill(37, 9, 86);
            } else if (value === 1) {
              fill(116, 45, 19);
            } else if (value === 2) {
              fill(92, 102, 18);
            } else if (value === 3) {
              fill(121, 23, 37);
            } else if (value === 4) {
              fill(247, 207, 77);
            } else if (value === 5) {
                fill(4, 5, 1);
            } else if (value === 6) {
                fill (51, 16, 13);
            }
    
      
            push();
            translate(j * cellSize + 600, i * cellSize + 50);
            sc 
            rect(0, 0, cellSize, cellSize);
            fill(0);
            quad(0, 0, cellSize, 0, cellSize - 5, -5, -5, -5); 
            fill(100);
            quad(cellSize, 0, cellSize, cellSize, cellSize - 5, cellSize - 5, cellSize - 5, -5); 
            pop();
          }
        }
      }
    


    function mapToEmojiSY(arr, lx, ly, sc) {
        push();
        translate(100,200);
        scale(sc/9);
        textFont("Arial");
     let cellSize = 15; 
       
         for (let i = 0; i < arr.length; i++) {
           for (let j = 0; j < arr[i].length; j++) {
             let value = arr[i][j];
             let emoji = "";
       
            
             if (value === "plate") {
               emoji = "🍽️"; 
             } else if (value === "jazz-hands") {
               emoji = "👐"; 
             } else if (value === "filet") {
               emoji = "🥩"; 
             } else if (value === "wrapper") {
               emoji = "🍬"; 
            } else if (value === "fish") {
                emoji = "🐟"; 
            } else if (value === "stick") {
                emoji = "🍡"; 
            } else if (value === "shiny") {
                emoji = "✨"; 
            } else if (value === "sushi") {
                emoji = "🍣"; 
            } else if (value === "void") {
                emoji = "⬛"; 
            } else if (value === "soup") {
                emoji = "🍜"; 
            } else if (value === "tooth") {
                emoji = "🦷"; 
            } else if (value === "[blank]") {
                emoji = "⬜"; 

             } else {
               emoji = "❓"; 
             }
       
             text(emoji, j * cellSize + cellSize / 2, i * cellSize + cellSize / 5);
           }
         }
         pop();
       }

//textarr
    function mapTo3DText(arr, lx, ly, sc) {
        push();
        translate(700, 100);
        scale(0.65);
      
        let cellSize = 30;
        for (let i = 0; i < arr.length; i++) {
          for (let j = 0; j < arr[i].length; j++) {
            let value = arr[i][j];
      
            if (value === "ocean") {
              fill(0, 0, 255); 
            } else if (value === "big") {
              fill(255, 182, 20); 
            } else if (value === "me") {
              fill(255, 102, 20); 
            } else if (value === "boom") {
              fill(122, 100, 20); 
            } else {
              fill(200); 
            }
    
            beginShape();
            vertex(j * cellSize, i * cellSize); 
            vertex(j * cellSize + cellSize, i * cellSize); 
            vertex(j * cellSize + cellSize, i * cellSize + cellSize); 
            vertex(j * cellSize, i * cellSize + cellSize); 
            endShape(CLOSE);
      
            fill(150); 
            beginShape();
            vertex(j * cellSize, i * cellSize); 
            vertex(j * cellSize + cellSize / 2, i * cellSize + cellSize / 2 - 20); 
            vertex(j * cellSize + cellSize, i * cellSize); 
            endShape(CLOSE);
      
            fill(100); 
            beginShape();
            vertex(j * cellSize + cellSize, i * cellSize); 
            vertex(j * cellSize + cellSize / 2, i * cellSize + cellSize / 2 - 20); 
            vertex(j * cellSize + cellSize, i * cellSize + cellSize); 
            endShape(CLOSE);
      
            fill(50); 
            beginShape();
            vertex(j * cellSize + cellSize, i * cellSize + cellSize); 
            vertex(j * cellSize + cellSize / 2, i * cellSize + cellSize / 2 - 20); 
            vertex(j * cellSize, i * cellSize + cellSize); 
            endShape(CLOSE);
      
            fill(0); 
            textSize(16);
            textAlign(CENTER, CENTER);
            text(value, j * cellSize + cellSize / 2, i * cellSize + cellSize / 2);
          }
        }
        pop();
      }

//gridarr 
    function mapToTriangle(arr, lx, ly, sc) {
        push();
        translate(50, 500);
        scale(1);
      
        let cellSize = 20;
        for (let i = 0; i < arr.length; i++) {
          for (let j = 0; j < arr[i].length; j++) {
            let value = arr[i][j];
            let gradient = map(value, 0, 5, 50, 255); 
            fill(gradient, gradient / 2, gradient / 3); 
      
            triangle(
              j * cellSize, i * cellSize, j * cellSize + cellSize, i * cellSize, j * cellSize + cellSize / 2, i * cellSize + cellSize);
          }
        }
        pop();
      }
    
//gridarr1
function mapToInvertedColorBubble(arr, lx, ly, rot, sc, fade) {
   push();
   translate(450,50);
   scale (sc / 2);
   rotate (rot/1.5);
   
    let cellSize = 20;
  
    for (let i = 0; i < gridarr1.length; i++) {
      for (let j = 0; j < gridarr1[i].length; j++) {
        let value = gridarr1[i][j];
  
        if (value === 0) {
          fill(188, 136, 59);
        } else if (value === 1) {
          fill(133, 216, 180);
        } else if (value === 2) {
          fill(161, 234, 191);
        } else if (value === 3) {
          fill(92, 200, 153);
        } else if (value === 4) {
          fill(109, 74, 23);
        }
  
        
        let size = cellSize + sin(frameCount * 0.1 + i + j) * 5;
        ellipse(j * cellSize + cellSize / 2, i * cellSize + cellSize / 2, size, size);
      }
    }
    pop();
  }

//gridarr1
function mapTo3D() {
    
    let cellSize = 15;
  
    for (let i = 0; i < gridarr1.length; i++) {
      for (let j = 0; j < gridarr1[i].length; j++) {
        let value = gridarr1[i][j];
  
        if (value === 0) {
          fill(67, 119, 196);
        } else if (value === 1) {
          fill(122, 39, 75);
        } else if (value === 2) {
          fill(94, 21, 64);
        } else if (value === 3) {
          fill(163, 55, 102);
        } else if (value === 4) {
          fill(146, 181, 232);
        } else if (value === 5) {
            fill(232, 241, 255);
        }

  
        push();
        translate(j * cellSize + 30, i * cellSize + 50);
        rect(0, 0, cellSize, cellSize);
        fill(150);
        quad(0, 0, cellSize, 0, cellSize - 5, -5, -5, -5); 
        fill(100);
        quad(cellSize, 0, cellSize, cellSize, cellSize - 5, cellSize - 5, cellSize - 5, -5); 
        pop();
      }
    }
  }


  // gridarr1                          
function mapToBitMapImages(arr,imgarr,lx,ly,rot,sc) {
    push();
     translate(lx - 250,ly + 400);
     rotate(radians(rot));
     scale(1.5);
    let nuimg;
     for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
             let value = arr[i][j];
              if ( value == 0 ) {
                nuimg = imgarr[0];
              } else if ( value == 1 ){
                nuimg = imgarr[2];
              } else if ( value == 2 ) {
                nuimg = imgarr[1];
              } else {
                nuimg = imgarr[3];
              }
            image(nuimg, j * 12, i * 12, 14, 14);
        }
    }
    pop();

}


//text arr
function mapToColorText(arr,lx,ly,rot,sc,fade) {
    textSize(10);
    textAlign(CENTER);
    push();
    translate(575,350);
    rotate(radians(rot));
    scale(1.5);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
             let value = arr[i][j];
              if ( value == "bubble" ) {
                  fill(146, 181, 232, fade);
              } else if ( value == "ocean" ){
                  fill(67, 119, 196, fade);
                } else if ( value == "me" ){
                    fill(200,0,30, fade);
                } else if ( value == "boom" ){
                    fill(150,0,30, fade);
                } else if ( value == "big" ){
                    fill(220,0,30, fade);
                } else if ( value == "love" ){
                    fill(232, 241, 255, fade);
              } else {
                  fill(255, fade);
              }
               text(value, j * 20, i * 10,100);
        }
    }
    pop();
}

// textarr
function mapToPattern(arr, lx, ly, sc) {
push();
translate(750,700);
scale(sc/10)


    let cellSize = 20;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        let value = arr[i][j];
  
      
        if (value === "ocean") {
        fill(0);
          rect(j * cellSize, i * cellSize, cellSize, cellSize);
          stroke(255);
          point(j * cellSize + cellSize / 2, i * cellSize + cellSize / 2);

        } else if (value === "big") {
          fill(255, 165, 0);
          rect(j * cellSize, i * cellSize, cellSize, cellSize);
          stroke(0);
          ellipse(j * cellSize + cellSize / 2, i * cellSize + cellSize / 2, cellSize / 2); // Circle pattern
        } else if (value === "me") {
          fill(255, 0, 0);
          rect(j * cellSize, i * cellSize, cellSize, cellSize);
          stroke(255);
          line(j * cellSize, i * cellSize + cellSize / 2, (j + 1) * cellSize, i * cellSize + cellSize / 2); // Horizontal line
        } else if (value === "boom") {
        fill(255,255,0);
        rect(j * cellSize, i * cellSize, cellSize, cellSize);
        stroke(0);
            strokeWeight(1);
        triangle(
            j * cellSize + cellSize / 2, i * cellSize, j * cellSize, i * cellSize + cellSize, j * cellSize + cellSize, i * cellSize + cellSize);
        }
      }
    }
    pop();
  }

  //text arr
function mapToColorTextBitMap(arr, imgarr, lx, ly, rot, sc, fade) {
    textSize(10); 
    textAlign(CENTER, CENTER); 
    push();
    translate(700, 100);
    rotate(radians(rot));
    scale(sc*0.75);
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[0].length; j++) {
        let value = arr[i][j];
        let textBundle = ""; 
        let nuimg;
        let c;
  
        
        if (value == "bubble") {
          nuimg = imgarr[9];
          c = color(255, 100, 0, fade);
          textBundle = "Bubbles!";
        } else if (value == "me") {
          nuimg = imgarr[8];
          c = color(255, 0, 255, fade);
          textBundle = "octoguy";
        } else if (value == "ocean") {
          nuimg = imgarr[7];
          c = color(20, 200, 120, fade);
          textBundle = "Ocean 🌊";
        } else if (value == "love") {
          nuimg = imgarr[10];
          c = color(255, 0, 0, fade);
          textBundle = "Love ❤️";
        } else if (value == "big") {
          nuimg = imgarr[11];
          c = color(0, 0, 255, fade);
          textBundle = "Big 🐋";
        } else if (value == "boom") {
          nuimg = imgarr[12];
          c = color(255, 255, 0, fade);
          textBundle = "Boom 💥";
        } else {
          nuimg = imgarr[6];
          c = color(120, 0, 240, fade);
          textBundle = "Unknown ❓";
        }

        tint(150, fade); 
        image(nuimg, j * 40, i * 20, 30, 15);
        noTint();
        fill(c); 
        text(textBundle, j * 40 + 15, i * 20 + 10); 
      }
    }
    pop();
  }


//textarr
       function mapToEmoji(arr, lx, ly, sc) {
           push();
           translate(500,750);
           scale(sc/17);
           textFont("Arial");
        let cellSize = 30; 
          
            for (let i = 0; i < arr.length; i++) {
              for (let j = 0; j < arr[i].length; j++) {
                let value = arr[i][j];
                let emoji = "";
          
               
                if (value === "ocean") {
                  emoji = "🌊"; 
                } else if (value === "big") {
                  emoji = "🦑"; 
                } else if (value === "me") {
                  emoji = "🐙"; 
                } else if (value === "boom") {
                  emoji = "👾"; 
                } else {
                  emoji = "❓"; 
                }
          
                text(emoji, j * cellSize + cellSize / 4, i * cellSize + cellSize / 3);
              }
            }
            pop();
          }
    
    //gridarr1
function mapToColorShapes(arr,lx,ly,rot,sc,fade) {
    push();
    translate(lx-275,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
             let value = arr[i][j];
              if ( value == 0 ) {
                  fill(67, 119, 196);
                  ellipse(j * 12, i * 12, 10, 10);
              } else if ( value == 1 ){
                  fill(122, 39, 75);
                   rect(j * 12-6, i * 12-6, 10, 10,2);
              } else if ( value == 2 ) {
                  fill(94, 21, 64);
                   ellipse(j * 12, i * 12, 15, 10,5);
              } else if ( value == 3 ) {
                 fill(163, 55, 102);
                 ellipse(j * 12, i * 12, 15, 10,5);
              }else if ( value == 4 ) {
                 fill(146, 181, 232);
                 ellipse(j * 12, i * 12, 15, 10,5);}
                else if ( value == 5 ) {    
                    fill(232, 241, 255);
                    ellipse(j * 12, i * 12, 15, 10,5);}
        }
    }
    pop();
}