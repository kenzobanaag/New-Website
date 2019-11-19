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
                    Hey, my name's Kenzo. I was born and raised in the Philippines and
                    migrated to the United States 7 years ago.
                    I enjoy creating different things like programs and music. 
                    I also enjoy going to the gym.
                    I am currently a senior in Washington State University Everett pursuing a degree
                    in Software Engineering.
                </Typography>
            </div>
            </Paper>
        </React.Fragment>
    );
}

export default About;