// transport API Dokumentation:
// http://transport.opendata.ch/docs.html

console.log(' Hallo "SBB" ');

// innerhtml example
document.querySelector('#titel').innerHTML = 'Abfahrtsplakat SBB';

// define constants
const input = document.querySelector('#input-station');
const containerStationen = document.querySelector('#container-stationen');
const containerAbfahrten = document.querySelector('#container-abfahrten');

// listen for input
input.addEventListener("input", function () {

    // leere den anderen container mit den abfahrten (optional)
    containerAbfahrten.innerHTML = "";

    let bahnhof = input.value;
    // console.log(bahnhof);

    holeStationen(bahnhof);

});

// hole stationsnamen aus der api 
function holeStationen(query) {

    //Die Grundlage für einen Fetch. Fetch ist eine Funktion, die einen Request an einen Server sendet und das Ergebnis zurückgibt
    //In der ersten Zeile wird der Link zur API definiert. Dieser kann immer angepasst werden.
    let url = 'http://transport.opendata.ch/v1/locations?query=' + query;
    //Hier startet der Fetch mit der definierten URL.
    fetch(url)
        //Wenn der Fetch erfolgreich war, wird die Antwort in ein Objekt gespeichert.
        .then(response => response.json())
        //Wenn das Objekt gespeichert wurde, wird es in eine Variable gespeichert. Diese Variable heisst "data".
        .then(data => {
            //Hier kann man mit der Variable arbeiten. Entweder das DOM mit Informationen erweitern, oder eine neue Funktion aufrufen.
            //Mit "Console.log(data);" sieht man den Inhalt des Objekts.

            // console.log(data);

            let stations = data.stations;

            // leere den Container bevor neue Resultate hineingeschrieben werden.
            containerStationen.innerHTML = "";

            for (let index = 0; index < stations.length; index++) {

                // holzhammer-methode eventlistener anbinden
                containerStationen.innerHTML +=
                    "<li onclick='zeigeAbfahrten(" + '"' + stations[index].name + '"' + ")'>" +
                    stations[index].name + "</li>"

            }

        })
        //Bei einem Fehler wird dieser gefangen "catch" und eine Fehlermeldung in der Konsole ausgegeben.
        .catch(error => console.log(error))

}

// funktion wird beim klick auf listenelement ausgeführt
function zeigeAbfahrten(bahnhof) {

    // lösche alle stationen, da wir sie nicht mehr brauchen
    containerStationen.innerHTML = "";

    let url = "http://transport.opendata.ch/v1/stationboard?station=" + bahnhof + '&limit=10';

    fetch(url)

        .then(response => response.json())

        .then(data => {


            let stationboard = data.stationboard;

            stationboard.forEach(abfahrt => {

                console.log(abfahrt);

                // formatiere das datum aus der API mit der funktion toLocaleString() in ein lesbares format
                // https://www.w3schools.com/jsref/jsref_tolocalestring.asp
                var readableTime = new Date(abfahrt.stop.departure).toLocaleString('de-CH', {hour: 'numeric', minute: 'numeric' });

                const listenElement = document.createElement("li");

                listenElement.innerHTML = ' Um ' + readableTime + ' fährt ' + abfahrt.operator + ' auf Gleis ' + abfahrt.stop.platform + ' nach ' + abfahrt.to;

                containerAbfahrten.appendChild(listenElement);

            });

        })
        .catch(error => console.log(error))


}