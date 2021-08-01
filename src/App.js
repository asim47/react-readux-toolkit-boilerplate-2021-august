import React, { useEffect, useState, lazy, Suspense } from 'react'
import { Route, Redirect, Switch } from "react-router-dom"
import PropTypes from 'prop-types'

const Home = lazy(() => import("./pages/Home"))


const App = (props) => {


    return (
        <Suspense fallback={<>loading...</>}>
            <Switch>
                <Route path="/" exact component={Home} />
            </Switch>
        </Suspense>
    )
}

App.propTypes = {

}


export default App
