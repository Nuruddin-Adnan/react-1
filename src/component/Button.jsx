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
        const {change, locale, show} = this.props;
        return (
            <>
            <button className={locale === 'en-US' ? 'btn-info': 'btn-warning'} onClick={()=>change(locale)}>
                {locale === 'en-US' ? 'ঘড়ি পরিবর্তন' : 'click to chenge'}
            </button>
                {/* {
                    (locale === 'en-US') ? <button onClick={change}>click to chenge</button> : <button onClick={change}>ঘড়ি পরিবর্তন </button>
                } */}

                {!show && <p>Hello</p>}
            </>
        )
    }
}
