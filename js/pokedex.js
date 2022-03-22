const fetchPokemon = () => {
    
    let pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase().trim();

    if(pokeInput != ""){

	    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
	    
	    fetch(url).then((res) => {
	        //console.log(res);
	        if(res.status != "200"){
	            pokeImage("img/error.png");
	        }else{
	            return res.json();
	        }
	        
	    }).then((data) => {
	        console.log(data);

	        let pokeImg = data.sprites.front_default;
	        pokeImage(pokeImg);

	        let pokeNam = data.name;
	        namePokemon(pokeNam);

	        let pokeType = data.types[0].type.name;
	        typePokemon(pokeType);

	        /*::::Stats::::*/
	        let pokeStats = data.stats;
	        console.log(pokeStats);
	        statPokemon(pokeStats);
	         /*:::: :::: ::::*/

	        /*::::Moves::::*/
	        // let pokeMovs = data.moves[0].move.name;
	        let pokeMovs = data.moves;
	        // console.log(pokeMovs);
	        movesPokemon(pokeMovs);
	        /*:::: ::: ::::*/

	        // console.log(pokeImg);
	    })

    } 
}

const namePokemon = (name) => {
    const nameLabel = document.getElementsByClassName("name-pokemon")[0];
    nameLabel.innerText = name;
}

const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}

const typePokemon = (type) => {
    const infoType = document.getElementsByClassName("info-type")[0];
    infoType.innerText = (`Type:${type}`);
}

const statPokemon = (pokeStats) => {

	let selectStats = document.getElementsByClassName("info-select-stats")[0];
	selectStats.innerText = "";

	for (value in pokeStats) {
		var option = document.createElement("option");
		option.text = (`${pokeStats[value].stat.name}: ${pokeStats[value].base_stat}`);
		selectStats.add(option);
	}   	

}

const movesPokemon = (moves) => {

	let select = document.getElementsByClassName("info-select-moves")[0];
	select.innerText = "";

	for (value in moves) {
		// console.log(moves[value].move.name);
		var option = document.createElement("option");
		option.text = moves[value].move.name;
		select.add(option);
	}
}


document.getElementById("btn-pokedex").addEventListener("click", function(){fetchPokemon()});