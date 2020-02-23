import React from 'react'
import { Switch, Route } from 'react-router'

import Home from './pages/Home'

export default function ({ }) {
    return (
        <Switch>
            <Route path="/" render={props => (
                <Home />
            )} />
        </Switch>
    )
}