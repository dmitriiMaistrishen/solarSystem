function Dot(){
	this.radius = 1; /*in pixels*/
	this.phi = 0; /*degree*/
}

Dot.prototype = {
	constructor: Dot,
	
	setCenterX: function(centerX){
	this.centerX = centerX;
	},
	
	setCenterY: function(centerY){
	this.centerY = centerY;
	},

	setRadius: function(radius){
	this.radius = radius;
	},
	
	setPhi: function(phi){
	this.phi = phi; 
	},

	getX: function(){
	return this.centerX + this.radius*Math.cos(this.phi*Math.PI/180);
	},
	
	getY: function(){
	return this.centerY + this.radius*Math.sin(this.phi*Math.PI/180);
	},
}