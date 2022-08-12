import React, { Component } from 'react'
import TableGenerate from './TableGenerate'
import TotalCheck from './TotalCheck'
import '../App.css'

class AppComponent extends Component {
    constructor(props) {
      super(props)
    

      this.state = {
         twos: 0,
         threes: 0,
         fours: 0,
         fives: 0,
         sixes: 0,
         leader: 2,
         mission: 14,
      }

      this.handleChange = this.handleChange.bind(this)
    }
    
    render() {
        const { twos, threes, fours, fives, sixes, leader, mission } = this.state
        return (
            <div className='appComponent'>
            
            <form className='form'>
                {/* <div className="horizontal-counters"> */}
                <div className='number'>
                <div >
					<label>Twos </label>
					<input
						type="number"
                        id="twos"
                        name="twos"
                        min="0"
                        max="9"
						value={twos}
						onChange={this.handleChange}
					/>
				</div>
                <div >
					<label>Threes </label>
					<input
						type="number"
                        id="threes"
                        name="threes"
                        min="0"
                        max="9"
						value={threes}
						onChange={this.handleChange}
					/>
				</div>
                <div >
					<label>Fours </label>
					<input
						type="number"
                        id="fours"
                        name="fours"
                        min="0"
                        max="9"
						value={fours}
						onChange={this.handleChange}
					/>
				</div>
                <div >
					<label>Fives </label>
					<input
						type="number"
                        id="fives"
                        name="fives"
                        min="0"
                        max="9"
						value={fives}
						onChange={this.handleChange}
					/>
				</div>
                <div >
					<label>Sixes </label>
					<input
						type="number"
                        id="sixes"
                        name="sixes"
                        min="0"
                        max="9"
						value={sixes}
						onChange={this.handleChange}
					/>
				</div>
                </div>
                <div className='dropdown'>
                <div>
                    <label for="leader">What's your leader's TL?</label><br></br>
                    <select
                        name="leader"
                        id="leader"
                        value={leader}
                        onChange={this.handleChange}
                        >
                        <option value="2">- 2 -</option>
                        <option value="3">- 3 -</option>
                        <option value="4">- 4 -</option>
                        <option value="5">- 5 -</option>
                        <option value="6">- 6 -</option>
                    </select>
                </div>
                <hr></hr>
                <div>
                    <label for="leader">What's your mission's TL?</label><br></br>
                    <select
                        name="mission"
                        id="mission"
                        value={mission}
                        onChange={this.handleChange}
                        >
                        <option value="14">- 14 -</option>
                        <option value="15">- 15 -</option>
                        <option value="16">- 16 -</option>
                        <option value="17">- 17 -</option>
                        <option value="18">- 18 -</option>
                        <option value="19">- 19 -</option>
                        <option value="20">- 20 -</option>
                    </select>
                </div>
                </div>
                
			</form>
            <div className='total'>
                <TotalCheck twos={twos} threes={threes} fours={fours} fives={fives} sixes={sixes} />
            </div>
            <div className='result'>
                <TableGenerate twos={twos} threes={threes} fours={fours} fives={fives} sixes={sixes} leaderThreat={leader} missionThreat={mission} />
            </div>
            </div>
        )
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

}

export default AppComponent