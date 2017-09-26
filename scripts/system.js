;(function(){
	
	var centerX = parseInt(window.innerWidth)/2;
	var centerY = parseInt(window.innerHeight)/2;
	
	//var orbits = orbitCalculator();
	
	var back = createBack("back", "images/back_v2.gif");
	var Sol = createStar(back, "Sol", 10, centerX, centerY, "images/sol.png");
	createLink("Sol", "https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D0%BB%D0%BD%D1%86%D0%B5");
	
	var Mercury = createPlanet(back, "Mercury", Sol, /*orbits[1]*/100, centerX, centerY, "images/mercury_m.png" );
	createLink("Mercury", "https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D1%80%D0%BA%D1%83%D1%80%D0%B8%D0%B9");
	
	var Venus =  createPlanet(back, "Venus", Sol, /*orbits[1]*/200, centerX, centerY, "images/venus_m.png");
	createLink("Venus", "https://ru.wikipedia.org/wiki/%D0%92%D0%B5%D0%BD%D0%B5%D1%80%D0%B0");
	
	var Earth = createPlanet(back, "Earth", Sol, /*orbits[2]*/300, centerX, centerY, "images/earth_m.png");
	createLink("Earth", "https://ru.wikipedia.org/wiki/%D0%97%D0%B5%D0%BC%D0%BB%D1%8F");
	
	var Mars =  createPlanet(back, "Mars", Sol, /*orbits[3]*/400, centerX, centerY, "images/mars_m.png");
	createLink("Mars", "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D1%80%D1%81");
	
	var Neptune =  createPlanet(back, "Neptune", Sol, 600, centerX, centerY, "images/neptune_m.png");
	createLink("Neptune", "https://ru.wikipedia.org/wiki/%D0%9D%D0%B5%D0%BF%D1%82%D1%83%D0%BD");

	rotate();
	
})()
