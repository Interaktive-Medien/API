const starwarsDOM = document.querySelector("#starwars");
/*if starWarsChars is not empty*/
if (localStorage.getItem('starWarsChars') === null) {
    console.log('starWarsChars is null');
    datenHolen();
    zeigeDatenAn();
} else {
    console.log('starWarsChars is not null');
    zeigeDatenAn();
}

function placeElement(element, inhalt, ort) {
    let newElement = document.createElement(element);
    newElement.innerHTML = inhalt;
    ort.appendChild(newElement);
}

function zeigeDatenAn(){
    let starWarsChars = localStorage.getItem('starWarsChars');
    let starWarsFromLocalStorage = JSON.parse(starWarsChars);
    starWarsFromLocalStorage.results.forEach(char => {
        placeElement("h2", char.name, starwarsDOM);
        placeElement("p", "Grösse " + char.height, starwarsDOM);
        placeElement("p", "Augenfarbe " + char.eye_color, starwarsDOM);

    });

}

function datenHolen() {


//Die Grundlage für einen Fetch. Fetch ist eine Funktion, die einen Request an einen Server sendet und das Ergebnis zurückgibt
//In der ersten Zeile wird der Link zur API definiert. Dieser kann immer angepasst werden.
let url = 'https://swapi.dev/api/people';
//Hier startet der Fetch mit der definierten URL.
fetch(url)
    //Wenn der Fetch erfolgreich war, wird die Antwort in ein Objekt gespeichert.
    .then(response => response.json())
    //Wenn das Objekt gespeichert wurde, wird es in eine Variable gespeichert. Diese Variable heisst "data".
    .then(data => {
        //Hier kann man mit der Variable arbeiten. Entweder das DOM mit Informationen erweitern, oder eine neue Funktion aufrufen.
        //Mit "Console.log(data);" sieht man den Inhalt des Objekts.
        //console.log(data);
        localStorage.setItem('starWarsChars', JSON.stringify(data));
        /*localStorage.setItem('myCat', 'Tom');
        let meineKatze = localStorage.getItem('myCat');
        console.log(meineKatze);
        */

        //Ab hier kann man entweder mit der Variable data arbeiten, oder eine funktion aufrufen mit data als Parameter.

        //Beispiel eines Funktionsaufrufs
        //"showSomething(data);"

        })
        //Bei einem Fehler wird dieser gefangen "catch" und eine Fehlermeldung in der Konsole ausgegeben.
    .catch(error => console.log(error))

};