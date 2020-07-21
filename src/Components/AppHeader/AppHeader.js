import React from 'react'
import classes from './AppHeader.module.css'
import { withRouter } from 'react-router-dom'
const AppHeader = () => {
    return (
        <div className={`container-fluid ${classes['main-container']}`}>
            <nav class="navbar navbar-expand-md">
                <a class="navbar-brand" href="#">Logo</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="/search">Search</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default withRouter(AppHeader)
