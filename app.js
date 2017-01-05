$(document).ready(function() {

    console.log('have fun !');

    $("input").focusout(function() {

        var firstName = $("#first_name").val();
        var lastName = $("#last_name").val();
        var city = $("#city").val();
        console.log(firstName);
        console.log(lastName);
        console.log(city);
        if (firstName == "" || lastName == "") {
            $('body').append($('<div/>').html = "Veuillez renseigner tous les champs");

        } else {
            $("span#username").html(" " + firstName + " " + lastName);
        }
    });
});