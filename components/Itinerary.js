import React, { Component } from 'react'
import styled from 'styled-components'
import { famousplaces } from '../itinerarydata'


class Itinerary extends Component{
	constructor(props){
		super(props);
		this.state = {
			city : ' ',
			no_of_days : 1,
			budget : ' '
		}
		this.handleInputChange = this.handleInputChange.bind(this);
		this.showTimeline = this.showTimeline.bind(this);
	}

	showTimeline(e){
		e.preventDefault();
		console.log(this.state.city);
		console.log(this.state.no_of_days);
		console.log(this.state.budget);
	}
	
	 handleInputChange(event) {
	    const target = event.target;
	    const name = target.name;

	 	let value;

	    if(name === 'city'){
	    	value = target.value
	    }

	    if(name === 'no_of_days'){
	    	value = target.value
	    }

	    if(name === 'budget'){
	    	value = target.value
	    }

	    this.setState({
	      [name]: value
	    });
	  }

	render(){
		return(
			<ItineraryWrapper>
				<div className="container">
					<div className="formdata">
					  	<form className="form-inline ml-5 mt-5 mb-5" onSubmit={this.showTimeline}>
						  <label>City: </label>
					      <input type="text" name="city" value={this.state.city} onChange={this.handleInputChange}/>
					      <label>No of days: </label>
					      <input type="number" name="no_of_days" value={this.state.no_of_days}  min="1" max="7" onChange={this.handleInputChange}/>
						  <label> Budget: </label>
						  <input type="text" name="budget" value={this.state.budget} onChange={this.handleInputChange} />
						  <input type="submit" value="Submit" />
						</form>
					</div>
					<div className="container mt-5 mb-5">
						<div className="row">
							<div className="col-md-6 offset-md-3">
								<ul className="timeline">									
								<li>
										<p> DAY 1 </p>
										<p>Marine Lines</p>
									</li>
									<li>
										<p> DAY 2 </p>
										<p>Gateway of India</p>
									</li>
									<li>
										<p> DAY 3 </p>
										<p>Bandra Worli Sea Link</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</ItineraryWrapper>
		)
	}
}

const ItineraryWrapper = styled.div`
	ul.timeline {
	    list-style-type: none;
	    position: relative;
	}
	ul.timeline:before {
	    content: ' ';
	    background: #d4d9df;
	    display: inline-block;
	    position: absolute;
	    left: 29px;
	    width: 2px;
	    height: 100%;
	    z-index: 400;
	}
	ul.timeline > li {
	    margin: 20px 0;
	    padding-left: 20px;
	}
	ul.timeline > li:before {
	    content: ' ';
	    background: white;
	    display: inline-block;
	    position: absolute;
	    border-radius: 50%;
	    border: 3px solid #22c0e8;
	    left: 20px;
	    width: 20px;
	    height: 20px;
	    z-index: 400;
	}
	.form-inline {
	  display : flex;
	  justify-content : center;
	}

	/* Add some margins for each label */
	.form-inline label {
	  margin: 5px 10px 5px 0;
	}

	/* Style the input fields */
	.form-inline input {
	  vertical-align: middle;
	  margin: 5px 10px 5px 0;
	  padding: 5px;
	  background-color: #fff;
	  border: 1px solid #ddd;
	}

	/* Add responsiveness - display the form controls vertically instead of horizontally on screens that are less than 800px wide */
	@media (max-width: 800px) {
	  .form-inline input {
	    margin: 10px 0;
	  }

	  .form-inline {
	    flex-direction: column;
	    align-items: stretch;
	  }
	}
}
`;

export default Itinerary;