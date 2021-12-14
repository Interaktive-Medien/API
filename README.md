<h1 align="center">API</h1>

<div align="center">Eine Sammlung für APIs welche sehr gut in Webtechnologien oder Digezz verwendet werden können. Diese Liste wird laufend erweitert. Zusätzlich findet ihr in den Files noch Beispiele von Anwendungen, um das Prinzip von Fetch verstehen zu können.</div>

<div align="center">
  <sub>Dies ist Version 0.1</sub>
</div>
<br>
<div align="center">
<img src="https://www.fhgr.ch/typo3conf/ext/sfptemplate/RootPage/Default/Resources/Public/Partials/Logo/Images/Logo.svg" width="30%">
</div>

-----


## CocktailAPI
Eine API für [Cocktails](https://www.thecocktaildb.com/api.php). Diese API kann zum Beispiel zum Suchen von **Cocktails** verwendet werden. Auch können **Rezepte und Zutaten** gesucht werden.


## SBB Transport API
Eine API für die SBB. Diese API kann zum Beispiel zum Suchen von **Zugfahrten** verwendet werden.

[Link zur Dokumentation](http://transport.opendata.ch/docs.html)

### Beispiele
Hier sieht man alle Bahnhöfe die **Basel im Namen** haben.

[http://transport.opendata.ch/v1/locations?query=Basel](http://transport.opendata.ch/v1/locations?query=Basel)

Hier sieht man die Verbindungen zwischen **Lausanne und Genf**.

[http://transport.opendata.ch/v1/connections?from=Lausanne&to=Genève](http://transport.opendata.ch/v1/connections?from=Lausanne&to=Genève)

Hier sieht man alle Haltestellen, welche am nächsten zu den **Koordinaten** liegt.

[http://transport.opendata.ch/v1/locations?x=47.476001&y=8.306130](http://transport.opendata.ch/v1/locations?x=47.476001&y=8.306130)

## Opendata St.Gallen
Eine API für **offene Daten** der Stadt St.Gallen.

[Link zur Dokumentation](https://daten.stadt.sg.ch/pages/home0/?flg=de)

### Beispiele
Hier werden sämtliche **Medienmitteilungen** der Stadtpolizei St.Gallen angezeigt.

[https://daten.stadt.sg.ch/explore/dataset/newsfeed-stadtpolizei-stgallen-medienmitteilungen/table/?sort=published](https://daten.stadt.sg.ch/explore/dataset/newsfeed-stadtpolizei-stgallen-medienmitteilungen/table/?sort=published)

Hier werden sämtliche verfügbare **eScooter** der Stadt St.Gallen angezeigt.

[https://daten.stadt.sg.ch/explore/dataset/verfugbare-freefloating-angebote-in-der-stadt-stgallen/table/?disjunctive.plz](https://daten.stadt.sg.ch/explore/dataset/verfugbare-freefloating-angebote-in-der-stadt-stgallen/table/?disjunctive.plz)

## AareGuru Gewässerdaten
Mit der AareGuru APU werden Live-Daten zur **Aare**, wie beispielsweise Wassertemperatur oder Abflussrate abgerufen.

[Link zur Dokumentation](https://aareguru.existenz.ch)

### Beispiel
In folgendem Beispiel rufen wir die Daten für die Stadt Bern ab:

[https://aareguru.existenz.ch/v2018/today?city=bern](https://aareguru.existenz.ch/v2018/today?city=bern)

## RandomDog
Eine API für Random Bildern von **Hunden**. Falls ihr ein Bild von einem Hund sehen wollt, könnt ihr diese API nutzen.

[Link zur Dokumentation](https://placedog.net/)

## Beispiel
Aus 1000 Hundebildern wird eines zufällig angezeigt.

[https://placedog.net/1000?random](https://placedog.net/1000?random)


## Star Wars Api
Eine API für **Star Wars**. Diese API kann zum Beispiel zum Suchen von **Personen**, **Fahrzeugen** und vieles mehr verwendet werden.

[Link zur Dokumentation](https://swapi.dev/)

### Beispiel
Hier sieht man alle Charaktere, welchen in Star Wars vorkommen.

[https://swapi.dev/api/people](https://swapi.dev/api/people)

## Pokemon API
Die ultimative API wenn es um **Pokmemon** geht. Hier findet man sämtliche Daten.

[Link zur Dokumentation](https://pokeapi.co/)

### Beispiele

Die originalen **151 Pokemon**.

[https://pokeapi.co/api/v2/pokemon?limit=151&offset=0](https://pokeapi.co/api/v2/pokemon?limit=151&offset=0)

Alle Daten der ersten **Generation** der Spiele.

[https://pokeapi.co/api/v2/generation/1/](https://pokeapi.co/api/v2/generation/1/)

Alles über **Pikachu**.

[https://pokeapi.co/api/v2/pokemon/pikachu/](https://pokeapi.co/api/v2/pokemon/pikachu/)

## Opendata Swiss
Eine API für **offene Daten** der Schweiz. Hier findet man vielfältige Daten aus der ganzen Schweiz.

[Link zur Dokumentation](https://opendata.swiss/en/)

### Beispiele

Die PLZ der Schweiz direkt von der Post.
[https://opendata.swiss/en/dataset/plz_verzeichnis](https://opendata.swiss/en/dataset/plz_verzeichnis)

Velos und Fussgänger in der Stadt Basel.

[https://opendata.swiss/en/dataset/verkehrszahldaten-velos-und-fussganger](https://opendata.swiss/en/dataset/verkehrszahldaten-velos-und-fussganger)
