import React, { useEffect, useState } from 'react'
import classes from './Voters.module.css'
import PopupModal from '../PopupModal/PopupModal'
import VoterDetails from './VoterDetails'

const Voters = props => {
    const [users, setusers] = useState([])
    useEffect(() => {
        console.clear()
        setusers(props.history.location.state)
        // setusers([
        //     {
        //         'firstName': 'Ajit',
        //         'lastName': 'Jadhav'
        //     },
        //     {
        //         'firstName': 'Ajit',
        //         'lastName': 'Jadhav'
        //     },
        //     {
        //         'firstName': 'Ajit',
        //         'lastName': 'Jadhav'
        //     },
        //     {
        //         'firstName': 'Ajit',
        //         'lastName': 'Jadhav'
        //     },
        //     {
        //         'firstName': 'Ajit',
        //         'lastName': 'Jadhav'
        //     },
        //     {
        //         'firstName': 'Ajit',
        //         'lastName': 'Jadhav'
        //     }
        // ])
    }, [])
    return (
        <div className={classes['main-container']}>
            <div className={`jumbotron`}>
                <h4>
                    Available voter ID cards
                </h4>
                <h6>
                    matched with your search
                </h6>
            </div>
            <div className={`row ${classes['data-container']}`}>
                <div className={`col col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 ${classes['left-container']}`}>
                    <div className={classes['info']}>
                        <h2 className={`text-center`}>{users && users.length > 0 ? users.length : ''}</h2>
                        <h4 className={`text-center`}>
                            Results
                        </h4>
                    </div>
                </div>
                <div className={`col col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 ${classes['right-container']}`}>
                    <div className={classes['user-list']}>
                        {
                            users && users.length > 0 ? (
                                <React.Fragment>
                                    {
                                        users.map(user => (
                                            <div className={`row ${classes['user']}`}>
                                                <div className={`col col-sm-12 col-md-8 col-lg-8 ${classes['name']}`}>
                                                    <span>
                                                        {
                                                            user && user['firstName'] && user['lastName'] ? `${user['firstName']} ${user['middleName']} ${user['lastName']}` : 'No Name'
                                                        }
                                                    </span>
                                                </div>
                                                <div className={`col col-sm-12 col-md-2 col-lg-2 ${classes['view-id-card']}`}>
                                                    {/* <button style={{ width: '100%' }} className={`btn btn-outline-secondary`}>
                                                        View
                                                    </button> */}
                                                    <PopupModal
                                                        content={<VoterDetails voter={user} />}
                                                        header={'Voter\'s Details'}
                                                        buttonClass={'btn btn-outline-secondary'}
                                                        buttonText={'View'}
                                                        buttonStyle={{ width: '100%' }}
                                                    />
                                                </div>
                                                <div className={`col col-sm-12 col-md-2 col-lg-2 ${classes['download-id-card']}`}>
                                                    <button style={{ width: '100%' }} className={`btn btn-success`}>
                                                        Download
                                                    </button>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </React.Fragment>
                            ) : (<>No data</>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Voters
