import React, { Component } from 'react'
import GenerateRow from './GenerateRow'

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
        let two = twos // grab initial state
        let three = threes
        let four = fours
        let five = fives
        let six = sixes

        if ( leaderThreat === 2 ) { // account for leader, essentially subtract them from the 10-set
            two--
        } else if ( leaderThreat === 3 ) {
            three--
        } else if ( leaderThreat === 4 ) {
            four--
        } else if ( leaderThreat === 5 ) {
            five--
        } else if ( leaderThreat === 6 ) {
            six--
        }

        let id = 0 // sets key for results mapping
        let ResultsArray = []; // initialize the results array. Not really utilized currently, all done thru console output
        let threat = missionThreat - leaderThreat // 

        while ( e !== 10 ){
            if (2*a + 3*b + 4*c + 5*d + 6*e === threat) {
                if ( e <= six ) {
                    console.log("match")
                    // let keyedTL2 = {id: "tl2", value: a}
                    // let keyedTL3 = {id: "tl3", value: b}
                    // let keyedTL4 = {id: "tl4", value: c}
                    // let keyedTL5 = {id: "tl5", value: d}
                    // let keyedTL6 = {id: "tl6", value: e}
                    ResultsArray.push({id: id, results: [a, b, c, d, e]} ) // store the values temporarily
                    id ++
                }
            }

            if (a < two) {
                a++
                // console.log('A++: ' + a,b,c,d,e)                    
            }
            
            else if (b < three) {
                b++
                a=0
                // console.log('B++: ' + a,b,c,d,e)                    
            }
            
            else if (c < four) {
                c++
                a=0
                b=0
                // console.log('C++: ' + a,b,c,d,e)                    
            }
            
            else if (d < five) {
                d++
                a=0
                b=0
                c=0
                // console.log('D++: ' + a,b,c,d,e)                    
            }
            
            else if (e < 10) {
                e++
                a=0
                b=0
                c=0
                d=0
                // console.log('E++: ' + a,b,c,d,e)
            }             
        }
        console.log(ResultsArray)
        // console.log(Object.values(ResultsArray))

        const rowList = ResultsArray.map(row => (
            <GenerateRow key={row.id} row={row} />
        ))
    
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
            <tbody>
                {rowList}
            </tbody>
        </table>
      </div>
    )
    }
}
