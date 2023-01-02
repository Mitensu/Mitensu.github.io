$(document).ready(function () {

    $("#btn").click(function () {

        fetch('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                $("#btn").after("<div id='dane-programisty'></div>")
                $("#dane-programisty").text(data.imie + data.nazwisko + data.zawod + data.firma);
            });
    })




})