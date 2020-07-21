export const defaultUserData = {
    addLine1: '',
    addLine2: '',
    addLine3: '',
    birthDistrict: '',
    birthPlace: '',
    birthState: '',
    district: '',
    dob: '',
    email: '',
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
    years: ''
}

export const validateDetails = (userData) => {
    if (userData['addLine1'] === '')
        return {
            status: false,
            field: 'addLine1'
        }
    else if (userData['addLine2'] === '')
        return {
            status: false,
            field: 'addLine2'
        }
    else if (userData['addLine3'] == '')
        return {
            status: false,
            field: 'addLine3'
        }
    else if (userData['birthDistrict'] === '')
        return {
            status: false,
            field: 'birthDistrict'
        }
    else if (userData['birthPlace'] == '')
        return {
            status: false,
            field: 'birthPlace'
        }
    else if (userData['birthState'] === '')
        return {
            status: false,
            field: 'birthState'
        }
    else if (userData['district'] == '')
        return {
            status: false,
            field: 'district'
        }
    else if (userData['dob'] === '')
        return {
            status: false,
            field: 'dob'
        }
    else if (userData['email'] == '')
        return {
            status: false,
            field: 'email'
        }
    else if (userData['firstName'] == '')
        return {
            status: false,
            field: 'firstName'
        }
    else if (userData['gender'] == '')
        return {
            status: false,
            field: 'gender'
        }
    else if (userData['guardianName'] == '')
        return {
            status: false,
            field: 'guardianName'
        }
    else if (userData['lastName'] == '')
        return {
            status: false,
            field: 'lastName'
        }
    else if (userData['middleName'] == '')
        return {
            status: false,
            field: 'middleName'
        }
    else if (userData['months'] == '')
        return {
            status: false,
            field: 'months'
        }
    else if (userData['pinCode'] == '')
        return {
            status: false,
            field: 'pinCode'
        }
    else if (userData['postOffice'] == '')
        return {
            status: false,
            field: 'postOffice'
        }
    else if (userData['taluka'] == '')
        return {
            status: false,
            field: 'taluka'
        }
    else if (userData['town'] == '')
        return {
            status: false,
            field: 'town'
        }
    else if (userData['years'] == '')
        return {
            status: false,
            field: 'years'
        }
    else
        return {
            status: true
        }
}