
/* does the required action */



function Drop() {
  /*  declaring the position of the rain drop
      random gives random positions for it to look like a scattered rain, 
      specifying the boundaries for random gives random values in that specified
      length*/

  this.x = random(width);
  this.y = random(-500, -50);
  this.z = random(0, 20);
  this.len = map(this.z, 0, 20, 10, 20);
  this.yspeed = map(this.z, 0, 20, 1, 20);


  /* gives the free falling to the drop*/
  this.fall = function() {
    this.y = this.y + this.yspeed;
    var grav = map(this.z, 0, 20, 0, 0.2);
    this.yspeed = this.yspeed + grav;



/* if the rain drop exceeds the bottom of canvas
then its taken back to its original position*/
    if (this.y > height) {
      this.y = random(-200, -100);
      this.yspeed = map(this.z, 0, 20, 4, 10);
    }
  }

  this.show = function() {
    var thick = map(this.z, 0, 20, 1, 3);
    strokeWeight(thick);
    /*colour of the drop*/
    stroke(255,255,255);
    /* this will be our rain drop */
    line(this.x, this.y, this.x, this.y+this.len);
     
  }
}
