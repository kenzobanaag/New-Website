import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import LanguageList from './LangList';
import Divider from '@material-ui/core/Divider'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 'auto',
    minHeight: 225,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  paperRoot: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(3),
  },
  seperation: {
    margin: theme.spacing(1),
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <Paper className={classes.paperRoot}>
          <Typography variant="h5">Programming</Typography>
          <Typography variant="overline" className={classes.seperation}>(+)Great (0)Good (-)Basic</Typography>
          <Divider className={classes.seperation}/>
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Languages" {...a11yProps(0)} />
        <Tab label="Frameworks" {...a11yProps(1)} />
        <Tab label="Databases" {...a11yProps(2)} />
        <Tab label="Cloud Services" {...a11yProps(3)} />
        <Tab label="Concepts" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <LanguageList pos={0}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <LanguageList pos={1}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <LanguageList pos={2}/>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <LanguageList pos={3}/>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <LanguageList pos={4}/>
      </TabPanel>
    </div>
    </Paper>
  );
}