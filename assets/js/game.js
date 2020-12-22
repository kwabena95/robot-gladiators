
const playerName = prompt("What is your robot's name?");
let playerHealth = 100;
let playerAttack = 10;
let playerMoney = 10;

// enemy info
let enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
let enemyHealth = 50;
let enemyAttack = 12;

const fight = (enemyName) => {
    // Alert players that they are starting the round
    alert('Welcome to Robot Gladiators');
    const promptFight = prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // if player choses to fight, then fight
    if (promptFight === 'FIGHT' || promptFight === 'fight') {
        /*Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable*/
        enemyHealth -= playerAttack;

        // Log a resulting message to the console so we know that it worked.
        let enemyResult = `${playerName} attacked ${enemyName}. ${enemyName}, now has ${enemyHealth} health remaining.`;

        console.log(enemyResult);
        // check enemy's health
        if (enemyHealth <= 0) {
            alert(`${enemyName} has died!`);
        } else {
            alert(`${enemyName} still has ${enemyHealth} health left.`);
        }

        /* Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.*/
        playerHealth -= enemyAttack;

        // Log a resulting message to the console so we know that it worked.
        let PlayerResult = `${enemyName} attacked ${playerName}. ${playerName}, now has ${playerHealth} health remaining.`;

        console.log(PlayerResult);

        // check player's health
        if (playerHealth <= 0) {
            alert(`${playerName} has died!`);
        } else {
            alert(`${playerName} still has ${playerHealth} health left.`);
        }


    }// if player choses to skip
    else if (promptFight === 'skip' || promptFight === 'SKIP') {
        //confirm player wants to skip
        const confirmSkip = confirm('Are you sure you want to quit?');
        //if yes (true), leave fight
        if (confirmSkip) {
            alert(`${playerName} has decided to skip this fight. Goodbye!`);
            playerName -= 2
        } //if no (false), ask question again by running fight() again
        else {
            fight();
        }
    }
    else {
        alert('You need tp choose a valid option. Try again!');
    }

}

for (let i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}

