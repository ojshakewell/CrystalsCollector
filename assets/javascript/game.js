$(function() {

    var target;
    var crystalValues = [];
    var playerValue;
    var wins = 0;
    var losses = 0;

    resetNumbers();

    //I tried to use a nth-child selector to get the data from the button positions, will come back to it later
    // $(".gem").click(function(){
    // 	updatePlayerValue($(this).data("value"));
    //	console.log($(this).data("value"));
    // });

    //BUTTONS//
    $(".red").click(function() {

        updatePlayerValue(0);
        isWinner();
    });

    $(".yellow").click(function() {

        updatePlayerValue(1);
        isWinner();
    });

    $(".green").click(function() {

        updatePlayerValue(2);
        isWinner();
    });

    $(".blue").click(function() {

        updatePlayerValue(3);
        isWinner();
    });


    //Determines if the game has been one or lost
    function isWinner() {

        if (playerValue === target) {

            $(".outcome").text("YOU WIN!!!");
            wins++;
            $(".wins").text("WINS: " + wins);
            resetNumbers();

        } else if (playerValue > target) {

            $(".outcome").text("YOU LOSE!!!");
            losses++;
            $(".losses").text("LOSSES: " + losses);
            resetNumbers();
        };
    };

    //Generates random number between 1 and 10
    function getRandomNumber() {

        var randomNumber = Math.floor((Math.random() * 10) + 1);
        return randomNumber;
    };

    //creates target and crystal random numbers for a new game
    function resetNumbers() {

        playerValue = 0;

        target = Math.floor((Math.random() * 40) + 20);

        $(".targetNumber").text(target);

        $(".playerNumber").text(0)

        crystalValues =  [];

        for (var i = 0; i < 4; i++) {
            crystalValues.push(getRandomNumber());
            // var nthChildString = ".gem:nth-child(" + (i+1).toString() + ")"
            // console.log(nthChildString);
            // $(nthChildString).data("value", crystalValues[i]);
            // console.log($(nthChildString).data("value"))
            console.log(crystalValues[i]);
        }
    };

    //Updates the players total
    function updatePlayerValue(crystalColor) {

        playerValue += crystalValues[crystalColor];
        $(".playerNumber").text(playerValue);
    };
}); //end $(function())