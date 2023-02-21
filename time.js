// Import section
import { DoFreeze } from "./solve.js";
// Declaring part
const time = document.querySelector('.timer');
let BlackCount = [10, 0];
let WhiteCount = [10, 0];

let BlackInterval;
let WhiteInterval;

function DecreaseBlack() {
    if (BlackCount[0] == 0 && BlackCount[1] == 0) {
        StopBlackTime();
        GameDraw();
        DoFreeze();
        return;
    }
    if (BlackCount[1] == 0) {
        BlackCount[0]--;
        BlackCount[1] = 60;
    }
    BlackCount[1]--;
    Display(BlackCount);
}
function DecreaseWhite() {
    if (WhiteCount[0] == 0 && WhiteCount[1] == 0) {
        StopWhiteTime();
        GameDraw();
        DoFreeze();
        return;
    }
    if (WhiteCount[1] == 0) {
        WhiteCount[0]--;
        WhiteCount[1] = 60;
    }
    WhiteCount[1]--;
    Display(WhiteCount);
}

export function StartBlackTime() {
    Display(BlackCount);
    BlackInterval = setInterval(DecreaseBlack, 1000);
}
export function StartWhiteTime() {
    Display(WhiteCount);
    WhiteInterval = setInterval(DecreaseWhite, 1000);
}
export function StopBlackTime() {
    clearInterval(BlackInterval);
}
export function StopWhiteTime() {
    clearInterval(WhiteInterval);
}
function Display(count) {
    let min = count[0].toString();
    let sec = count[1].toString();
    if (min.length == 1) {
        min = '0' + min;
    }
    if (sec.length == 1) {
        sec = '0' + sec;
    }
    time.innerText = `${min}:${sec}`;
}
export function ResetTime() {
    BlackCount = [10, 0];
    WhiteCount = [10, 0];
    StopBlackTime();
    StartBlackTime();
}
function GameDraw() {
    alert("Game Draw!! \n Rematch to play again.");
}