const choiceBox = document.querySelector('.choice-box');

const choiceBox2 = document.querySelector('.choice-box2');

const resultDiv = document.querySelector('.result-div');

const resultDiv2 = document.querySelector('.result-div2');

const score = document.querySelector('.score');

const score2 = document.querySelector('.score2');

const choices = document.querySelectorAll('.choices');

const dialog1 = document.querySelector('.user-dialog');

const dialog2 = document.querySelector('.ai-dialog');

const userBtn = document.querySelector('.user-btn');

const aiBtn = document.querySelector('.ai-btn');

let usersScore = 0;
let computersScore = 0;

choices.forEach((item) => {
  item.addEventListener('click', () => {
    const userChoice = item.dataset.value;

    resultDiv.innerText = '';

    resultDiv2.innerText = '';

    function AI() {
      let choice = Math.floor(Math.random() * 3);
      switch (choice) {
        case 0:
          choice = 'ROCK';
          break;
        case 1:
          choice = 'PAPER';
          break;
        case 2:
          choice = 'SCISSORS';
      }
      return choice;
    }

    const computer = AI();
    const user = userChoice;

    if (user === 'ROCK') {
      choiceBox.innerHTML = `<img src="img/rock.png" class="w-32 dark:invert" alt="" />`;
    } else if (user === 'PAPER') {
      choiceBox.innerHTML = `<img src="img/paper.png" class="w-32 dark:invert" alt="" />`;
    } else {
      choiceBox.innerHTML = `<img src="img/scissors.png" class="w-32 dark:invert" alt="" />`;
    }

    if (computer === 'ROCK') {
      choiceBox2.innerHTML = `<img src="img/rock.png" class="w-32 invert" alt="" />`;
    } else if (computer === 'PAPER') {
      choiceBox2.innerHTML = `<img src="img/paper.png" class="w-32 invert" alt="" />`;
    } else {
      choiceBox2.innerHTML = `<img src="img/scissors.png" class="w-32 invert" alt="" />`;
    }

    let usersMove = user.toLowerCase();
    let computersMove = computer.toLowerCase();

    function result(user, ai) {
      if (user === 'rock' || user === 'paper' || user === 'scissors') {
        if (user === ai) {
          resultDiv.innerText = `Round Tied`;
          resultDiv2.innerText = `Round Tied`;
          return;
        }
        if (
          (user === 'rock' && ai === 'scissors') ||
          (user === 'paper' && ai === 'rock') ||
          (user === 'scissors' && ai === 'paper')
        ) {
          resultDiv.innerText = 'You won this round';
          usersScore++;
        } else {
          resultDiv2.innerText = 'AI won this round';
          computersScore++;
        }
      }
    }

    result(usersMove, computersMove);

    score.innerText = `Score: ${usersScore}`;
    score2.innerText = `Score: ${computersScore}`;

    if (usersScore === 5) {
      dialog1.showModal();
    }

    if (computersScore === 5) {
      dialog2.showModal();
    }

    userBtn.addEventListener('click', () => {
      usersScore = 0;
      computersScore = 0;
      score.innerText = `Score: 0`;
      score2.innerText = `Score: 0`;
      choiceBox.innerHTML = '';
      choiceBox2.innerHTML = '';
      resultDiv.innerText = '';
      resultDiv2.innerText = '';

      dialog1.close();
    });

    aiBtn.addEventListener('click', () => {
      usersScore = 0;
      computersScore = 0;
      score.innerText = `Score: 0`;
      score2.innerText = `Score: 0`;
      choiceBox.innerHTML = '';
      choiceBox2.innerHTML = '';
      resultDiv.innerText = '';
      resultDiv2.innerText = '';

      dialog2.close();
    });
  });

  item.addEventListener('click', () => {
    navigator.vibrate(20);
  });
});
