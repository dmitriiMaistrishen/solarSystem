function inherit(p){
	if (p == null) throw TypeError();
	if (Object.create)
		return Object.create(p);
	var t = typeof p;
	if (t !== "object" && t !== "function") throw TypeError();
	function f() {};
	f.prototype = p;
	return new f();
}

function createBack(name, imagePath){
	var newBackground = document.createElement("div");
	document.getElementsByTagName("body")[0].appendChild(newBackground);
	newBackground.id = name;
	newBackground.style.backgroundColor = "black";
	newBackground.style.width = window.innerWidth + "px";
	newBackground.style.height = window.innerHeight + "px";
	newBackground.style.backgroundImage = "url(" + imagePath +")";
	return newBackground;
}

function createStar(back, name, mass, centerX, centerY, imagePath){
	var newStar = document.createElement("div");
	back.appendChild(newStar);
	newStar.id = name;
	
	var img = document.createElement("img");
	img.src = imagePath;
	newStar.appendChild(img);
	var bias = 50;
	
	newStar.style.position = "absolute";
	newStar.style.left = centerX - bias + "px";
	newStar.style.top = centerY - bias + "px";
	
	var starModel = new Star(name, mass);
	return starModel;
}

var planets = [];
var planetModels = [];

function createPlanet(back, name, star, radius, centerX, centerY, imagePath){
	var newPlanet = document.createElement("div");
	back.appendChild(newPlanet);
	newPlanet.id = name;
	
	var img = document.createElement("img");
	img.src = imagePath;
	newPlanet.appendChild(img);
	var bias = 25;
	
	newPlanet.style.position = "absolute";
	newPlanet.style.left = centerX - bias + "px";
	newPlanet.style.top = centerY - bias + "px";
	
	planets.push(newPlanet);
	
	var planetModel = new Planet(name, star);
	planetModel.setRadius(radius);
	planetModel.setCenterX(centerX);
	planetModel.setCenterY(centerY);
	
	planetModels.push(planetModel);
	
	return planetModel;
}

function createLink(elemName, textLink){
	if(typeof textLink != "string"){throw new Error("textLink should be string!");}
	if(typeof elemName != "string"){throw new Error("elemName should be string!");}
	var newLink = document.createElement("a");
	document.getElementById(elemName).parentNode.appendChild(newLink);
	newLink.href = textLink;
	newLink.appendChild(document.getElementById(elemName));
}

function rotate(){
	if(planets.length != planetModels.length){throw new Error("planets.length != planetModels.length !");}
	for(var i = 0; i < planets.length; i++){
		planetModels[i].moove();
		planets[i].style.left = Math.floor(planetModels[i].getX()) - /*parseInt(window.getComputedStyle(planets[i]).width)/2*/25 + "px";
		planets[i].style.top = Math.floor(planetModels[i].getY()) - /*parseInt(window.getComputedStyle(planets[i]).height)/2*/25 + "px";
		
		/*if((planetModels[i].getX() > parseInt(window.innerWidth))||(planetModels[i].getY() > parseInt(window.innerHeight))){
			planets[i].style.display = "none";
		} else{
			planets[i].style.display = "block";
		}*/
	}
	setTimeout(rotate, 10); 
}

function orbitCalculator(){
	var width = window.innerWidth;
	var height = window.innerHeight;

	var maxR = Math.min(width, height)/2;
	
	var orbits = [];
	for(var i = 0; i < 6; i++){
		orbits[i] = (i+1)*maxR/3 - 50;
	}

	return orbits;
}
