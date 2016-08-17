var counter = 0,
		turn = "x",
		// since 9 td's. This returns an array of them all
		tds = document.querySelectorAll('td'),
		resetButton = document.getElementById('reset'),
		gameBoard = [
			1, 2, 3,
			4, 5, 6,
			7, 8, 9
			];

// add click listeners
tds.forEach(function(td){
	td.addEventListener('click', function() {
		// 'this' refers to what is clicked.
		// when an item is clicked
		// check the gameboard to see if item's ID 
		// matches any elements in the gameboard array'
		for(var i = 0; i < gameBoard.length; i++){
			if(gameBoard[i]=== Number(this.id)){
				counter++;
				if(turn === "x") { 
					turn = "o";
				} else {
					turn = "x";
				}
				gameBoard[i] = turn;
				this.textContent = turn;
				checkWinner();
			}
		}
	});
});

// The moment we run our page it parses and runs the code
// Therefore everything with var gets hoisted to the top and sets them equal to nothing
// then as we run through (runtime) it changes everything to it's actual value
resetButton.addEventListener('click', reset());

function checkWinner() {
	if (gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2]) {
		alert(turn + ' wins!');
		setTimeout(reset, 2000)
	} else if (gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5]) {
		alert(turn + ' wins!');
		setTimeout(reset, 2000)
	} else if (gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8]) {
		alert(turn + ' wins!');
		setTimeout(reset, 2000)
	} else if (gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6]) {
		alert(turn + ' wins!');
		setTimeout(reset, 2000)
	} else if (gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7]) {
		alert(turn + ' wins!');
		setTimeout(reset, 2000)
	} else if (gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8]) {
		alert(turn + ' wins!');
		setTimeout(reset, 2000)
	} else if (gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8]) {
		alert(turn + ' wins!');
		setTimeout(reset, 2000)
	} else if (gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6]) {
		alert(turn + ' wins!');
	} else if (counter === 9) {
		alert("It's a draw!");
		setTimeout(reset, 2000)
	}
}

function reset(){
	counter = 0;
	gameBoard = [
	1, 2, 3,
	4, 5, 6,
	7, 8, 9
	];
	tds.forEach(function(td){
		td.textContent = '';
	});
}
