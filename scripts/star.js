function Star(name,mass){
	Dot.call(this);
	this.name = name;
	this.starMass = mass;
}

Star.prototype = inherit(Dot.prototype);
Star.prototype.constructor = Star;

Star.prototype.setName = function(name){
	this.name = name;
} 

Star.prototype.setStarMass = function(mass){
	this.starMass = mass;
}