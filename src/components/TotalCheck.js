import React, { Component } from 'react'

export class TotalCheck extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }

    render() {
        const { twos, threes, fours, fives, sixes } = this.props
        let two = parseInt(twos)
        let three = parseInt(threes)
        let four = parseInt(fours)
        let five = parseInt(fives)
        let six = parseInt(sixes)
        let total = two + three + four + five + six
        let totalCheckMessage = ''

        if (total === 10) {
            totalCheckMessage = <div>Just right!</div>
        }

        else if (total > 10) {
            totalCheckMessage = <div>Too much! Remove {total - 10} characters</div>
        }

        else if (total < 10) {
            totalCheckMessage = <div>Add {10 - total} characters</div>
        }

        return (
            <div>
                {totalCheckMessage}
            </div>
        )
    }
}

export default TotalCheck