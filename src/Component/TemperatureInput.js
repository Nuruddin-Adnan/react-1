import React from 'react'

export default function TemperatureInput({temperature, onTemperatureChange, scale}) {
    const scaleName = {
        c: 'Celsius',
        f: 'Fahrenheit'
    }
    return (
        <div className="card">
            <div className="card-header">Temperature in {scaleName[scale]}</div>
            <div className="card-body">
                <input type="text" value={temperature} onChange={onTemperatureChange} className="form-control" />
            </div>
        </div>
    )
}
