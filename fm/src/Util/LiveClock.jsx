import React from 'react'
import Clock from 'react-live-clock';

function LiveClock() {
    return (
        <>
            <div style={{display: 'flex', justifyContent: 'space-between'}}> 
                <Clock
                    date={Date.now()}
                   
                    format={'dddd, MMMM Mo, YYYY'}
                    ticking={true}
                    timezone={'Australia/Sydney'} />
                <Clock            
                    date={Date.now()}
                    style={{ fontSize: '17px' }}
                    format={'h:mm:ss A'}
                    ticking={true}
                    timezone={'Australia/Sydney'} />
            </div>
        </>

    )
}

export default LiveClock