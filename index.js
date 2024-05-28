// Write your code here!
const mainElement = document.getElementById('main');
if (mainElement) {
    mainElement.remove();
}

const newHeader = document.createElement('h1');

newHeader.id = 'victory';

document.body.appendChild(newHeader);

const yourName = 'Justin Steffen'; 
newHeader.textContent = `${yourName} is the champion`;