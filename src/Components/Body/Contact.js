import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Popover from '@material-ui/core/Popover';
import { Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import SubjectIcon from '@material-ui/icons/Subject';
import Tooltip from '@material-ui/core/Tooltip'

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

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <React.Fragment>
            <div className={classes.root}>
            <Container maxWidth="sm">
                <Grid container >
                    <Grid item sm={3} >
                        <Link href="https://www.linkedin.com/in/kenzo-banaag-767a3b15b/" target="_blank" rel="noopener noreferrer">
                            <IconButton size="large">
                                <LinkedInIcon fontSize="large" />
                            </IconButton>
                        </Link>
                    </Grid>
                    <Grid item sm={3}>
                        <Link href="https://github.com/kenzobanaag" target="_blank" rel="noopener noreferrer">
                            <IconButton size="large" >
                                <GitHubIcon fontSize="large" />
                            </IconButton>
                        </Link>
                    </Grid>
                    <Grid item sm={3}>
                    <Link href="mailto:kenzobanaag@gmail.com" rel="noopener noreferrer">
                        <IconButton size="large">
                            <EmailIcon fontSize="large" onClick={handleClick}/>
                        </IconButton>
                        </Link>
                    </Grid>
                    <Grid item sm={3}>
                    <Link href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
                        <Tooltip title="Resume">
                        <IconButton size="large">
                            <SubjectIcon fontSize="large"/>
                        </IconButton>
                        </Tooltip>
                        </Link>
                    </Grid>
                </Grid>
                </Container>
            </div>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Typography className={classes.control}>
                    kenzobanaag@gmail.com
                </Typography>
            </Popover>
        </React.Fragment>
    );
}

export default Contact;