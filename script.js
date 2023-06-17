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

