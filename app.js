let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');
const lizard_div = document.getElementById('lizard');
const spock_div = document.getElementById('spock');

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const computerChoice = choices[Math.floor(Math.random() * 5)];
    return computerChoice;
}

function capitalizeWord(letter) {
    if (letter === 'rock') return 'Rock';
    if (letter === 'paper') return 'Paper';
    if (letter === 'scissors') return 'Scissors';
    if (letter === 'lizard') return 'Lizard';
    if (letter === 'spock') return 'Spock';
}

function win(user, computer) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${capitalizeWord(user)} beats ${capitalizeWord(computer)}. You win!`;
}

function lose(user, computer) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${capitalizeWord(user)} loses to ${capitalizeWord(computer)}. Computer wins.`;
}

function draw(user, computer) {
    result_p.innerHTML = `${capitalizeWord(user)} matches ${capitalizeWord(computer)}. Nobody wins.`;
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
        case 'rocklizard':
        case 'lizardspock':
        case 'spockscissors':
        case 'scissorslizard':
        case 'lizardpaper':
        case 'paperspock':
        case 'spockrock':
            win(userChoice, computerChoice);
            break;
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
        case 'lizardrock':
        case 'spocklizard':
        case 'scissorsspock':
        case 'lizardscissors':
        case 'paperlizard':
        case 'spockpaper':
        case 'rockspock':
            lose(userChoice, computerChoice);
            break;
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
        case 'lizardlizard':
        case 'spockspock':
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game('rock');
    })
    paper_div.addEventListener('click', function() {
        game('paper');
    })
    scissors_div.addEventListener('click', function() {
        game('scissors');
    })
    lizard_div.addEventListener('click', function() {
        game('lizard');
    })
    spock_div.addEventListener('click', function() {
        game('spock');
    })
}

main();