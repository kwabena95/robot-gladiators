// generate enemy health at random
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const startGame = () => {
    playerInfo.reset();

    for (let i = 0; i < enemyInfo.length; i++) {

        // if player is still alive, keep fighting
        if (playerInfo.health > 0) {

            // let the player know what round they are in
            console.log('Welcome to Robot Gladiators!' + (i + 1));

            // pick new enemy from array
            let pickedEnemyObj = enemyInfo[i];

            // reset next enemy health
            pickedEnemyObj.health = randomNumber(40, 60);

            // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
            fight(pickedEnemyObj);

        } else {
            break;
        }
    }

    // end game
    endGame();
};

// fight or skip function
const fightOrSkip = () => {
    // ask player if they'd like to fight or skip using fightOrSkip function
    let promptFight = prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
    promptFight = promptFight.toLocaleLowerCase();
    // Conditional Recursive Function Call
    if (promptFight === '' || promptFight === null) {
        console.log("You need to provide a valid answer! Please try again.");
        return fightOrSkip();
    }

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === 'skip' || promptFight === 'SKIP') {
        //  confirm player wants to skip
        const confirmSkip = confirm('Are you sure you want to quit?');
        //if yes (true), leave fight
        if (confirmSkip) {
            console.log(`${playerInfo.name} has decided to skip this fight. Goodbye!`);

            // subtract money from player money
            playerInfo.playerMoney = Math.max(0, playerInfo.money - 10);

            // return true if player wants to leave
            return true;
            // call shop()
            shop();
        }
    }

}

// function to set name
const getPlayerName = () => {
    let name = "";
    while (name === "" || name === null) {
        name = prompt("What is your robot's name?");
    }
    return name;
}
// end entire game
const endGame = () => {
    console.log("The game has now ended. Let's see how you did!");

    // if player is alive, player win!
    if (playerInfo.health > 0) {

        console.log(`"Great job, you've survived the game! You now have a score of ${playerInfo.money}.`);
    } else {
        console.log("You've lost your robot in battle.");
    }

    //ask if player wants to play again
    const playAgainConfirm = confirm('Would you like to play again?');
    if (playAgainConfirm) {
        //restart game
        startGame();

    } else {
        console.log("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

// fight function

const fight = (enemy) => {

    while (enemy.health > 0 && playerInfo.health > 0) {
        if (fightOrSkip()) {
            // if true, leave fight by breaking loop
            break;
        }

        /*Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable*/
        let damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
        enemy.health = Math.max(0, enemy.health - damage);

        // Log a resulting message to the console so we know that it worked.
        let enemyResult = `${playerInfo.name} attacked ${enemy.name}. ${enemy.name}, now has ${enemy.health} health remaining.`;

        console.log(enemyResult);

        // check enemy's health
        if (enemy.health <= 0) {
            console.log(`${enemy.name} has died!`);

            // award player money for winning
            playerInfo.money += 20;
            // ask if player wants to use the store before nex round
            let storeConfirm = confirm('The fight is over, visit the store before the next round?');
            // if yes, take them to the shop()
            if (storeConfirm) {
                // call shop()
                shop();
            }
            break;
        } else {
            console.log(`${enemy.name} still has ${enemy.health} health left.`);
        }

        /* Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.*/
        damage = randomNumber(enemy.attack - 3, enemy.attack);
        playerInfo.health = Math.max(0, playerInfo.health - damage);

        // Log a resulting message to the console so we know that it worked.
        let PlayerResult = `${enemy.name} attacked ${playerInfo.name}. ${playerInfo.name}, now has ${playerInfo.health} health remaining.`;

        console.log(PlayerResult);

        // check player's health
        if (playerInfo.health <= 0) {
            console.log(`${playerInfo.name} has died!`);
            // leave loop if player dies
            break;
        } else {
            console.log(`${playerInfo.name} still has ${playerInfo.health} health left.`);
        }

    }

}

// shop function
const shop = () => {
    // ask player what they'd like to do
    const shopOptionPrompt = prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );

    switch (shopOptionPrompt) {
        case "REFILL":
        case "refill":
            playerInfo.refillHealth();
            break;
        case "UPGRADE":
        case "upgrade":
            playerInfo.upgradeAttack();
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

// player object info
const playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset() {
        this.health = 100;
        this.attack = 10;
        this.money = 10;
    },
    refillHealth() {
        if (this.money >= 7) {
            console.log("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
        } else {
            console.log("You don't have enough money!");
        }

    },
    upgradeAttack() {
        if (this.money >= 7) {
            console.log("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        } else {
            console.log("You don't have enough money!");
        }

    }
};

// enemy object info
const enemyInfo = [
    {
        name: 'Roborto',
        attack: randomNumber(10, 14),
        shield: {
            type: "wood",
            strength: 10
        }
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }

];

console.log("Enemy name:", enemyInfo[0].name);
console.log("Enemy attack point:", enemyInfo[0]['attack']);

// start first game when page loads

startGame();


