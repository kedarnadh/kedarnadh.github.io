/*creating the objects required*/

/*P5 js will have two functions namely setup() and draw()*/


/*declaring the drops as an undefines array*/
var drops = [];


/* the setup functions setsup the environment */
function setup() {

  /* creating the canvas for the deployment to take place */
  createCanvas(windowWidth,windowHeight);

  /* we are fixing the rain the drops to 500 */
  for (var i = 0; i < 500; i++) {
    drops[i] = new Drop();
  }
}


/* the draw function the gets the action going */
function draw() {

  /*setting up a background colour*/
  background(30,144,255);
  for (var i = 0; i < drops.length; i++) {
    /* functions that are defined in the Drop.js */
    drops[i].fall();
    drops[i].show();
  }
  

  /* defining the size of text thats to be displayed */
  textSize(80);
    textFont("Comic Sans MS");
      fill(255);


  /* text thats to be displayed */
  text(" Built with P5 JS", 330, 325);
  

  
   
}
  
