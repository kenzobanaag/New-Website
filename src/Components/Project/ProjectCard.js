import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Tooltip from '@material-ui/core/Tooltip';
import Collapse from '@material-ui/core/Collapse';
import clsx from 'clsx';
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CodeIcon from '@material-ui/icons/Code'

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
      marginLeft: theme.spacing(1),
      marginTop: theme.spacing(.5),
      marginBottom: theme.spacing(.5),
    },
  },
  expand: {
    float: 'right',
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

function ProjectCard(props) {

  const classes = useStyles();
  const projectItem = props.item;
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  

  const processProjectType = (type) => {
    if (type === 0)
      return "Group Project"
    else
      return "Personal Project"
  }

  const addTypeTitle = (type) => {
    if(expanded) {
      if (type === 0)
      return(
        <div>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            My Responsibilities: 
          </Typography>
        </div>
      )
    else
      return(
        <div>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Important Work: 
          </Typography>
        </div>
      )
    }
  }


  const processArray = (array) => {
    var lang = [];
    for (var prop in array)
      if (array.hasOwnProperty(prop)) //add to a list?
        lang.push(array[prop])
    return lang;
  }

  const processChips = (array) => {
    return (array.map(item => (
        <Chip
          label={item}
        />
    )))
  }

  const processWork = (array) => {
    if(expanded) {
      return (
        (array.map(item => (
        <div>
          <Typography variant="body2" gutterBottom>
            <ListItem>
            {item}
            </ListItem>
          </Typography>
        </div>
      ))))
    }
  }


  const chipArray = processArray(projectItem.progUsage);
  const workArray = processArray(projectItem.workDone);


  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {processProjectType(projectItem.type)}
          <Tooltip title="More Information">
          <IconButton size="small" aria-label="more" 
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          >
            <ExpandMoreIcon />
          </IconButton>
          </Tooltip>
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
      <Collapse in={expanded} timeout="auto" unmountOnExit></Collapse>
      <CardContent>
          {addTypeTitle(projectItem.type)}
          {processWork(workArray)}
      </CardContent>
      <CardActions className={classes.root}>
        {processChips(chipArray)}
      </CardActions>
    </Card>
  );
}

export default ProjectCard;