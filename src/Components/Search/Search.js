import React, { useState, useEffect } from 'react'
import classes from './Search.module.css'
import Axios from 'axios'
import Urls from '../../Urls'
import { toast } from 'react-toastify'
import Loader from '../Loader/Loader'

const Search = props => {
    const [searchField, setsearchField] = useState({ 'label': 'email', 'value': '' })
    const [newUserEmail, setnewUserEmail] = useState('')
    const [userLists, setuserLists] = useState({})
    const [isLoading, setisLoading] = useState(false)
    useEffect(() => {
        document.title = 'Election - Search | Upskill Project'
        setisLoading(true)
        Axios.get(Urls.users)
            .then(res => {
                setisLoading(false)
                setuserLists(res.data)
            })
            .catch(error => {
                setisLoading(false)
                toast.error('Oops something went wrong!', { position: toast.POSITION.TOP_CENTER })
            })
    }, [])

    const createNewUser = () => {
        props.history.push({
            pathname: '/register',
            state: newUserEmail
        })
    }

    const getUsers = () => {
        const queryType = 'email'
        setisLoading(true)
        var url = `${Urls.users}?${searchField['label']}=${searchField['value']}`
        Axios.get(url)
            .then(res => {
                setisLoading(false)
                props.history.push({
                    pathname: '/users',
                    state: res.data && res.data.users ? res.data.users : []
                })
            })
            .catch(error => {
                setisLoading(false)
                toast.error('Oops something went wrong!', { position: toast.POSITION.TOP_CENTER })
                console.log(error)
            })
    }

    return (
        <React.Fragment>
            <Loader show={isLoading} message={'Please wait while we fetch data from server'} />
            <div className={classes['main-container']}>
                {
                    window.innerWidth > 600 ? (
                        <div className={`jumbotron`}>
                            {
                                userLists['user_count'] && userLists['user_count'] > 0 ? (
                                    <div className={`row`}>
                                        {
                                            Object.keys(userLists['state_wise_count']).map(state => (
                                                <React.Fragment>
                                                    <div className={`col-sm-12 col-md-2 col-lg-2`}>
                                                        <div className={`${classes['counter']}`}>
                                                            <h3>
                                                                {userLists['state_wise_count'][state]}
                                                            </h3>
                                                            <h6>
                                                                {state}
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </React.Fragment>
                                            ))
                                        }
                                    </div>
                                ) : isLoading ? 'Loading....' : 'No data'
                            }
                        </div>
                    ) : ''
                }
                <div className={`container-fluid`}>
                    <div className={`row`}>
                        <div className={`${classes['action']} col-xs-12 col-md-6 col-lg-6 col-sm-12`}>
                            <h5>
                                Search voter ID
                            </h5>
                            <div className={`row`}>
                                <div className={`form-group col-md-2 col-lg-2 col-xl-2`}>
                                    <div className={classes['form-group']}>
                                        <select className={`form-control`} onChange={e => setsearchField({ ...searchField, 'label': e.target.value })}>
                                            <option value={'email'}> Email </option>
                                            <option value={'firstName'}> First Name </option>
                                            <option value={'middleName'}> Middle Name </option>
                                            <option value={'lastName'}> Last Name </option>
                                            <option value={'birthState'}> Birth State </option>
                                        </select>
                                    </div>
                                </div>
                                <div className={`form-group col-md-8 col-lg-8 col-xl-8`}>
                                    <input onChange={event => setsearchField({ ...searchField, 'value': event.target.value })} className={`form-control ${classes['input-text']}`} placeholder={'Search by name, area, etc.'} />
                                </div>
                                <div className={`form-group col-md-2 col-lg-2 col-xl-2`}>
                                    <button onClick={getUsers} style={{ width: '100%' }} className={`btn btn-success`}>
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={`col-xs-12 col-xl-6 col-md-6 col-lg-6 col-sm-12`}>
                            <h5>
                                New user
                        </h5>
                            <div className={`row`}>
                                <div className={`form-group col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8`}>
                                    <input onChange={e => setnewUserEmail(e.target.value)} type='email' className={`form-control ${classes['input-text']}`} placeholder={'abc@xyz.com'} />
                                </div>
                                <div className={`form-group col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4`}>
                                    <button onClick={createNewUser} style={{ width: '100%' }} className={`btn btn-danger`}>
                                        Register
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Search
