import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Search from './Components/Search'
import Register from './Components/Register'
import Voters from './Components/Voters'
import Upload from './Components/Upload/Upload'
const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Search} />
            <Route exact path='/search' component={Search} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/users' component={Voters} />
            <Route exact path='/upload-image' component={Upload} />
        </Switch>
    )
}

export default Routes