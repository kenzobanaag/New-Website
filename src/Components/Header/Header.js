import React from 'react';
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Container from '@material-ui/core/Container'

/* 
    TODO: Have a toggle button on top to toggle dark and light mode
          Have some pictures to show i guess?
*/
const useStyles = makeStyles(theme => ({
    root: {
        background: theme.palette.background.paper,
        height: 'auto',
        textAlign: 'left',
        padding: theme.spacing(5),
    },
    left: {
        textAlign: 'left',
    }
}));


function Header () {

    const classes = useStyles();

    return(
        <React.Fragment>
            <div className={classes.root}>
                <Container maxWidth="md">
                <Typography variant="h1" gutterBottom>
                    Kenzo Banaag
                </Typography>
                <Divider />
                <Typography variant="overline" gutterBottom className={classes.left}>
                    Software Engineering Student
                </Typography>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default Header;