console.log("Hello Aare-Guru");

// hole alle Städte von der API
holeAlleStaedte();

// prüfe, ob bereits eine Stadt im Localstorage gefunden wurde
if (localStorage.getItem("stadt") !== null) {

    console.log("Stadt in Localstorage gefunden")

    var letzteStadt = localStorage.getItem("stadt");

} else {

    console.log("Noch keine Stadt im Localstorage")

    var letzteStadt = 'bern';
}

// hole die Temperatur der Stadt
holeTemperaturStadt(letzteStadt);


// Ab hier werden nur noch Funktionen definiert
// Ab hier werden nur noch Funktionen definiert
// Ab hier werden nur noch Funktionen definiert
// Ab hier werden nur noch Funktionen definiert
// Ab hier werden nur noch Funktionen definiert

function wechsleStadt(stadt) {

    localStorage.setItem("stadt", stadt);

    holeTemperaturStadt(stadt);

}

// hole alle Städte, an denen AareGuru misst
function holeAlleStaedte() {

    let url = 'https://aareguru.existenz.ch/v2018/cities';

    fetch(url)

        .then(response => response.json())

        .then(data => {

            for (let index = 0; index < data.length; index++) {

                // füge alle Mess-Städte ins HTML ein
                // die Funktion wechsleStadt() muss VOR diesem Eventlistener definiert werden

                document.querySelector("#staedte").innerHTML +=
                    "<li onclick='wechsleStadt(" + '"' + data[index].city + '"' + ")'>" +
                    data[index].name + "</li>"
            }

        })
        .catch(error => console.log(error))

}

// hole die Temperatur der gewünschten Stadt
function holeTemperaturStadt(stadt) {

    let url = 'https://aareguru.existenz.ch/v2018/today?city=' + stadt;

    fetch(url)
        .then(response => response.json())
        .then(data => {

            document.querySelector('#temperatur').innerHTML = data.aare;
            document.querySelector('#text').innerHTML = data.text;
            document.querySelector('#aktuelleStadt').innerHTML = data.name;

        })

        .catch(error => console.log(error))

}