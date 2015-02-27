$(document).ready(function (){
    /* get the number */
    $("#numMain").keydown(function (event) {
        if (event.which === 13) {
            var numberGuess = +document.getElementById('numMain').value;
            console.log("You number is: " + numberGuess);

            /* check to see if it's a number */
            var checkNum = $("#numMain").val();
            if(checkNum.length == 0) {
                alert("You need to enter a number!");
            }
            else {
                if(jQuery.isNumeric(checkNum)){
                    console.log("Your number is "+ numberGuess);
                }
                else {
                    alert("That's not a number!");
                }
            }    


            /* check the length of the entered number */

            /* Fizz Buzz time */
        
            for ( a = 1; a <= numberGuess; a++ ){
                if (a%3 === 0){
                   if (a%5 === 0){
                        console.log("FizzBuzz")
                        $(".numbers").append("FizzBuzz" + "<p></p>");
                        /* $("").prepend("<p></p>"); */

                    } else {
                        console.log("Fizz")
                        $(".numbers").append("Fizz"  + "<p></p>");
                        
                    }
                } else if (a%5 === 0){
                    console.log("Buzz")
                    $(".numbers").append("Buzz"  + "<p></p>");
                    

                } else {
                    console.log(a)
                    $(".numbers").append(a  + "<p></p>");
                    
                }
            }
        }
    });
});