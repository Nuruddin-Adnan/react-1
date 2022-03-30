import React, { Component } from 'react';
import TemperatureInput from './TemperatureInput'
import BoilingVerdict from './BoilingVerdict'

export default class Calculator extends Component {
    state = {
        temperature: '',
    }

    onTemperatureChange = (e, temperature) => {
        this.setState({
            temperature: e.target.value,
        })
    }

    render() {
        const {temperature} = this.state;
        return (
            <>
                <TemperatureInput temperature={temperature} onTemperatureChange={this.onTemperatureChange} scale='c' />
                <TemperatureInput temperature={temperature} onTemperatureChange={this.onTemperatureChange} scale='f' />
                <BoilingVerdict temperature={temperature} />
            </>
        )
    }
}
