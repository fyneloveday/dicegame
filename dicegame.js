function diceRoll(sides){
	let result = Math.floor((Math.random() * sides) + 1);
	return result;
}
	
function phase1(){
	let result = diceRoll(4);
	if (result === 1){
		console.log("King");
	}
	else if (result === 2){
	console.log("Sherriff");
	}
	else if (result === 3){
		console.log("Clergy");
	}
	else if (result === 4){
		console.log("Physician");
	}
}

function phase2(){
	let result = diceRoll(4);
	if (result === 1){
		console.log("Attack");
	}	
	else if (result === 2){
		console.log("Defend");
	}
	else if (result === 3){
		console.log("Infiltrate")
	}
	else if (result === 4){
		console.log("Betray")
	}
	else{
		console.log("Select a move.");
	}
}


function phase3(){
	let result = diceRoll(4, 6, 8, 10, 12, 20);
	let userInput = prompt("How many dice do you want to roll?");
	let dieNumber1;
	let playerMove1;
	let dieNumber2;
	let playerMove2;
	let dieNumber3;
	let playerMove3;
	let dieNumber4;
	let playerMove4;
	let dieNumber5;
	let playerMove5;
	let dieNumber6;
	let playerMove6;

	switch(userInput)
	{
		case "1":
			dieNumber1 = prompt("which die?");
			 playerMove1 = diceRoll(dieNumber1);
			 let returnArray = playerMove1;
			return returnArray;
		case "2":
			 dieNumber1 = prompt("which die?");
			 playerMove1 = diceRoll(dieNumber1);
			 dieNumber2 = prompt("which die");
			 playerMove2 = diceRoll(dieNumber2);
			return playerMove1 + playerMove2;
		case "3":
			 dieNumber1 = prompt("which die");
			 playerMove1 = diceRoll(dieNumber1);
			 dieNumber2 = prompt("which die");
			 playerMove2 = diceRoll(dieNumber2);
			 dieNumber3 = prompt ("which die");
			 playerMove3 = diceRoll(dieNumber3);
			return playerMove1 + playerMove2 +  playerMove3;
		case "4":
			 dieNumber1 = prompt("which die");
			 playerMove1 = diceRoll(dieNumber1);
			 dieNumber2 = prompt("which die");
			 playerMove2 = diceRoll(dieNumber2);
			 dieNumber3 = prompt ("which die");
			 playerMove3 = diceRoll(dieNumber3);
			 dieNumber4 = prompt ("which die");
			 playerMove4 = diceRoll (dieNumber4);
			return playerMove1 + playerMove2 + playerMove3 + playerMove4;
		case "5":
			 dieNumber1 = prompt ("which die");
			 playerMove1 = diceRoll (dieNumber1);
			 dieNember2 = prompt("which die");
			 playerMove2 = diceRoll (dieNumber2);
			 dieNumber3 = prompt ("which die");
			 playerMove3 = diceRoll (dieNumber3);
			 dieNumber4 = prompt ("which die");
			 playerMove4 = diceRoll (dieNumber4);
			 dieNumber5 = prompt ("which die");
			 playerMove5 = diceRoll (dieNumber5);
			return playerMove1 + playerMove2 + playerMove3 + playerMove4 + playerMove5;
		case "6":
			 dieNumber1 = prompt ("which die");
			 playerMove1 = diceRoll(dieNumber1);
			 dieNumber2 = prompt ("which die");
			 playerMove2 = diceRoll(dieNumber2);
			 dieNumber3 = prompt ("which die");
			 playerMove3 = diceRoll(dieNumber3);
			 dieNumber4 = prompt ("which die");
			 playerMove4 = diceRoll(dieNumber4);
			 dieNumber5 = prompt ("which die");
			 playerMove5 = diceRoll(dieNumber5);
			 dieNumber6 = prompt ("which die");
			 playerMove6 = diceRoll(dieNumber6);
			 return playerMove1 + playerMove2 + playerMove3;
		case 7:
			default:
			break;
	}
}


function runGame(){
	let player1Score = 0;
	phase1();
	phase2();
	player1Score += phase3();
	if(player1Score < 150){
	 player1Score += phase3();
	 console.log(player1Score);	
	}else if(player1Score > 150){
		console.log(player1Score)
	 phase1();
	}else{
		console.log("You Win!")
	}
}


runGame();