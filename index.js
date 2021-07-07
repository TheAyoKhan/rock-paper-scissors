  const openingMessageEl = document.querySelector(".opening-message")
  const weaponsEl = document.querySelector(".weapons");
  const weaponEls = document.querySelectorAll(".weapon");
  const playerChoiceEl = document.querySelector(".player-choice");
  const enemyChoiceEl = document.querySelector(".enemy-choice");
  const outcomeEl = document.querySelector(".outcome");

  const weaponsArr = ["Rock", "Paper", "Scissors"]

  function rockPaperScissors(e) {
    let playerChoice = getPlayerWeapon(e);
    let { i, enemyChoice } = chooseEnemyWeapon();
    let outcome = determineOutcome(playerChoice, enemyChoice, i, weaponsArr);
    changeHTML(outcome, outcomeEl, playerChoice, enemyChoice);
  }

  function getPlayerWeapon(e) {
    let playerChoice = e.target.innerText;
    return playerChoice;
  }

  function chooseEnemyWeapon() {
    let i = Math.floor(Math.random() * (2 + 1));
    let enemyChoice = weaponsArr[i];
    return { i, enemyChoice };
  }

  function determineOutcome(playerChoice, enemyChoice, weaponNumber, weaponsArr) {
    switch (playerChoice) {
      case enemyChoice:
        return "Tie";
      case weaponsArr[weaponNumber - 1]:
        return "Lose";
      default:
        return "Won";
    }
  }

  function changeHTML(outcome, outcomeEl, playerChoice, enemyChoice) {
    openingMessageEl.style.display = "none";
    weaponsEl.style.display = "none";

    playerChoiceEl.innerHTML = `<strong>Your</strong> weapon of choice was ${playerChoice}`;
    enemyChoiceEl.innerHTML = `The <strong>enemy's</strong> weapon of choice was ${enemyChoice}`;

    switch (outcome) {
      case "Tie":
        outcomeEl.innerText = "The game was a tie."
        break;
      case "Lose":
        outcomeEl.innerText = "You lost! Better luck next time."
        break;
      default:
        outcomeEl.innerText = "Congratulations! You won the match!"
        break;
    }
  }

  weaponEls.forEach(weapon => {
    weapon.addEventListener("click", rockPaperScissors);
  })

