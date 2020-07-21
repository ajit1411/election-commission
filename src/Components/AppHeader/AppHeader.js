import React from 'react'
import classes from './AppHeader.module.css'
const AppHeader = () => {
    return (
        <div className={`container-fluid ${classes['main-container']}`}>
            <h4 className={'text-center'}>
                Election Commission
            </h4>
        </div>
    )
}

export default AppHeader
