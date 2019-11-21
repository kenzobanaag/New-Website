import React from 'react';
import 'typeface-roboto';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 'auto',
  },
  paperRoot: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(3),
  },
}));

function About() {
    const classes = useStyles();

    return(
        <React.Fragment>
            <Paper className={classes.paperRoot}>
            <div className={classes.root}>
                <Typography variant="h5" gutterBottom>
                    About
                </Typography>
                <Typography variant="body1">
                    Hey, i'm Kenzo, a Software Engineering senior at 
                    Washington State University Everett. One of the things that I'm really passionate
                    about is creating. I enjoy creating different things such as programs and music. On my 
                    spare time I like sweating it out in the gym to unwind and keep myself healthy. 
                </Typography>
            </div>
            </Paper>
        </React.Fragment>
    );
}

export default About;