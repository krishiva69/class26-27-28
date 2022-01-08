class Chain {
constructor(bodyA, bodyB){
var options = {
bodyA: bodyA,
bodyB: bodyB,
length: 10,
stiffness: .04
}

this.chain = Constraint.create(options);
World.add(world, this.chain)
}










display(){
var p = this.chain.bodyA.position;
var n = this.chain.bodyB.position;
strokeWeight(4);
line(p.x, p.y, n.x, n.y);
}
}
