import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
  return (
    <Typography component="div">
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  bar: {
      background: 'white',
      color: 'black'
  }
}));

function SimpleTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar className={classes.bar} position="static">
        <Tabs centered value={value} onChange={handleChange}>
          {props.tabs.map((tab, i) => (
            <Tab key={i} label={tab.name} />
          ))}
        </Tabs>
      </AppBar>
        {props.tabs.map((tab, i) => (
          <div key={i}>
            {
              value === i && <TabContainer>{tab.item}</TabContainer>
            }
          </div>
        ))}
    </div>
  );
}

export default SimpleTabs;