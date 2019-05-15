import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
 
import Maps from './pages/map';
import NavTabs from './navbar';
import Listbar from './pages/listbar';
import HappyHours from './pages/happyhours';
import Exclusivite from './pages/exclusivite';
import Login from './pages/login';
import Layout from './pages/layout';
 
export default function MainRouter () {
    return (
        <Router>
            <Layout>
                <Route exact path="/home" component={Maps}/>
                <Route path="/happyhours" component={HappyHours}/>
                <Route path="/listbar" component={Listbar}/>
                <Route path="/exclusivite" component={Exclusivite}/>
                <Route path="/login" component={Login}/>
            </Layout>
        </Router>
    )
}