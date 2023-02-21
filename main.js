//  Import section
import { solve } from '/solve.js'
import { reset } from '/reset.js'

// Declaring constants

export const Fragments = document.querySelectorAll('.piece');
export const MoveSound = new Audio("/resources/moveSound.mp3");
export const Red = 'rgb(244, 132, 132)';
export const Blue = 'rgb(63, 193, 201)';
export const White = 'rgb(245, 245, 245)';
export const Circle = 'url("/resources/circle.png")';
export const SelectColor = 'rgb(205, 233, 144)';
const Reset = document.querySelector('.reset-game');

// Adding event listeners

Fragments.forEach(element => { element.addEventListener('click', () => { solve(element) }) });
Reset.addEventListener('click', () => { reset() });

// Real things starts here!

reset();
