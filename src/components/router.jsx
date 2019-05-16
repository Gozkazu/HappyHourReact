import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Maps from './pages/map';
import Listbar from './pages/listbar';
import HappyHours from './pages/happyhours';
import Exclusivite from './pages/exclusivite';
import Login from './pages/login';
import Layout from './pages/layout';
import MapsVue from './pages/drawer_map';
 
export default function MainRouter () {
    return (
        <Router>
            <Layout/>
                <Route exact path="/" component={MapsVue}/>
                <Route exact path="/home" component={MapsVue}/>
                <Route path="/happyhours" component={HappyHours}/>
                <Route path="/listbar" component={Listbar}/>
                <Route path="/exclusivite" component={Exclusivite}/>
                <Route path="/login" component={Login}/>           
        </Router>
    )
}