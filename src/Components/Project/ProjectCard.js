import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
      minWidth: 275,
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    pos2: {
        marginBottom: 5,
    },
    left: {
        marginLeft: 8,
    },
  });

function ProjectCard (props) {

    const classes = useStyles();
    const projectItem = props.item;

    const processProjectType = (type) => {
        if(type === 0) 
            return "Group Project"
        else 
            return "Personal Project"
    }

    
    const processWork = (workArray) => {
        var lang = "| ";
        for(var prop in workArray)
            if(workArray.hasOwnProperty(prop)) //add to a list?
                lang += workArray[prop] + " | "
        return lang;
    }

    

    return(
        <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
            {processProjectType(projectItem.type)}
        </Typography>
        <Typography variant="h5" component="h2" className={classes.pos2}>
            {projectItem.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
            {projectItem.date}
        </Typography>
        <Typography variant="body2" component="p">
            {projectItem.description}
        </Typography>
      </CardContent>
      <CardActions className={classes.left}>
            {processWork(projectItem.progUsage)}
      </CardActions>
    </Card>
    );
}

export default ProjectCard;