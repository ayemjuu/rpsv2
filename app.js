function displayRock () {

    let rockImage = document.getElementById('rock');

    rockImage.src = 'image/fist.png';
    rockImage.style.display ='block';

     // Hide the rock image after 1 second
    setTimeout(function() {
        rockImage.style.display = 'none';
    }, 2500);
}

function displayPaper () {

    let paperImage = document.getElementById('paper');

    paperImage.src = 'image/hand.png';
    paperImage.style.display ='block';

       // Hide the rock image after 1 second
       setTimeout(function() {
        paperImage.style.display = 'none';
    }, 2500);
}

function displayScissors () {

    let scissorsImage = document.getElementById('scissors');

    scissorsImage.src = 'image/peace.png';
    scissorsImage.style.display ='block';

       // Hide the rock image after 1 second
       setTimeout(function() {
        scissorsImage.style.display = 'none';
    }, 2500);
}



function computerDisplayRock () {

    let computerRockImage = document.getElementById('computerRock');

    computerRockImage.src = 'image/fist.png';
    computerRockImage.style.display ='block';

       // Hide the rock image after 1 second
       setTimeout(function() {
        computerRockImage.style.display = 'none';
    }, 2500);
}


function computerDisplayPaper () {

    let computerPaperImage = document.getElementById('computerPaper');

    computerPaperImage.src = 'image/hand.png';
    computerPaperImage.style.display ='block';

       // Hide the rock image after 1 second
       setTimeout(function() {
        computerPaperImage.style.display = 'none';
    }, 2500);
}

function computerDisplayScissors () {

    let computerScissorsImage = document.getElementById('computerScissors');

    computerScissorsImage.src = 'image/peace.png';
    computerScissorsImage.style.display ='block';

       // Hide the rock image after 1 second
       setTimeout(function() {
        computerScissorsImage.style.display = 'none';
    }, 2500);
}


function openModalWin() {
    // Get the modal element
    var modal = document.getElementById("winModal");

    // Display the modal
    modal.style.display = "block";

    // Automatically close the modal after 3 seconds
    setTimeout(function() {
        modal.style.display = "none";
    }, 1500);
}

function openModalLose() {
    // Get the modal element
    var modal = document.getElementById("loseModal");

    // Display the modal
    modal.style.display = "block";

    // Automatically close the modal after 3 seconds
    setTimeout(function() {
        modal.style.display = "none";
    }, 1500);
}

function openModalTie() {
    // Get the modal element
    var modal = document.getElementById("tieModal");

    // Display the modal
    modal.style.display = "block";

    // Automatically close the modal after 3 seconds
    setTimeout(function() {
        modal.style.display = "none";
    }, 1500);
}