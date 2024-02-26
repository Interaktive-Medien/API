<?php
// Die URL der API
$url = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0';

// Optionale Header (hier nicht notwendig, aber nützlich für andere APIs)
$options = [
    "http" => [
        "method" => "GET",
        "header" => "Content-Type: application/json"
    ]
];

// Erstellt einen Stream-Kontext
$context = stream_context_create($options);

// Verwendet file_get_contents mit dem erstellten Kontext, um die Daten abzurufen
$response = file_get_contents($url, false, $context);

// Überprüft, ob ein Fehler aufgetreten ist
if ($response === false) {
    echo "Ein Fehler ist aufgetreten.";
} else {
    //Hier können die Daten verarbeitet, oder in eine Datenbank geschrieben werden
}
?>
