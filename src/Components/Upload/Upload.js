import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import Urls from './../../Urls'
import classes from './Upload.module.css'
import Loader from '../Loader/Loader'
import { toast } from 'react-toastify'
const Upload = props => {
    const [userImage, setuserImage] = useState({})
    const [userData, setuserData] = useState({})
    const [isLoading, setisLoading] = useState(false)

    const fileChangeHandler = event => {
        setuserImage(event.target.files[0])
    }

    useEffect(() => {
        console.clear()
        setuserData(props.history.location.state)
    }, [])

    const uploadUserImage = () => {
        setisLoading(true)
        const fileExtension = userImage ? userImage['name'].split('.').pop() : 'txt'
        const fileName = userData['user_id'].replace('}', '')
        Axios.get(`${Urls.imageUpload}?action=upload&fileName=${fileName + '.' + fileExtension}`)
            .then(res => {
                console.log(res.data)
                setisLoading(true)
                Axios.put(res.data.fileUploadURL, userImage)
                    .then(res => {
                        Axios.post(Urls.users, {...userData, 'user_image': fileName + '.' + fileExtension})
                            .then(res => {
                                setisLoading(false)
                                toast.success('Account created', { position: toast.POSITION.TOP_CENTER })
                                setTimeout(() => {
                                    props.history.push({
                                        pathname: '/users',
                                        state: [userData]
                                    })
                                }, 1500);
                            })
                            .catch(error => {
                                setisLoading(false)
                                toast.error(`Error while submitting your details`, { position: toast.POSITION.TOP_CENTER })
                            })
                    })
                    .catch(error => {
                        console.error(error)
                        setisLoading(false)
                        toast.error(`Error while submitting your details`, { position: toast.POSITION.TOP_CENTER })
                    })
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <React.Fragment>
            <Loader show={isLoading} message={'Wait while we upload your data to server'} />
            <div className={classes['main-container']}>
                <div className={`form-group`}>
                    <input type='file' onChange={fileChangeHandler} className={`form-control`} />
                </div>
                <div className={'form-group text-center'}>
                    <button className={`form-control btn btn-success`} onClick={uploadUserImage}>
                        Upload
                    </button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Upload
