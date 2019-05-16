import React from 'react';
import NavNav from './navnav';

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