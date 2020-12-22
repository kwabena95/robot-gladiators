
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
    console.log('Welcome to Robot Gladiators');

    while (enemyHealth > 0 && playerHealth > 0) {
        const promptFight = prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

        // if player choses to skip confirm and then stop the loop
        if (promptFight === 'skip' || promptFight === 'SKIP') {
            //confirm player wants to skip
            const confirmSkip = confirm('Are you sure you want to quit?');
            //if yes (true), leave fight
            if (confirmSkip) {
                console.log(`${playerName} has decided to skip this fight. Goodbye!`);

                // subtract money from player money
                playerMoney -= 10;
                break;
            }
        }

        /*Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable*/
        enemyHealth -= playerAttack;

        // Log a resulting message to the console so we know that it worked.
        let enemyResult = `${playerName} attacked ${enemyName}. ${enemyName}, now has ${enemyHealth} health remaining.`;

        console.log(enemyResult);

        // check enemy's health
        if (enemyHealth <= 0) {
            console.log(`${enemyName} has died!`);
            playerMoney += 20;
            break;
        } else {
            console.log(`${enemyName} still has ${enemyHealth} health left.`);
        }

        /* Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.*/
        playerHealth -= enemyAttack;

        // Log a resulting message to the console so we know that it worked.
        let PlayerResult = `${enemyName} attacked ${playerName}. ${playerName}, now has ${playerHealth} health remaining.`;

        console.log(PlayerResult);

        // check player's health
        if (playerHealth <= 0) {
            console.log(`${playerName} has died!`);
            break;
        } else {
            console.log(`${playerName} still has ${playerHealth} health left.`);
        }

    }

}

const startGame = () => {
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for (let i = 0; i < enemyNames.length; i++) {

        // if player is still alive, keep fighting
        if (playerHealth > 0) {

            // let the player know what round they are in
            console.log('Welcome to Robot Gladiators!' + (i + 1));

            // pick new enemy from array
            let pickedEnemyName = enemyNames[i];

            // reset next enemy health
            enemyHealth = 50;

            // use debugger to pause script from running and check what's going on at that moment in the code
            debugger;

            // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
            fight(pickedEnemyName);

        } else {
            // alert user that they have lost.
            console.log("You have lost your robot in battle! Game Over!");
            break;
        }
    }

    fight(pickedEnemyName);
    if (playHealth > 0 && i < enemyNames.length - 1) {
        // ask if player wants to use the store before next round
        const storeConfirm = confirm("The fight is over, visit the store before the next round?");
        // if yes, take them to the store() function
        if (storeConfirm) {
            shop();
        }

    }

    // end game
    endGame();
};

// end entire game
const endGame = () => {
    // if player is alive, player win!
    if (playerHealth > 0) {
        // ask if player wants to play again
        const playAgainConfirm = confirm('Would you like to play again?');
        if (playAgainConfirm) {
            //restart game
            startGame();
        } else {
            console.log("Thank you for playing Robot Gladiators! Come back soon!");
        }
        console.log(`"Great job, you've survived the game! You now have a score of ${playerMoney}.`);
    } else {
        console.log("You've lost your robot in battle.");
    }

};

// shop function
const shop = () => {
    // ask player what they'd like to do
    const shopOptionPrompt = prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );

    switch (shopOptionPrompt) {
        case "REFILL":
        case "refill":
            if (playerMoney >= 7) {
                console.log("Refilling player's health by 20 for 7 dollars.");

                //   increase health and decrease money
                playerHealth += 20;
                playerMoney -= 7;
            } else {
                console.log("You do not have enough money!");
            }

            break;
        case "UPGRADE":
        case "upgrade":
            if (playerMoney >= 7) {
                console.log("Upgrading player's attack by 6 for 7 dollars.");

                // increase attack and decrease money
                playerAttack += 6;
                playerMoney -= 7;
            } else {
                console.log("You don't have enough money!");
            }

            break;
        case "LEAVE":
        case "leave":
            console.log("leaving the store.");
            break;
        default:
            console.log("You did not pick a valid option. Try again.");

            // call shop() again
            shop();
            break;

    }
};



