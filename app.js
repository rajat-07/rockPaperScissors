var userScore = 0;
var compScore = 0;
var userScore_span = document.getElementById("user-score");
var compScore_span = document.getElementById("comp-score");
var scoreBoard_div = document.querySelector(".score-board");
var result_p = document.querySelector(".result>p");
var rock_div = document.getElementById("r");
var paper_div = document.getElementById("p");
var scissor_div = document.getElementById("s");

function getComputerChoice(){
	const choices = ['r','p','s'];
	var randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convertToWord(letter){
	if(letter == "r") return "Rock";
	if(letter == "p") return "Paper";
	if(letter == "s") return "Scissor";
}

function win(userChoice,compChoice){
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	const userChoice_div = document.getElementById(userChoice);
	userScore++;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore; 
	result_p.innerHTML = convertToWord(userChoice) + smallUserWord + "  beats  " + convertToWord(compChoice) + smallCompWord + " . You Won !";
    userChoice_div.classList.add('green-glow');
    setTimeout(function(){userChoice_div.classList.remove('green-glow')},300);
}

function lose(userChoice,compChoice){
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	const userChoice_div = document.getElementById(userChoice);
	compScore++;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	result_p.innerHTML = convertToWord(userChoice) + smallUserWord + "  loses to  " + convertToWord(compChoice) + smallCompWord + " . You lost...";
    userChoice_div.classList.add('red-glow');
    setTimeout(function(){userChoice_div.classList.remove('red-glow')},300);
}

function draw(userChoice,compChoice){
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	const userChoice_div = document.getElementById(userChoice);
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	result_p.innerHTML = convertToWord(userChoice) + smallUserWord + "  equals  " + convertToWord(compChoice) + smallCompWord + " . It's a draw";
    userChoice_div.classList.add('grey-glow');
    setTimeout(function(){userChoice_div.classList.remove('grey-glow')},300);
}

function game(userChoice){
	var compChoice = getComputerChoice();
	switch(userChoice + compChoice){
		case"rs":
		case"pr":
		case"sp":
		  win(userChoice,compChoice);
		  break;
		case"rp":
		case"ps":
		case"sr":
		  lose(userChoice,compChoice);
		  break;
	    case"rr":
		case"pp":
		case"ss":
		  draw(userChoice,compChoice);
		  break;

	}
}

function main(){
	rock_div.addEventListener('click',function(){
		game("r");
	});

	paper_div.addEventListener('click',function(){
		game("p");
	});

	scissor_div.addEventListener('click',function(){
		game("s");
	});
}

main();