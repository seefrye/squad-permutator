import React, { Component } from 'react'

export default class TableGenerate extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }

    render() {
        const { twos, threes, fours, fives, sixes, leaderThreat, missionThreat } = this.props
        let a = 0 // initialize our counting variables
        let b = 0 // a possible squad is one where 2a + 3b + 4c + 5d + 6e = Mission level - leader threat
        let c = 0 // we're essentially checking all 100k possible combos, even though most will never be possible
        let d = 0
        let e = 0

        let two = parseInt(twos)
        let three = parseInt(threes)
        let four = parseInt(fours)
        let five = parseInt(fives)
        let six = parseInt(sixes)
        let leader = parseInt(leaderThreat)
        let mission = parseInt(missionThreat)
        let inputArray = [two,three,four,five,six]; // fill this in w/ number of 2s, number of 3s, etc
        let resultsArray = []; // initialize the results array. Not really utilized currently, all done thru console output
        let threat = mission - leader

        var looping = true

        console.log('Props equals: ' + this.props.twos)
        console.log('Parsed INT is: ' + two)

        
        
        while ( e !== 10 ){
            if (2*a + 3*b + 4*c + 5*d + 6*e !== threat) { // if not a match, increment value by 1
                if (a < this.props.twos) {
                    a++
                    console.log('A++: ' + a,b,c,d,e)                    
                }
                
                else if (b < this.props.threes) {
                    b++
                    a=0
                    console.log('B++: ' + a,b,c,d,e)                    
                }
                
                else if (c < this.props.fours) {
                    c++
                    a=0
                    b=0
                    console.log('C++: ' + a,b,c,d,e)                    
                }
                
                else if (d < this.props.fives) {
                    d++
                    a=0
                    b=0
                    c=0
                    console.log('D++: ' + a,b,c,d,e)                    
                }
                
                else if (e < 10) {
                    e++
                    a=0
                    b=0
                    c=0
                    d=0
                    console.log('E++: ' + a,b,c,d,e)
                }                
            } 

            else if (2*a + 3*b + 4*c + 5*d + 6*e === threat) { // on a match
                console.log("match")
                let tempArray = []
                let keyedTL2 = {id: "tl2", value: a}
                let keyedTL3 = {id: "tl3", value: b}
                let keyedTL4 = {id: "tl4", value: c}
                let keyedTL5 = {id: "tl5", value: d}
                let keyedTL6 = {id: "tl6", value: e}
                console.log(tempArray)
                tempArray.push( keyedTL2, keyedTL3, keyedTL4, keyedTL5, keyedTL6 ) // store the values temporarily
                    
                    if (a <= inputArray[0] && b <= inputArray[1] && c <= inputArray[2] && d <= inputArray[3] && e <= inputArray[4]) { // check that the combination is one your squad can actually take
                        resultsArray.push([tempArray]) 
                        tempArray = [] // reset the temp array
                    }

                    if (a < 9) { // increment counters
                        a++
                    }

                    else if (b < 9) {
                        b++
                        a=0
                    }

                    else if (c < 9) {
                        c++
                        a=0
                        b=0
                    }

                    else if (d < 9) {
                        d++
                        a=0
                        b=0
                        c=0
                    }

                    else if (e < 9) {
                        e++
                        a=0
                        b=0
                        c=0
                        d=0
                    }
            }       
    }
    
    return (

      <div>
        <table>
            <thead>
                <tr>
                    <th>TL 2</th>
                    <th>TL 3</th>
                    <th>TL 4</th>
                    <th>TL 5</th>
                    <th>TL 6</th>
                </tr>
            </thead>
            <tr>
                <td>{this.props.twos}</td>
                <td>{this.props.threes}</td>
                <td>{this.props.fours}</td>
                <td>{this.props.fives}</td>
                <td>{this.props.sixes}</td>
            </tr>
        </table>
      </div>
    )
    }
}
