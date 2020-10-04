fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=Tbilisi", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
		"x-rapidapi-key": "98abc46db0msh24d1c235fc82da8p1831d3jsnba34ca7ec11e"
	}
})
.then(response => 
	response.text()
)
.then((result) =>{
    console.log(result);
}
)