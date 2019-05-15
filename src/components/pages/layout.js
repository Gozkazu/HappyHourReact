import React from 'react';
import NavTabs from '../navbar';
import NavNav from './navnav'

class Layout extends React.Component{
    render(){
        return (
            <div>
                <NavNav/>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
export default Layout;