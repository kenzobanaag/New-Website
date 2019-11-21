import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import ProjectCard from './ProjectCard';
import Grid from '@material-ui/core/Grid';

/*
    TODO: Figure out how to show our project contributions
          Not sure how much stress we need to put on that 
          but we need to include it somewhere it is visible
*/

const useStyles = makeStyles(theme => ({
    paperRoot: {
        padding: theme.spacing(3, 2),
        margin: theme.spacing(3),
    },
    seperation: {
        marginBottom: theme.spacing(2),
    },
    root: {
        flexGrow: 1,
    },
}));

function Projects() {
    const classes = useStyles();

    const stateList = [
        {
            title: 'Gym Tracker Mobile Application',
            description: 'Mobile application that tracks and creates daily gym activity' +
                ' by allowing the user to dynamically input current and future workouts',
            date: 'June 2019 - Present',
            //this is an object not an array!!!!
            workDone: {
                work1: 'Implemented SQLite database for storing workout information',
                work2: 'Implemented workout sharing through sending text files with the use' +
                    ' of third party applications such as Facebook Messenger and phone default text messaging',
                work3: 'Integrated Material Design to create a more visually pleasing application',
            },
            //0 group, 1 is personal
            type: 1,
            progUsage: {
                prog1: 'Java',
                prog2: 'Android Studio',
                prog3: 'SQLite'
            }
        },
        {
            title: 'Survey Campaign Manager',
            description: 'A Microsoft sponsored survey campaign manager that helps users',
            date: 'Sept 2019 - May 2020',
            workDone: {
                work1: 'Developed front end prototype capable of processing json data' +
                    ' converting it to essential information for processing and presentation.',
                work2: 'Integrated material-ui to front end improving site aesthetics and functionality',
                work3: 'Designed survey and survey result data contract',
            },
            type: 0,
            progUsage: {
                prog1: 'ReactJS',
                prog2: 'NodeJS',
                prog3: 'ExpressJS',
                prog4: 'MongoDB',
                prog5: 'Azure CosmosDB',
                prog6: 'AWS Amplify',
            }
        },
        {
            title: 'Yelp Database',
            description: 'Client based data search application capable of searching yelp' +
                ' users and businesses from a local database',
            date: 'Feb 2019 - April 2019',
            workDone: {
                work1: 'Implmented Bing Maps Toolkit for location mapping and distance calculations',
                work2: 'Constructed basic SQL queries capable of pulling out necessary information from the database',
                work3: 'Utilized DBMS principles to construct database relations from the ER models and diagrams',
                work4: 'Designed and developed the front end user interface'
            },
            type: 0,
            progUsage: {
                prog1: 'C#',
                prog2: 'PostreSQL',
            }
        },
        {
            title: 'Blind Navigation App',
            description: 'A mobile navigation application designed to help visually impared individuals to' +
            ' navigate the rooms of Washington State University Everett',
            date: 'Sept 2019 - Dec 2019',
            workDone: {
                work1: "Integrated text to speech and speech to text android API's",
                work2: 'Created and designed application user interface',
            },
            type: 0,
            progUsage: {
                prog1: 'Java',
                prog2: 'Android Studio',
            }
        },
        {
            title: 'Youtube Analyzer',
            description: '',
            date: 'Sep 2019 - Dec 2019',
            workDone: {
                work1: 'Created a parser capable of parsing large amounts of unequally lengthed text files to csv',
                work2: 'Processed high volume csv files to create graph nodes and relations',
                work3: 'Built cypher queries to single out targeted information',
            },
            type: 0,
            progUsage: {
                prog1: 'C#',
                prog2: 'Neo4J',
                prog3: 'Hadoop Map Reduce',
            }
        },
        {
            title: 'Checkstyle Plugin',
            description: '',
            date: 'Sept 2019 - Dec 2019',
            workDone: {
                work1: 'Created black box test suites and cases to locate and fix bugs',
                work2: 'Implemented checks that find irregularities in a java code file',
            },
            type: 0,
            progUsage: {
                prog1: 'Java',
            }
        },

    ]

    return (
        <div >
            <Paper className={classes.paperRoot}>
                <Typography variant="h5" className={classes.seperation}>
                    Projects
                </Typography>
                {/* Grid here? */}
                <div className={classes.root}> 
                <Grid container spacing={3} >
                    <Grid item sm={6} >
                        <ProjectCard item={stateList[0]} />
                    </Grid>
                    <Grid item sm={6}>
                        <ProjectCard item={stateList[1] } />
                    </Grid>
                    <Grid item sm={6} >
                        <ProjectCard item={stateList[2]} />
                    </Grid>
                    <Grid item sm={6}>
                        <ProjectCard item={stateList[3] } />
                    </Grid>
                    <Grid item sm={6} >
                        <ProjectCard item={stateList[4]} />
                    </Grid>
                    <Grid item sm={6}>
                        <ProjectCard item={stateList[5] } />
                    </Grid>
                </Grid>
                </div>
            </Paper>
            
        </div>
    );
}

export default Projects;