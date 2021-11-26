import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';
import { HeaderAction } from './HeaderActions';

export const Header = ({ toggleDrawer, actions, title }) => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.root}>
        <div className={classes.left}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            edge="start"
            className={classes.burger}
          >
            <MenuIcon />
          </IconButton>
          {title}
        </div>
        <div className={classes.badges}>
          {actions.map((action) => (
            <HeaderAction key={action.label} action={action} />
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  burger: {
    width: theme.spacing(7) + 1,
    marginRight: theme.spacing(1),
  },
  left: {
    display: 'flex',
    alignItems: 'center',
  },
}));
