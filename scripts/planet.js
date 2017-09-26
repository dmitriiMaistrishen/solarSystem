function Planet(name, star){
	Dot.call(this);
	this.name = name;
	this.star = star;
	this.GRAV_CONST = 6.674e-11; /*also need radius in meters, mass in kg and deltaT in seconds*/
}

Planet.prototype = inherit(Dot.prototype);
Planet.prototype.constructor = Planet;

Planet.prototype.setName = function(name){
	this.name = name;
}

Planet.prototype.getOmega = function(){
	return Math.sqrt(this.GRAV_CONST*this.star.starMass/Math.pow(this.radius, 3));
}

Planet.prototype.moove = function(){
		var deltaT = 50000000; 
		this.phi += deltaT*this.getOmega();
		var phi = this.phi;
		if (phi*Math.PI/180 >= 2*Math.PI){
			phi = 0;
		}
		this.phi = phi;
}

/*Planet.prototype.rotate = function(timeMultiplicator){
	if(!timeMultiplicator){timeMultiplicator = 1;}
	var me = this;
	setInterval(function(){	
		var deltaT = 1*timeMultiplicator; 
		me.phi += deltaT*me.getOmega();
		var phi = me.phi;
		if (phi >= 2*Math.PI){
			phi = 0;
		}
		me.phi = phi;
		console.log(me.phi);
	}, 1000);
}*/
