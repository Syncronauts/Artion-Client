import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AppIcon from '@material-ui/icons/Apps';
import CreateIcon from '@material-ui/icons/AddBox';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  list: {
    width: 320,
  },
  fullList: {
    width: 'auto',
  },
  listText: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
  },
  menuButton: {
    color: 'white',
  },
}));

export default function SideDrawer({children}) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const anchor = 'left';

  return (
    <div>
      <Button onClick={toggleDrawer(anchor, true)} className={classes.menuButton}>
        <MenuIcon color='white' />
      </Button>
      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
        >
        <List className={classes.list}>
          <ListItem>
            {children}
          </ListItem>
          <Divider />
          <NavLink to='/explore' className={classes.listText}>
            <ListItem button key={'Explore'}>
              <ListItemIcon><AppIcon /></ListItemIcon>
              <ListItemText primary={'Explore'} />
            </ListItem>
          </NavLink>
          <Divider />
          <NavLink to='/create' className={classes.listText}>
            <ListItem button key={'Create'}>
              <ListItemIcon><CreateIcon /></ListItemIcon>
              <ListItemText primary={'Create'} />
            </ListItem>
          </NavLink>
          <Divider />
        </List>
      </Drawer>
    </div>
  );
}
