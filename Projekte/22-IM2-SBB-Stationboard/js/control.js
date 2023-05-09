console.log("control.js geladen")

let stationboard = document.querySelector("#stationboard");
let places = document.querySelector("#places");
let url;

places.addEventListener("change", function () {
    url = 'https://transport.opendata.ch/v1/stationboard?station=' + places.value + '&limit=10';
    getStationboard();
});

function getStationboard() {
    fetch(url)
        .then(response => response.json())
        .then(data => {

            let rows = document.querySelectorAll(".row");
            rows.forEach(element => {
                element.remove();
            });
            data.stationboard.forEach(element => {
                let row = document.createElement("tr");
                row.classList.add("row");

                let departure = document.createElement("td"); //<td></td>
                let category = document.createElement("td");    //<td></td>
                let to = document.createElement("td");
                let platform = document.createElement("td");

                let time = element.stop.departure.slice(11, 16);

                departure.innerHTML = time;
                category.innerHTML = element.category;
                to.innerHTML = element.to;
                platform.innerHTML = element.stop.platform;

                row.appendChild(departure);
                row.appendChild(category);
                row.appendChild(to);
                row.appendChild(platform);

                stationboard.appendChild(row);

            });

        })
        .catch(error => console.log(error))

};

