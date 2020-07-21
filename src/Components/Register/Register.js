import React, { useEffect, useState } from 'react'
import classes from './Register.module.css'
import { defaultUserData, validateDetails } from './../../Utilities'
import { toast } from 'react-toastify'
import Axios from 'axios'
import Urls from '../../Urls'
import Loader from '../Loader/Loader'
const Register = props => {
    const [newUserData, setnewUserData] = useState({})
    const [isLoading, setisLoading] = useState(false)
    useEffect(() => {
        document.title = 'Election - Register | Upskill Project'
        setnewUserData({
            addLine1: '',
            addLine2: '',
            addLine3: '',
            birthDistrict: '',
            birthPlace: '',
            birthState: '',
            district: '',
            dob: '',
            email: props.history.location.state ? props.history.location.state : '',
            firstName: '',
            gender: '',
            guardianName: '',
            lastName: '',
            middleName: '',
            months: '',
            pinCode: '',
            postOffice: '',
            taluka: '',
            town: '',
            years: '',
            user_id: `IND-${Math.random() * 100000000}`.replace('.', '-')
        })
    }, [])

    const handleChange = event => {
        if (event.target.name === 'dob') {
            console.clear()
            const birthYear = event.target.value.split('/')[2]
            const ageInYear = parseInt(new Date().getFullYear()) - parseInt(birthYear)
            if ((event.target.value.split('/')).length >= 3) {
                console.log(ageInYear)
                var userData = newUserData
                userData.years = ageInYear
                setnewUserData(userData)
            }
        }
        const id = event.target.name
        const value = event.target.value
        setnewUserData({ ...newUserData, [event.target.name]: value })
    }

    const registerUser = () => {
        const validationStatus = validateDetails(newUserData)
        if (validationStatus['status']) {
            props.history.push({
                pathname: '/upload-image',
                state: newUserData
            })
        }
        else {
            toast.error(`Please enter ${validationStatus['field']}`, { position: toast.POSITION.TOP_CENTER })
        }
    }

    return (
        <React.Fragment>
            <Loader show={isLoading} message={'Please wait while we store your data...'} />
            <div className={classes['main-container']}>
                <h3 className={'text-center'}>
                    Complete your profile
            </h3>
                <div className={`row`}>
                    <div className={`col col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3`}>
                        <div className={'form-group text-left'}>
                            <label className={`text-left`}>
                                First Name
                        </label>
                            <input onChange={handleChange} name={'firstName'} className={`form-control`} placeholder={'Your first name'} />
                        </div>
                    </div>
                    <div className={`col col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3`}>
                        <div className={'form-group text-left'}>
                            <label className={`text-left`}>
                                Middle Name
                        </label>
                            <input value={newUserData['middleName']} name={'middleName'} onChange={handleChange} className={`form-control`} placeholder={'Your middle name'} />
                        </div>
                    </div>
                    <div className={`col col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3`}>
                        <div className={'form-group text-left'}>
                            <label className={`text-left`}>
                                Last Name
                        </label>
                            <input value={newUserData['lastName']} name={'lastName'} onChange={handleChange} className={`form-control`} placeholder={'Your last name'} />
                        </div>
                    </div>
                    <div className={`col col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3`}>
                        <div className={`form-group text-left`}>
                            <label>
                                Father/Mother/Husband Full Name
                        </label>
                            <input value={newUserData['guardianName']} name={'guardianName'} onChange={handleChange} className={`form-control`} placeholder={'Guardian\'s Name'} />
                        </div>
                    </div>
                </div>
                <div className={`row`}>
                    <div className={`col col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3`}>
                        <div className={`form-group text-left`}>
                            <label>
                                Date of Birth
                        </label>
                            <input className={`form-control`} name={'dob'} onChange={handleChange} value={newUserData['dob']} placeholder={'DD/MM/YYYY'} />
                        </div>
                    </div>
                    <div className={`col col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3`}>
                        <div className={`form-group text-left`}>
                            <label>
                                Birth Place
                        </label>
                            <input className={`form-control`} name={'birthPlace'} onChange={handleChange} value={newUserData['birthPlace']} placeholder={'Dombivali'} />
                        </div>
                    </div>
                    <div className={`col col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3`}>
                        <div className={`form-group text-left`}>
                            <label>
                                Birth District
                        </label>
                            <input className={`form-control`} name={'birthDistrict'} onChange={handleChange} value={newUserData['birthDistrict']} placeholder={'Thane'} />
                        </div>
                    </div>
                    <div className={`col col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3`}>
                        <div className={`form-group text-left`}>
                            <label>
                                Birth State
                        </label>
                            <input className={`form-control`} name={'birthState'} onChange={handleChange} value={newUserData['birthState']} placeholder={'Maharashtra'} />
                        </div>
                    </div>
                </div>
                <div className={`row`}>
                    <div className={`col col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3`}>
                        <div className={'form-group text-left'}>
                            <label className={`text-left`}>
                                Age(on 1 Jan)
                        </label>
                            <input className={`form-control`} placeholder={new Date().getFullYear()} disabled={true} />
                        </div>
                    </div>
                    <div className={`col col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3`}>
                        <div className={'form-group text-left'}>
                            <label className={`text-left`}>
                                Years
                        </label>
                            <input disabled={true} value={newUserData['years']} name={'years'} onChange={handleChange} className={`form-control`} />
                        </div>
                    </div>
                    <div className={`col col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3`}>
                        <div className={'form-group text-left'}>
                            <label className={`text-left`}>
                                Months
                        </label>
                            <input value={newUserData['months']} name={'months'} onChange={handleChange} className={`form-control`} />
                        </div>
                    </div>
                    <div className={`col col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3`}>
                        <div className={'form-group text-left'}>
                            <label className={`text-left`}>
                                Sex
                        </label>
                            <select className={`form-control`} value={newUserData['gender']} name={'gender'} onChange={handleChange}>
                                <option value={null} disabled={true}>
                                    SELECT GENDER
                            </option>
                                <option value={'male'}>
                                    MALE
                            </option>
                                <option value={'female'}>
                                    FEMALE
                            </option>
                                <option value={'other'}>
                                    OTHER
                            </option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className={`row`}>
                    <div className={`col col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3`}>
                        <div className={`form-group text-left`}>
                            <label>
                                House Number
                        </label>
                            <input className={`form-control`} name={'addLine1'} onChange={handleChange} value={newUserData['addLine1']} placeholder={'House/Door Number'} />
                        </div>
                    </div>
                    <div className={`col col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3`}>
                        <div className={`form-group text-left`}>
                            <label>
                                Apartment/Building
                        </label>
                            <input className={`form-control`} name={'addLine2'} onChange={handleChange} value={newUserData['addLine2']} placeholder={'Flat name/Building name'} />
                        </div>
                    </div>
                    <div className={`col col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3`}>
                        <div className={`form-group text-left`}>
                            <label>
                                Landmark
                        </label>
                            <input className={`form-control`} name={'addLine3'} onChange={handleChange} value={newUserData['addLine3']} placeholder={'Street/Area/Locality'} />
                        </div>
                    </div>
                    <div className={`col col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3`}>
                        <div className={`form-group text-left`}>
                            <label>
                                Town
                        </label>
                            <input className={`form-control`} name={'town'} onChange={handleChange} value={newUserData['town']} placeholder={'Town/Village'} />
                        </div>
                    </div>
                </div>
                <div className={`row`}>
                    <div className={`col col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3`}>
                        <div className={`form-group text-left`}>
                            <label>
                                Post office
                        </label>
                            <input className={`form-control`} name={'postOffice'} onChange={handleChange} value={newUserData['postOffice']} placeholder={'Thane'} />
                        </div>
                    </div>
                    <div className={`col col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3`}>
                        <div className={`form-group text-left`}>
                            <label>
                                Pin Code
                        </label>
                            <input className={`form-control`} name={'pinCode'} onChange={handleChange} value={newUserData['pinCode']} placeholder={'400001'} />
                        </div>
                    </div>
                    <div className={`col col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3`}>
                        <div className={`form-group text-left`}>
                            <label>
                                Tehsil/Taluka
                        </label>
                            <input className={`form-control`} name={'taluka'} onChange={handleChange} value={newUserData['taluka']} placeholder={'Tehsil/Taluka'} />
                        </div>
                    </div>
                    <div className={`col col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3`}>
                        <div className={`form-group text-left`}>
                            <label>
                                District
                        </label>
                            <input className={`form-control`} name={'district'} onChange={handleChange} value={newUserData['district']} placeholder={'Street/Area/Locality'} />
                        </div>
                    </div>
                </div>
                <div className={`row`}>
                    <div className={`col col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center`}>
                        <button className={`btn btn-success`} onClick={() => registerUser()}>Submit</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Register
