class Drop {
 constructor(x,y,r){
    var options={
        isStatic:false,
        restitution:0.3,
        friction:0.1,
        density:0.2,
 }
 this.x = x;
 this.y = y;
 this.r = r;
 this.body=Bodies.circle(this.x, this.y, 5, options);
 World.add(world,this.body);

}

display(){
  var paperpos=this.body.position;		

  push()
  translate(paperpos.x, paperpos.y);
  rectMode(CENTER);
  strokeWeight(0);
  fill(6,75,123);
  ellipse(0,0,5);
  pop();

if(this.body.position.y > height){
    
    Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
}


}

}