/*
 Get class PlayerOneNumbers // DONE
 Loop to add change eventlistener to all elements with said class // DONE  
 Add them to sum and write out to  // DONE

 Make a function that roles dices, 5 // DONE
 add dice sorter to role dice function?
 
 Add a eventlistener for checkbox check/uncheked // DONE
 Add counter for dicethrows, set max to 3 // DONE

 Add save button // DONE
 Add functionality to save button 
 
 landing page lets set players
 
 Add object with arrays that represents one pair, two pair, straight etc
    use together with Class assigned to players, if scoreArray[i] is not defined - check diceThrow for match
 
        Create class (for a player)
            properties
                name
                scoreArray for saved score for rounds 0-14, if (called uppon == !undefined) {writable} else {not writable} and display error/try again  
                bonus: boolean
                totalSum

        Assign class to each object of player
            
    Alert if player if they're trying to do something that only gets them 0 points, they have to confirm one more time.


*/


////////////////////*Functions*////////////////////////
function oneDice() { // rolls one dice with 6 sides
    return Math.floor(Math.random() * 6 + 1);
};

function addSum() { // Loop add numbers to sum and write to DOM
    let playerOneNumbers = document.getElementsByClassName("playerOneNumbers"); //creat array like objekt of player one numbers.
    for (i = 0; i < playerOneNumbers.length; i++) { // loop thru playerOneNumbers and add .value to sum1.innerHTML

        playerOneNumbers[i].addEventListener("change", function (e) { // adds eventlistener to all indexes
            let sum = 0; // sets sum to 0 on change

            for (i = 0; i < playerOneNumbers.length; i++) { //this loops when something is changed with numbers
                sum += Number(playerOneNumbers[i].value);
            };

            document.getElementById("sum1").innerHTML = sum;

            if (sum >= 63) { //set bonus to 50 if sum is equal or bigger than 63
                document.getElementById("bonusPlayerOne").innerHTML = 50;
            }

        });

    }

};

function eventCheckbox() { //Eventlistener for checkboxes. Returns array checkedOrnot. 1 if checked, 0 if not.
    let checkedOrNot = [0, 0, 0, 0, 0]
    for (let i = 0; i < 5; i++) {
        document.getElementById("c" + (i + 1)).addEventListener("change", function (e) { //loggs checked state to checkedOrNot
            if (e.target.checked) {
                checkedOrNot[i] = 1;
            }
            else if (!e.target.checked) {
                checkedOrNot[i] = 0;
            };

            if (!checkedOrNot.includes(0)) { // able savebutton if all boxes are checked, else if - disable when a box is unchecked  
                document.getElementById("saveRound").disabled = false;
            }
            else if (checkedOrNot.includes(0)) {
                document.getElementById("saveRound").disabled = true;
            };
        });
    };

    return checkedOrNot;
};

function rollDice(rollThisDice) { // Rolls dices & writes values to DOM
    let throwsLeft = 3;
    let diceThrow = [0, 0, 0, 0, 0];
    let throwDice = document.getElementById("throwDice");
    let saveRound = document.getElementById("saveRound");
    console.log("You have " + throwsLeft + " throws left");

    throwDice.addEventListener("click", function (e) { //adds event to button that throws the dice!

        let disabledCheckboxes = document.querySelectorAll("input[name=dices]");
        disabledCheckboxes.forEach(unCheckMe => {
            unCheckMe.disabled = false;
        });

        if (!rollThisDice.includes(0) || throwsLeft == 0) { //do nothing if either statement is true. !rollThisDice.includes(0) is true if all boxes are checked.
            console.log("No dices where rolled or you where out of throws");
            document.getElementById("saveRound").disabled = false;
        }
        else { //if you have throwsLeft and have unchecked box(es) - do this.
            console.log(rollThisDice)
            saveRound.disabled = true;
            for (let i = 0; i < diceThrow.length; i++) {
                dice = i + 1;

                if (rollThisDice[i] === 0) {
                    diceThrow[i] = oneDice();
                    document.getElementById("d" + dice).innerHTML = diceThrow[i];
                }
                else if (rollThisDice[i] === 1) {
                    console.log("Dice number " + (i + 1) + " was not rolled");
                }
            }
            throwsLeft--;
            if (throwsLeft == 0) { // when out of throws, disable button
                throwDice.disabled = true;
                disabledCheckboxes.forEach(unCheckMe => {
                unCheckMe.disabled = true;
                saveRound.disabled = false;
                });
            }
            console.log("You have " + throwsLeft + " throws left."); //one throw was used
            document.getElementById("dicesleft").innerHTML = throwsLeft;
            console.log(throwsLeft);
        }
        console.log(diceThrow);
    })
};


//////////////////////*END functions*////////////////////

document.addEventListener("DOMContentLoaded", function (yatzy) {

    addSum(); //Eventlistener that adds numbers to sum

    rollDice(eventCheckbox()/* passes array checkedOrNot.*/); // rolls dices when button "kasta tärning" is pressed!

});

