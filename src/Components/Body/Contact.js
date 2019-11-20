import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
//import Popover from '@material-ui/core/Popover';
//import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
//import {Typography, Button} from '@material-ui/core'

/* 
    TODO: We want a footer like contact section
    With links to our github, linkedin, email as well.
    Also include a link to our resume.
*/

const useStyles = makeStyles(theme => ({
    root: {
        background: theme.palette.background.paper,
        paddingBottom: '20px',
        height: '100px',
        marginTop: '50px',
        textAlign: 'center',
        paddingTop: '20px'
    },
    root2: {
        flexGrow: 1,
    },
    control: {
        padding: theme.spacing(2),
    },
}))

function Contact() {

    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.root}>
                <Grid container >
                    <Grid item sm={4} >
                        <Link href="https://www.linkedin.com/in/kenzo-banaag-767a3b15b/"  target="_blank" rel="noopener noreferrer">
                        <IconButton size="large">
                            <LinkedInIcon fontSize="large"/>
                        </IconButton>
                        </Link>
                    </Grid>
                    <Grid item sm={4}>
                    <Link href="https://github.com/kenzobanaag"  target="_blank" rel="noopener noreferrer">
                        <IconButton size="large" >
                            <GitHubIcon fontSize="large" />
                        </IconButton>
                        </Link>
                    </Grid>
                    <Grid item sm={4}>
                        <IconButton size="large" >
                            <EmailIcon fontSize="large" />
                        </IconButton>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    );
}

export default Contact;