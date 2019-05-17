import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const drawerWidth = 300;

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        width: drawerWidth,
        marginTop: "100px",
    },
});

const MetroBox = ({ bar }) => (
    <Paper elevation={1} className="col">
        <Typography variant="h5" component="h3">
            { bar.name }
        </Typography>
        <Typography component="p">
            { bar.description }
        </Typography>
    </Paper>
);

function Listbar(props) {
    const { classes } = props;

    const bars = [
        {name:" toto", description: "toto"},
        {name:" toto", description: "toto"},
        {name:" toto", description: "toto"}
    ]

    return (
        <main className={classes.content}>
            <div>
                {bars && bars.map(bar => (
                    <MetroBox className={classes.content} bar={bar} />
                ))}
            </div>
        </main>
    );
}

Listbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Listbar);