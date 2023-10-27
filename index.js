const homeScore = document.getElementById('home-score');
console.log(homeScore)

const guestScore = document.getElementById('guest-score');
console.log(guestScore)

let homeCount = 0;

let guestCount = 0;


function addOne() {
    console.log('+ 1 clicked')
    homeCount += 1;
    homeScore.textContent = homeCount;
}

function addTwo() {
    console.log('+ 2 clicked')
    homeCount += 2;
    homeScore.textContent = homeCount;
}

function addThree() {
    console.log('+ 3 clicked')
    homeCount += 3;
    homeScore.textContent = homeCount;
}

function addOneGuest() {
    console.log('+ 1 clicked')
    guestCount += 1;
    guestScore.textContent = guestCount;
}

function addTwoGuest() {
    console.log('+ 2 clicked')
    guestCount += 2;
    guestScore.textContent = guestCount;
}

function addThreeGuest() {
    console.log('+ 3 clicked')
    guestCount += 3;
    guestScore.textContent = guestCount;
}
