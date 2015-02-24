$(document).ready(function (){
    /* get the number */
    $("#numMain").keydown(function (event) {
        if (event.which === 13) {
            var numberGuess = document.getElementById('numMain').value;
            console.log("You number is: " + numberGuess);
        }
    }    
    /* Fizz Buzz time */

    for ( a = 1; a <= numberGuess; a++ ){
        if (a%3 === 0){
           if (a%5 === 0){
                console.log("FizzBuzz")
            } else {
                console.log("Fizz")
            }
        } else if (a%5 === 0){
            console.log("Buzz")
        } else {
            console(a)
        }
    }   

    /* check the number 
    
    var checkNum = document.getElementById("numMain").value;
    if (isNaN(checkNum)) {
        alert(checkNum + "is not a number!");
    } else {
        alert(checkNum + "that's a number!");
    }

    */
});