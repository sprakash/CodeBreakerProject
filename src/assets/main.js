let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here

    if(answer.length == 0 || attempt.length == 0) {
    	setHiddenFields();
    }

    if(!validateInput(input.value)) {
    	return false;
    } else {
    	attempt += 1;
    }

    if(getResults(input.value)) {
    	setMessage("You Win! :)");
    	showAnswer(true);
    	showReplay();
    } else if(attempt.value >= 10) {
    		setMessage("You Lose! :(");
    		showAnswer(false);
    		showReplay();
    } else {
    	setMessage("Incorrect, try again.");
    }
}

//implement new functions here

function setHiddenFields() {
	let ans = Math.floor((Math.random() * 9999) + 1);

	let temp = '';
	while(ans.length < 4) {
		temp =  "0" + ans.toString();
	}

	answer.value = temp;
	attempt = 0;
}

function setMessage(message) {
	document.getElementById('message').innerHTML = message;
}

function validateInput(inp) {
	if(inp.length === 4 ) {
		return  true;
	} else {
		setMessage("Guesses must be exactly 4 characters long.");
		return false;
	}
}

function getResults(res) {

	let begin = '<div class="row"><span class="col-md-6">';
	let end = '</span><div class="col-md-6">';

	let correct = 0; 

	for (let i = 0; i < res.length; i++){

	
		if(answer.charAt(i) == res.charAt(i)){
			
			correct += 1; 

			if(i == res.length - 1) {
				res = res + '<span class="glyphicon glyphicon-ok"></span>';
			}

		} else {

			if(answer.includes(res.charAt(i))) { 

				if(i == res.length - 1) {
					res = res + '<span class="glyphicon glyphicon-transfer"></span>';
				}

			} else {

				if(i == res.length - 1) {
					res = res + '<span class="glyphicon glyphicon-remove"></span>';
				}
			}

		}
	  
	} 

	document.getElementById("results").innerHTML = begin + res + end;

	if(correct === res.length) {
		return true;
	} else {
		return false;
	}

}

function showAnswer(isWinner) {

	let code = document.getElementById("code");
	code.innerHTML = answer.value; 

	if(isWinner) {
		code.className += " success";
	} else {
		code.className += " failure";
	}
}

function showReplay() {
	let guessing = document.getElementById('guessing-div');
	guessing.style.display = 'none';

	let replay = document.getElementById('replay-div');
	replay.style.display = 'block';
}