const dice = document.getElementById('dice');
const rollButton = document.getElementById('roll-button');
const rollHistory = document.getElementById('roll-history');

const faces = [
    '&#9856;', // 1
    '&#9857;', // 2
    '&#9858;', // 3
    '&#9859;', // 4
    '&#9860;', // 5
    '&#9861;'  // 6
];

let rollCount = 0;

rollButton.addEventListener('click', () => {
    rollButton.disabled = true; // Disable button during animation
    dice.classList.remove('roll-animation');
    
    setTimeout(() => {
        const randomFace = Math.floor(Math.random() * 6);
        dice.innerHTML = faces[randomFace];
        dice.classList.add('roll-animation');

        // Increment roll count and add to history
        rollCount++;
        const rollRecord = document.createElement('li');
        rollRecord.innerHTML = `Roll ${rollCount}: <span>${faces[randomFace]}</span>`;
        rollHistory.appendChild(rollRecord);

        rollButton.disabled = false; // Re-enable button after roll
    }, 500); // Adjust animation delay as needed
});
