/*
 Get class PlayerOneNumbers // DONE
 Loop to add change eventlistener to all elements with said class // DONE  
 Add them to sum and write out to  // DONE

 Make a function that roles dices, 5 // DONE
 
 Add a eventlistener for checkbox check/uncheked
 Add counter for dicethrows, set max to 3

*/


   ////////////////////*Functions*////////////////////////
function oneDice(){ // rolls one dice with 6 sides
    return Math.floor(Math.random() * 6 + 1);
    };

function addSum(){ // Loops through numbers and adds them to sum
    let playerOneNumbers = document.getElementsByClassName("playerOneNumbers"); //creat array like objekt of player one numbers.
    for(i = 0; i < playerOneNumbers.length; i++){ // loop thru playerOneNumbers and add .value to sum1.innerHTML
    
        playerOneNumbers[i].addEventListener("change", function(e){ // adds eventlistener to all indexes
            let sum = 0; // sets sum to 0 on change
                
                for (i = 0; i < playerOneNumbers.length; i++){ //this loops when something is changed with numbers
                    sum += Number(playerOneNumbers[i].value);
                };
                
            document.getElementById("sum1").innerHTML = sum;
              
                if (sum >= 63) { //set bonus to 50 if sum is equal or bigger than 63
                    document.getElementById("bonusPlayerOne").innerHTML = 50;
                }

        });

    }

};

function rollDice() { // Rolls 5 dices & writes values to DOM
    let diceThrow = [0,0,0,0,0];        

    document.getElementsByName(dices);
    for (i = 0; i < diceThrow.length; i++ ) {
        diceThrow[i] = oneDice();
        dice = i+1;
        document.getElementById("d"+dice).innerHTML = diceThrow[i];

    }
    return diceThrow;
}

function eventCheckbox(){ //Eventlistener for checkboxes
    for(i = 0; i < 5; i++){ 
        document.getElementById("c"+(i+1)).addEventListener("change", function(e){
            if(e.target.checked){
            console.log("checking in nr:" + e.target.id);
            }
            else if(!e.target.checked){
            console.log("Checking out nr:" + e.target.id);
            };
        });
    };
}
//////////////////////*END functions*////////////////////

document.addEventListener("DOMContentLoaded", function(yatzy){

   addSum(); //adds numbers to sum

   eventCheckbox(); // look if checked or not. Works but only logs if pressed or not.

    document.getElementById("throwDice").addEventListener("click", function(e){ //adds event to button that throws the dice!
        rollDice() // rolls dices!
    }); 

});

