var personName = "Taras",
    time = "20\:00",
    place = "party";

function cityName() {
    var event = prompt("Please, write some city", "Lviv");
    if (event.indexOf(' ') !== 0 && event !== null && event.length !== 0 && isNaN(event)) {
        var newName = event.charAt(0).toUpperCase() + event.slice(1);
        var message = personName + " go to the " + place + " at " + time + " in " + newName;
        console.log(message);

    } else {
        alert("You entered incorrect data");
        cityName();
    }
}

cityName();



