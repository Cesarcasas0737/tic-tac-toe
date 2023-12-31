function hideForm(){
    var div = document.getElementById("welcomeScreen")
    div.classList.add("hidden")
}

function ensureFormChoice(){
    const pOneO = document.querySelector('input[name="pOneO"]');
    const pTwoX = document.querySelector('input[name="pTwoX"]');
    const pOneX = document.querySelector('input[name="pOneX"]');
    const pTwoO = document.querySelector('input[name="pTwoO"]');

    pOneO.addEventListener('change', function() {
        if (this.checked) {
            document.getElementById("pOneSymbol").value = 'O';
            document.getElementById("pTwoSymbol").value = 'X';
            pOneX.checked = false;
            pTwoX.checked = true;
            pTwoO.checked = false;
        
        }
    });
    pOneX.addEventListener('change', function() {
        if (this.checked) {
            document.getElementById("pOneSymbol").value = 'X';
            document.getElementById("pTwoSymbol").value = 'O';
            pOneO.checked = false;
            pTwoX.checked = false;
            pTwoO.checked = true;
        
        }
    });

    pTwoO.addEventListener('change', function() {
        if (this.checked) {
            document.getElementById("pOneSymbol").value = 'X';
            document.getElementById("pTwoSymbol").value = 'O';
            pTwoX.checked = false;
            pOneO.checked = false;
            pOneX.checked = true;
        }
    });

    pTwoX.addEventListener('change', function() {
        if (this.checked) {
            document.getElementById("pTwoSymbol").value = 'X';
            document.getElementById("pOneSymbol").value = 'O';
            pTwoO.checked = false;
            pOneO.checked = true;
            pOneX.checked = false;
        }
    });  
}

function getFormInfo(){
    var form = document.getElementById('player-choice-form')
    form.addEventListener('submit',function(event){
        event.preventDefault()
    
        var getPlOneName = document.getElementById('pOneName').value;
        var getPlOneSymbol = document.getElementById('pOneSymbol').value;

        var getPlTwoName = document.getElementById('pTwoName').value;
        var getPlTwoSymbol = document.getElementById('pTwoSymbol').value;

        var array= [getPlOneName,getPlOneSymbol,getPlTwoName,getPlTwoSymbol];
        /*console.log(array)*/
        
        playerOne = playerFactory(array[0],array[1],0);
        playerTwo = playerFactory(array[2],array[3],0);
        updateScoreInfo()
        hideForm();
    })
    
}

function updateScoreInfo(){
    var playerOneScore = document.querySelector("#playerOneScore")
    var playerTies = document.querySelector("#playerTies")
    var playerTwoScore = document.querySelector("#playerTwoScore")

    playerOneScore.innerHTML = playerOne.name + ":" +playerOne.points;
    playerTies.innerHTML = "Ties:" + tiesScore;
    playerTwoScore.innerHTML = playerTwo.name + ":" +playerTwo.points;
}


/*
function incrementScoreboard(result){
    switch(result){
        case "playerOneWin":
            playerOne.points++;
        case "playerTwoWin":
            playerTwo.points++;
        case "tie":
            tiesScore++;
            break;
        default:
            console.log("Invalid result");
    }
}
*/

const playerFactory = (name,symbol,points) => {
    return {name,symbol,points}  
}

let playerOne;
let playerTwo;
let tiesScore = 0;
let tttBoard = [];

tttBoard = getTTTBoard();
console.log(tttBoard);

function assignSymbol(i,j){

}

function getTTTBoard() {
    let row = 3;
    let col = 3;
    let boardEl = document.querySelector("#grid-content");
    boardEl.innerHTML = "";
  
    let tttBoard = [];
  
    for (var i = 0; i < row; i++) {
      tttBoard[i] = [];
      for (var j = 0; j < col; j++) {
        let squareEL = document.createElement("div");
        squareEL.className = "square";
        boardEl.appendChild(squareEL);
        tttBoard[i][j] = squareEL;
      }
    }
    console.log(tttBoard)
  }
getTTTBoard();




