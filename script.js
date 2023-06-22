function ensureFormChoice(){
    const pOneO = document.querySelector('input[name="pOneO"]');
    const pTwoX = document.querySelector('input[name="pTwoX"]');

    const pOneX = document.querySelector('input[name="pOneX"]');
    const pTwoO = document.querySelector('input[name="pTwoO"]');

    pOneO.addEventListener('change', function() {
        if (this.checked) {
            pOneX.checked = false;
            pTwoX.checked = true;
            pTwoO.checked = false;
        
        }
    });
    pOneX.addEventListener('change', function() {
        if (this.checked) {
            pOneO.checked = false;
            pTwoX.checked = false;
            pTwoO.checked = true;
        
        }
    });

    pTwoX.addEventListener('change', function() {
        if (this.checked) {
            pTwoO.checked = false;
            pOneO.checked = true;
            pOneX.checked = false;
        }
    });

    pTwoO.addEventListener('change', function() {
        if (this.checked) {
            pTwoX.checked = false;
            pOneO.checked = false;
            pOneX.checked = true;
        }
    });
}
document.querySelector("#player-choice-form").addEventListener("submit", function(event){
    event.preventDefault();
})

const playerFactory = (name,symbol,points) => {
    return {name,symbol,points}  
}

let tttBoard = [];

tttBoard = getTTTBoard();
console.log(tttBoard);

function getTTTBoard(){
    let array= [];
    let row = 3;
    let col = 3;
    
    for(var i = 0; i < row;i++) {
        array[i]=[];
        for (var j = 0; j < col; j++){
            array[i][j] =[];
        }
    }
    return array;
}

var form = document.getElementById('player-choice-form')

form.addEventListener('submit',function(event){
    event.preventDefault()

    var getPlOneName = document.getElementById('pOneName').value
})