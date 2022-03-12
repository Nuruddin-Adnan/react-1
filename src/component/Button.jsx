import React, { Component } from 'react'

export default class Button extends Component {

    shouldComponentUpdate(nextProps) {
        const {locale: currentChange} = this.props;
        const {locale: nextChange} = nextProps;
        if(currentChange === nextChange){
            return false;
        }
        return true;
    }
    
    render() {
        console.log('button compent render');
        const {change, locale} = this.props;
        return (
            <>
                {
                    (locale === 'en-US') ? <button onClick={change}>click to chenge</button> : <button onClick={change}>ঘড়ি পরিবর্তন </button>
                }
            </>
        )
    }
}
