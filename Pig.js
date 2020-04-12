class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,70,50);
    this.image = loadImage("sprites/anvee.png");
    this.Visiblity = 255;
  }

 display(){
  // console.log(this.vi);
   if(this.body.speed < 3){
    super.display();
   }
   else{
     World.remove(world, this.body);

     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
     pop();
     //score++
   }
  
 }


  score(){
    if (this.Visiblity < 0 && this.Visiblity > -50){
      score++
}
 
  }


}
