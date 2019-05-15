import React from 'react';
import {Link} from 'react-router-dom';
import { AppBar,Button, Toolbar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.blue,
    },
  });

class NavNav extends React.Component{
    render(){
    return(
        <AppBar className="absolute top left right z1" color="default"> 
            <Toolbar>
                <Button component={Link} to ='/home'>Maps</Button>
                <Button component={Link} to ='/happyhours'>HappyHours</Button>
                <Button component={Link} to ='/listbar'>Liste des Bars</Button>
                <Button component={Link} to ='/exclusivite'>Exclusivite</Button>
                <Button component={Link} to ='login'>Profile</Button>
            </Toolbar>
        </AppBar>
    );
}
}
export default withStyles(styles)(NavNav);