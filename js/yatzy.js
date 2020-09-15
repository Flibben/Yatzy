/*
 Get class PlayerOneNumbers // DONE
 Loop to add change eventlistener to all elements with said class // DONE  
 Add them to sum and write out to  // DONE

 Make a function that roles dices, 5 // DONE
 
 Add a eventlistener for checkbox check/uncheked // DONE
 Add counter for dicethrows, set max to 3

*/


   ////////////////////*Functions*////////////////////////
function oneDice(){ // rolls one dice with 6 sides
    return Math.floor(Math.random() * 6 + 1);
    };

function addSum(){ // Loop add numbers to sum and write to DOM
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

function eventCheckbox(){ //Eventlistener for checkboxes. Returns array checkedOrnot. 1 if checked, 0 if not.
    let checkedOrNot = [0,0,0,0,0]
    for(let i = 0; i < 5; i++){ 
        document.getElementById("c"+(i+1)).addEventListener("change", function(e){ //loggs checked state to checkedOrNot
            if(e.target.checked){
                checkedOrNot[i] = 1;    
            }
            else if(!e.target.checked){
                checkedOrNot[i] = 0;
            };
        });
    };
    return checkedOrNot;
};

function rollDice(rollThisDice) { // Rolls dices & writes values to DOM
    let throwsLeft = 3;
    console.log(throwsLeft);
    document.getElementById("throwDice").addEventListener("click", function(e){ //adds event to button that throws the dice!
        let diceThrow = [0,0,0,0,0];

        if(!rollThisDice.includes(0) || throwsLeft == 0){ //do nothing if either statement is true 
            console.log("No dices where rolled or you where out of throws");
        }
        else{ //if you have throwsLeft and have unchecked box(es) - do this.
            console.log(rollThisDice)   

            for (let i = 0; i < diceThrow.length; i++) {
                dice = i+1;

                if(rollThisDice[i] === 0 ){
                    diceThrow[i] = oneDice();
                    document.getElementById("d"+dice).innerHTML = diceThrow[i];
                }
                else if (rollThisDice[i] === 1){
                    console.log("Dice number " + (i+1) + " was not rolled");
                }
            }
        throwsLeft--; //one throw was used
        document.getElementById("dicesleft").innerHTML = throwsLeft;
        console.log(throwsLeft);
        }
    })
};  


//////////////////////*END functions*////////////////////

document.addEventListener("DOMContentLoaded", function(yatzy){

   addSum(); //Eventlistener that adds numbers to sum

   rollDice(eventCheckbox()/* returns array checkedOrNot.*/ ); // rolls dices when button "kasta tärning" is pressed!
    
});

