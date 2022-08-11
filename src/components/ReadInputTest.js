import React from 'react'
import Input from './Input'

let a = 0 // initialize our counting variables
let b = 0 // a possible squad is one where 2a + 3b + 4c + 5d + 6e = Mission level - leader threat
let c = 0 // we're essentially checking all 100k possible combos, even though most will never be possible
let d = 0
let e = 0
let two = parseInt(Input.twos)
let three = parseInt(Input.threes)
let four = parseInt(Input.fours)
let five = parseInt(Input.fives)
let six = parseInt(Input.sixes)
let leader = parseInt(Input.leader)
let inputArray = [two,three,four,five,six]; // fill this in w/ number of 2s, number of 3s, etc
let resultsArray = []; // initialize the results array. Not really utilized currently, all done thru console output
let missionThreat = 14 // needs input
let threat = (missionThreat - leader); // initialize threat at lowest mission - leader threat

function GenerateResults () {
    while ( a !== 9 && b !== 9 && c !== 9 && d !== 9 && e !== 9 ){
        if (2*a + 3*b + 4*c + 5*d + 6*e !== threat) { // if not a match, increment value by 1
            if (a < 9) {
                a++
            } else if (b < 9) {
                b++
                a=0
            } else if (c < 9) {
                c++
                a=0
                b=0
            } else if (d < 9) {
                d++
                a=0
                b=0
                c=0
            } else if (e < 9) {
                e++
                a=0
                b=0
                c=0
                d=0
            }
        }

        else if (2*a + 3*b + 4*c + 5*d + 6*e === threat) { // on a match
            let tempArray = []
            tempArray.push(a,b,c,d,e) // store the values temporarily
            if (a <= inputArray[0] && b <= inputArray[1] && c <= inputArray[2] && d <= inputArray[3] && e <= inputArray[4]) { // check that the combination is one your squad can actually take
                resultsArray.push([tempArray]) 
            tempArray = [] // reset the temp array
            if (a < 9) { // increment counters
                a++
            } else if (b < 9) {
                b++
                a=0
            } else if (c < 9) {
                c++
                a=0
                b=0
            } else if (d < 9) {
                d++
                a=0
                b=0
                c=0
            } else if (e < 9) {
                e++
                a=0
                b=0
                c=0
                d=0
            }
            }
        }
    }
}

export default function ReadInputTest({ twos, threes, fours, fives, sixes, leader }) {
    if (leader === 2) {
        inputArray[0] -= 1;
    }
    else if (leader === 3) {
        inputArray[1] -= 1;
    }
    else if (leader === 4) {
        inputArray[2] -= 1;
    }
    else if (leader === 5) {
        inputArray[3] -= 1;
    }
    else if (leader === 6) {
        inputArray[4] -= 1;
    }




    return (
        <div>
            Hello
        </div>
      )

}