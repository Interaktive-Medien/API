const userInput = document.querySelector("#inputCocktails");
const cocktails = document.querySelector("#cocktails");

//Eventlistener userInput
userInput.onkeyup = function() {
    let url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + userInput.value;
    if (userInput.value.length > 2) {
        holeDaten(url);
    } else {
        cocktails.innerHTML = "";   
    }  
}

function holeDaten(url){

//Die Grundlage für einen Fetch. Fetch ist eine Funktion, die einen Request an einen Server sendet und das Ergebnis zurückgibt
//In der ersten Zeile wird der Link zur API definiert. Dieser kann immer angepasst werden.

//Hier startet der Fetch mit der definierten URL.
fetch(url)
    //Wenn der Fetch erfolgreich war, wird die Antwort in ein Objekt gespeichert.
    .then(response => response.json())
    //Wenn das Objekt gespeichert wurde, wird es in eine Variable gespeichert. Diese Variable heisst "data".
    .then(data => {
        //Hier kann man mit der Variable arbeiten. Entweder das DOM mit Informationen erweitern, oder eine neue Funktion aufrufen.
        //Mit "Console.log(data);" sieht man den Inhalt des Objekts.
        showData(data.drinks);
        //Ab hier kann man entweder mit der Variable data arbeiten, oder eine funktion aufrufen mit data als Parameter.

        //Beispiel eines Funktionsaufrufs
        //"showSomething(data);"

        })
        //Bei einem Fehler wird dieser gefangen "catch" und eine Fehlermeldung in der Konsole ausgegeben.
    .catch(error => console.log(error))

}

function showData(drinks){
    cocktails.innerHTML = "";
    drinks.forEach(drink => {
        let neuerDrinkName = document.createElement("h2");
        neuerDrinkName.innerHTML = drink.strDrink;
        cocktails.appendChild(neuerDrinkName);
        let drinkBild = document.createElement("img");
        drinkBild.src = drink.strDrinkThumb;
        cocktails.appendChild(drinkBild);

    });
/*
    for (let i = 0; i < drinks.length; i++) {
        let drink = drinks[i].strDrink;
        console.log(drink);
    }
    */
};