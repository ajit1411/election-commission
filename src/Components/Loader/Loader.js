import React from 'react'
import classes from './Loader.module.css'
import loaderGif from './../../Utilities/Assets/loader-gif.gif'
const Loader = ({
    show = false,
    message = ''
}) => {
    return (
        <React.Fragment>
            {
                show ? (
                    <div className={classes['main-container']}>
                        <img src={loaderGif} />
                        <h4>
                            {message}
                        </h4>
                    </div>
                ) : ''
            }
        </React.Fragment>
    )
}

export default Loader
