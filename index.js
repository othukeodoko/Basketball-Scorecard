const addOneHomeBtn = document.getElementById('add-one-home')
const addTwoHomeBtn = document.getElementById('add-two-home')
const addThreeHomeBtn = document.getElementById('add-three-home')
const addOneGuestBtn = document.getElementById('add-one-guest')
const addTwoGuestBtn = document.getElementById('add-two-guest')
const addThreeGuestBtn = document.getElementById('add-three-guest')
let homeScoreDisplay = document.querySelector('.home-points-text')
let guestScoreDisplay = document.querySelector('.guest-points-text')

let homeCount = 0
let guestCount = 0
let WinnerPoint = 20;
let LeadingPoint = 0;

function updateHomeScore(points) {
        homeCount += points;
        homeScoreDisplay.innerText = homeCount;
        if(homeCount > WinnerPoint){
            checkWinner()
        }
}
function updateGuestScore(points) {
        guestCount += points;
        guestScoreDisplay.innerText = guestCount;
        if(guestCount > WinnerPoint){
            checkWinner()
        }
}
addOneHomeBtn.addEventListener('click', ()=>{
    updateHomeScore(1)
    // homeCount +=1;
    // homeScoreDisplay.innerText = homeCount;
    // if(homeCount > WinnerPoint){
    //     checkWinner()
    // }
})
addTwoHomeBtn.addEventListener('click', ()=>{
    updateHomeScore(2)
    // homeCount +=2;
    // homeScoreDisplay.innerText = homeCount;
    // if(homeCount > WinnerPoint){
    //     checkWinner()
    // }
})
addThreeHomeBtn.addEventListener('click', ()=>{
    updateHomeScore(3)
    // homeCount +=3;
    // homeScoreDisplay.innerText = homeCount;
    // if(homeCount > WinnerPoint){
    //     checkWinner()
    // }
})
addOneGuestBtn.addEventListener('click', ()=>{
    updateGuestScore(1)
    // guestCount +=1;
    // guestScoreDisplay.innerText = guestCount;
    // if(guestCount > WinnerPoint){
    //     checkWinner()
    // }
})
addTwoGuestBtn.addEventListener('click', ()=>{
    updateGuestScore(2)
    // guestCount +=2;
    // guestScoreDisplay.innerText = guestCount;
    // if(guestCount > WinnerPoint){
    //     checkWinner()
    // }
})
addThreeGuestBtn.addEventListener('click', ()=>{
    updateGuestScore(3)
    // guestCount +=3;
    // guestScoreDisplay.innerText = guestCount;
    // if(guestCount > WinnerPoint){
    //     checkWinner()
    // }
})

function checkWinner(){
   
    if(guestCount > WinnerPoint && guestCount > homeCount){
        console.log(`Guest Team Wins`)
        resetScore()
    }
    else if(homeCount > WinnerPoint && homeCount > guestCount){
        console.log(`Home Team Wins`)
        resetScore()
    }
}
function resetScore(){
        homeCount = 0;
        guestCount = 0;
        guestScoreDisplay.innerText = guestCount;
        homeScoreDisplay.innerText = guestCount;
}



