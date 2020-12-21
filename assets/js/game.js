
const playerName = prompt("What is your robot's name?");
let playerHealth = 100;
let playerAttack = 10;

// enemy info
let enemyName = 'Roborto';
let enemyHealth = 50;
let enemyAttack = 12;

const fight = () => {
    // Alert players that they are starting the round
    alert('Welcome to Robot Gladiators');

    /*Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable*/
    enemyHealth -= playerAttack;

    // Log a resulting message to the console so we know that it worked.
    let enemyResult = `${playerName} attacked ${enemyName}. ${enemyName}, now has ${enemyHealth} health remaining.`;

    console.log(enemyResult);

    /* Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.*/
    playerHealth -= enemyAttack;

    // Log a resulting message to the console so we know that it worked.
    let PlayerResult = `${enemyName} attacked ${playerName}. ${playerName}, now has ${playerHealth} health remaining.`;

    console.log(PlayerResult);

    // check enemy's health
    if (enemyHealth <= 0) {
        alert(`${enemyName} has died!`);
    } else {
        alert(`${enemyName} still has ${enemyHealth} health left.`);
    }

    // check player's health
    if (playerHealth <= 0) {
        alert(`${playerName} has died!`);
    } else {
        alert(`${playerName} still has ${playerHealth} health left.`);
    }

}

fight();
