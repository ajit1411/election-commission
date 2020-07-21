import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppHeader from './../AppHeader'
import AppBody from './../AppBody'

const Applayout = props => {
    return (
        <BrowserRouter>
            <AppHeader />
            <AppBody />
        </BrowserRouter>
    )
}

export default Applayout
