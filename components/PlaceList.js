import React, { Component } from 'react'
import Hotel from './Hotel'
import Place from './Place'
import Title from './Title'
import { PlaceConsumer } from '../placecontext'

class PlaceList extends Component{
	render(){
		return(
			<React.Fragment>
				<div className="py-5">
					<div className="container">
						<Title name="our" title="places" />
						<div className="row">
							<PlaceConsumer>
								{(value) => {
									return value.places.map( (place) => {
										return <Place key={place.id} place={place} />
									});
								}}
							</PlaceConsumer>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default PlaceList;