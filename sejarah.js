	var i = 0;
	var txt = 'Cieeee.......Kepo..............................................................................................................................Madiun is a city in the western part of East Java, Indonesia, known for its agricultural center. It was formerly (until 2010) the capital of the Madiun Regency, but is now administratively separated from the regency.Madiun, located 169 km south west of Surabaya, covers an area of 33.92 sq. km, and had a population of 170,964 at the 2010 Census;[1] the latest official estimate (as of 2014) is 175,767. This town is an average of 63 metres above sea level and lies on the Madiun River, a tributary of the Bengawan Solo River. It is surrounded by a number of mountains, including Mount Wilis (2,169 m) to the east, to the south the Kapur Selatan range (500–1000 m) and to the west Mount Lawu (3,285 m). Madiun has an average temperature of 20-35 degrees Celsius.'
	var speed = 100;

	function typeWritter(){
		if(i < txt.length){
			document.getElementById('sejarah').innerHTML += txt.charAt(i);
			i++;
			setTimeout(typeWritter, speed);
		}
	}