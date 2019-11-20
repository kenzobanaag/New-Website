import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip'
import IconButton from '@material-ui/core/IconButton'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
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
  root: {
    display: 'flex',
    justifyContent: 'left',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  rightContent: {
    float: 'right',
  },
}));

function ProjectCard(props) {

  const classes = useStyles();
  const projectItem = props.item;

  var workArray = [];

  const processProjectType = (type) => {
    if (type === 0)
      return "Group Project"
    else
      return "Personal Project"
  }


  const processWork = (workArray) => {
    var lang = [];
    for (var prop in workArray)
      if (workArray.hasOwnProperty(prop)) //add to a list?
        lang.push(workArray[prop])
    return lang;
  }

  const processChips = (array) => {
    return (array.map(item => (
        <Chip
          label={item}
        />
    )))
  }

  const chipArray = processWork(projectItem.progUsage);


  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {processProjectType(projectItem.type)}
          <IconButton size="small" aria-label="more" className={classes.rightContent}>
            <ExpandMoreIcon />
          </IconButton>
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
      <CardActions className={classes.root}>
        {processChips(chipArray)}
      </CardActions>
    </Card>
  );
}

export default ProjectCard;