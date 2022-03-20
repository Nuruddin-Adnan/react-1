import React, { Component } from 'react';
import Button from './Button'

export default class Clock extends Component {
    state = {
        date: new Date(),
        locale: this.props.locale,
    }

    componentWillMount(){
        this.timer = setInterval(() =>{
            this.tick();
        }, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }

    // handleChange = () =>{
    //     const {locale} = this.state;
    //     if(locale === 'en-US'){
    //         this.setState({locale: 'bn-BD'});
    //     }else {
    //         this.setState({locale: 'en-US'});
    //     }
    // }


    handleChange = (locale) =>{
        this.setState({locale})
    }

    tick = () => {
        this.setState({ date: new Date()})
    }

    render() {
        console.log('Clock compent render');
        const { date, locale } = this.state
        return (
            <>
                <h1>{date.toLocaleTimeString(locale)}</h1>
                {
                    locale === 'bn-BD' ? <Button change={this.handleChange} locale='en-US' show /> : <Button change={this.handleChange} locale='bn-BD' />
                }
            </>
        )
    }
}
