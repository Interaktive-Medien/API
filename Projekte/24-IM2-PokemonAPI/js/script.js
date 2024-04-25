const searchBocks = document.querySelector('#search');
const app = document.querySelector('#app');
let anzahlPokemon = 151;
// const url = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";

//dom loaded
document.addEventListener('DOMContentLoaded', function(){
    init();
});

//Detailansicht

//eventlistener searchBocks input
searchBocks.addEventListener('input', function(){
    suchePokemon(searchBocks.value);
});

//Suche Pokemon, das Array wird gefiltert und das DOM angepasst
async function suchePokemon(searchInput){
    console.log(searchInput);
    //TODO, Refactor, fetch data only once
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${anzahlPokemon}&offset=0`; 
    let pokemons = await fetchData(url);
    let filteredPokemon = pokemons.results.filter(wantedPokemon => wantedPokemon.name.includes(searchInput));
    console.log(filteredPokemon);
    app.innerHTML = '';
    //TODO, Refactor, create function for creating card
    filteredPokemon.forEach(pokemon => {
        let card = document.createElement('div');
        card.className = 'pokemonCard';
        card.innerHTML = `<h2>${pokemon.name}</h2>`;
        app.appendChild(card);
    });

}

//Die ursprünglichen 151 werden geladen und im h2 angezeigt
async function init(){
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${anzahlPokemon}&offset=0`;
    let pokemons = await fetchData(url);
    pokemons.results.forEach(pokemon => {
        // console.log(pokemon.name);
        let card = document.createElement('div');
        card.className = 'pokemonCard';
        card.innerHTML = `<h2>${pokemon.name}</h2>`;
        app.appendChild(card);
    });
}
//Grundfunktion um Daten zu fetchen
async function fetchData(url) {  // asynchrone Funktion, die auf ein Promise wartet
    try { // try-catch-Block, um Fehler abzufangen
        let response = await fetch(url); // auf das Promise warten und dann die Response in die Variable speichern
        let data = await response.json(); // Extract JSON from the http response
        return data;
    }
    catch (error) { // Fehlerbehandlung
        console.log(error);
    }
}