import React, { Component } from 'react';
import { hotels } from './hoteldata';

const HotelContext = React.createContext();
// Provider
// Consumer

class HotelProvider extends Component{
	state = {
		hotels : hotels,
	}
	render(){
		return(
			<HotelContext.Provider 
				value={{
					...this.state
				}}
			>
				{ this.props.children }
			</HotelContext.Provider>
		)
	}
}

const HotelConsumer = HotelContext.Consumer;

export { HotelProvider, HotelConsumer };