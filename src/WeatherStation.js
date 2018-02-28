import React from 'react';
import PropTypes from 'prop-types';

export class WeatherStation extends React.Component {
    constructor(props) {
        super(props);

        this.state = { count : 0 };
    }
    componentDidMount() {
        this.interval = setInterval(this.updateWind.bind(this), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    updateWind(){
        console.log(this.state);
        const newCount = this.state.count + 1;
        this.setState({ count: newCount });
    }

    render() {
         return (
         <div>
             <h1>{this.props.name}</h1>
             There is a whole {this.state.count} wind!
         </div>
         );
     }
}

WeatherStation.propTypes = {
    name: PropTypes.string.isRequired
}