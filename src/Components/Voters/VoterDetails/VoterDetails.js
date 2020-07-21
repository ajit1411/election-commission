import React, { useState, useEffect } from 'react'
import classes from './VoterDetails.module.css'
import Axios from 'axios'
import Urls from './../../../Urls'
import { toast } from 'react-toastify'
const VoterDetails = ({ voter }) => {
    const [userImage, setuserImage] = useState('')
    const [isLoading, setisLoading] = useState(false)
    useEffect(() => {
        setisLoading(true)
        Axios.get(`${Urls.imageUpload}?action=download&fileName=${voter['user_image']}`)
            .then(res => {
                setisLoading(false)
                setuserImage(res.data.fileUploadURL)
            })
            .catch(error => {
                setisLoading(false)
                console.log(error)
                toast.error('Error while fetching user image', { position: toast.POSITION.TOP_CENTER })
                setuserImage('')
            })
    }, [])

    return (
        <div className={classes['main-container']}>
            <div className={`row`}>
                <div className={`col col-sm-12 col-md-6 col-lg-6`}>
                    <div className={classes['user-info']}>
                        <div className={classes['name']}>
                            <span>
                                <b>
                                    Name:
                                </b>
                            </span>
                            <br />
                            <span>
                                {
                                    voter ? `${voter['firstName']} ${voter['lastName']}` : ''
                                }
                            </span>
                        </div>
                        <hr />
                        <div className={classes['address']}>
                            <span>
                                <b>
                                    Address:
                                </b>
                            </span>
                            <br />
                            <span>
                                {
                                    voter && voter['addLine1'] ? voter['addLine1'] : 'Not available'
                                },
                            </span>
                            <span>
                                {
                                    voter && voter['addLine2'] ? voter['addLine2'] : 'Not available'
                                },
                            </span>
                            <span>
                                {
                                    voter && voter['addLine3'] ? voter['addLine3'] : 'Not available'
                                } - {voter['pinCode']}
                            </span>
                        </div>
                        <hr />
                        <div className={classes['personal']}>
                            <span>
                                <b>
                                    Personal Information:
                                </b>
                            </span>
                            <br />
                            <span>
                                <b>Date of Birth: </b> {voter ? `${voter['dob']} (${voter['years']} years ${voter['months']} months)` : ''}
                            </span><br />
                            <span>
                                <b>Gender: </b> {voter ? voter['gender'] : ''}
                            </span><br />
                        </div>
                    </div>
                </div>
                <div className={`col col-sm-12 col-md-6 col-lg-6 `}>
                    <div className={classes['user-image']}>
                        {
                            isLoading ? <i style={{ margin: '55%', fontSize: '50px' }} className={`fa fa-spinner fa-spin`}></i> : <img src={userImage ? userImage : ''} />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VoterDetails
