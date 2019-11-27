import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container'
import SubjectIcon from '@material-ui/icons/Subject';
import Tooltip from '@material-ui/core/Tooltip'

/* 
    TODO: Fix mobile version of this footer. 
          Decide if we really need a pop over as opposed to a tooltip on email
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
        <div>
            <div className={classes.root}>
            <Container maxWidth="sm">
                <Grid container >
                    <Grid item sm={3} >
                        <Link href="https://www.linkedin.com/in/kenzo-banaag-767a3b15b/" target="_blank" rel="noopener noreferrer">
                            <IconButton size="medium">
                                <LinkedInIcon fontSize="large" />
                            </IconButton>
                        </Link>
                    </Grid>
                    <Grid item sm={3}>
                        <Link href="https://github.com/kenzobanaag" target="_blank" rel="noopener noreferrer">
                            <IconButton size="medium" >
                                <GitHubIcon fontSize="large" />
                            </IconButton>
                        </Link>
                    </Grid>
                    <Grid item sm={3}>
                    <Link href="mailto:kenzobanaag@gmail.com" rel="noopener noreferrer">
                        <IconButton size="medium">
                            <EmailIcon fontSize="large"/>
                        </IconButton>
                        </Link>
                    </Grid>
                    <Grid item sm={3}>
                    <Link href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
                        <Tooltip title="Resume">
                        <IconButton size="medium">
                            <SubjectIcon fontSize="large" />
                        </IconButton>
                        </Tooltip>
                        </Link>
                    </Grid>
                </Grid>
                </Container>
            </div>
        </div>
    );
}

export default Contact;