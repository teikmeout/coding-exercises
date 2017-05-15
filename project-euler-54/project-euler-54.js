// PROJECT EULER #54
// https://projecteuler.net/problem=54
// Jonathan Ahrens and William Mayo Fri May 5, 2017

// In the card game poker, a hand consists of five cards and are ranked, from lowest to highest, in the following way:

// High Card: Highest value card.
// One Pair: Two cards of the same value.
// Two Pairs: Two different pairs.
// Three of a Kind: Three cards of the same value.
// Straight: All cards are consecutive values.
// Flush: All cards of the same suit.
// Full House: Three of a kind and a pair.
// Four of a Kind: Four cards of the same value.
// Straight Flush: All cards are consecutive values of same suit.
// Royal Flush: Ten, Jack, Queen, King, Ace, in same suit.
// The cards are valued in the order:
// 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, Ace.

// If two players have the same ranked hands then the rank made up of the highest value wins; for example, a pair of eights beats a pair of fives (see example 1 below). But if two ranks tie, for example, both players have a pair of queens, then highest cards in each hand are compared (see example 4 below); if the highest cards tie then the next highest cards are compared, and so on.

// Consider the following five hands dealt to two players:

// Hand    Player 1    Player 2    Winner
// 1   5H 5C 6S 7S KD
// Pair of Fives
//   2C 3S 8S 8D TD
// Pair of Eights
//   Player 2
// 2   5D 8C 9S JS AC
// Highest card Ace
//   2C 5C 7D 8S QH
// Highest card Queen
//   Player 1
// 3   2D 9C AS AH AC
// Three Aces
//   3D 6D 7D TD QD
// Flush with Diamonds
//   Player 2
// 4   4D 6S 9H QH QC
// Pair of Queens
// Highest card Nine
//   3D 6D 7H QD QS
// Pair of Queens
// Highest card Seven
//   Player 1
// 5   2H 2D 4C 4D 4S
// Full House
// With Three Fours
//   3C 3D 3S 9S 9D
// Full House
// with Three Threes
//   Player 1
// The file, poker.txt, contains one-thousand random hands dealt to two players. Each line of the file contains ten cards (separated by a single space): the first five are Player 1's cards and the last five are Player 2's cards. You can assume that all hands are valid (no invalid characters or repeated cards), each player's hand is in no specific order, and in each hand there is a clear winner.

// How many hands does Player 1 win?

// import data
const data = require('./project-euler-54-input.js');

// use index 3 has a duplicated element for case trial
console.log(data[3]);
let p1 = [],
    p2 = [];

// determine values for matches
const highCard      = 1,
      pair          = 2, // repetition
      twoPair       = 3, // repetition
      threeOfAKind  = 4, // repetition
      straight      = 5, // consecutive elements
      flush         = 6, // consecutive elements
      fullhouse     = 7, // repetition 2 + repetition 3
      fourOfAKind   = 8, // repetition
      straightFlush = 9; // repetition + highest value

// we have broken down the problem to two three options
// 1. how to check for consecutive cards?
// 2. how to check for repeated cards?
// 3. how to check for highest card?

// PREPING the arrays before doing checks
// 1. fn: takes one dealt hand and splits and sorts for p1 and p2
function splitAndSortStuff(arr) {
  p1 = arr.slice(0, arr.length/2)
  p2 = arr.slice(arr.length/2);
  // console.log('sliced data for p1 ->',p1);
  // console.log('sliced data for p2 ->',p2);
  // console.log('data as is ->',p1);
  console.log('sorting p1 ->',p1.sort());
  // console.log('data as is ->',p2);
  console.log('sorting p2 ->',p2.sort());
  checkForRepeat(p1);
  checkForRepeat(p2);
}


// fn: checks for repeated elements in an array
function checkForRepeat(arr) {
  console.log(arr);
  let holder = '';
  let repeaters = [];
  // console.log('holder ->', holder);
  arr.forEach((card, index) => {
    console.log('round', index, ' holder: ', holder, ' card:', card);
    // ------ this works  vv
    // // first char in the string
    // console.log(card[0]);
    // let filteredArr = arr.filter((c) => {
    //   // only return if first letters are the same
    //   return c[0] == card[0];
    // });
    // console.log('is repeated ->',filteredArr.length, ' times');

    // length == 0 would mean nothing has been compared yet

    // ------ this works ^^
    if (holder == '') {
      console.log('holder is empty... adding ->', card);
      holder = card;
    } else if (holder[0] == card[0]) {
      console.log('the match ->', card);
      repeaters.push(card);
    } else console.log('no match ', holder, ':',card);
  })
  console.log('result of ',repeaters);
}



splitAndSortStuff(data[3])
// checkForRepeat(data[3]);





