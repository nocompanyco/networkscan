import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import InfoIcon from '@material-ui/icons/Info';
import EventNoteIcon from '@material-ui/icons/EventNote';
import useStyles from './pages-header.styles';

export default function Header({ history }) {
  const classes = useStyles();
  const [clicked, setClicked] = useState(null);
  const pathName = history.location.pathname;

  const handleClick = (id) => {
    return setClicked(id);
  };

  return (
    <div id="pagesHeader" className={classes.root}>
      <AppBar className={classes.AppBar} position="static">
        <Toolbar className={classes.toolbar}>
          <div className={classes.container}>
            <IconButton
              id="one"
              edge={false}
              className={classes.menuButton}
              color="inherit"
              aria-label="back"
              component={NavLink}
              to="/"
              onClick={() => handleClick(1)}
            >
              <ArrowBackIosIcon
                className={classes.backIcon}
                style={{
                  color:
                    clicked === 1 || pathName === '/' ? '#3BB7E3' : '#7C7C7D ',
                }}
              />
            </IconButton>
            <Typography
              align="center"
              variant="button"
              className={classes.backText}
              style={{
                color:
                  clicked === 1 || pathName === '/' ? '#3BB7E3' : '#7C7C7D ',
              }}
            >
              Back
            </Typography>
          </div>
          <div className={classes.container}>
            <IconButton
              id="two"
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="lan"
              component={NavLink}
              to="/lan"
              onClick={() => handleClick(2)}
            >
              <AccountTreeIcon
                align="true"
                className={classes.icon}
                style={{
                  color:
                    clicked === 2 || pathName === '/lan'
                      ? '#3BB7E3'
                      : '#7C7C7D ',
                }}
              />
            </IconButton>
            <Typography
              align="center"
              variant="button"
              className={classes.lanText}
              style={{
                color:
                  clicked === 2 || pathName === '/lan' ? '#3BB7E3' : '#7C7C7D ',
                marginRight: 24,
              }}
            >
              Lan
            </Typography>
          </div>
          <div className={classes.container}>
            <IconButton
              id="three"
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="Info"
              component={NavLink}
              to="/info"
              onClick={() => handleClick(3)}
            >
              <EventNoteIcon
                className={classes.icon}
                style={{
                  color:
                    clicked === 3 || pathName === '/info'
                      ? '#3BB7E3'
                      : '#7C7C7D ',
                }}
              />
            </IconButton>
            <Typography
              align="center"
              variant="button"
              className={classes.infoText}
              style={{
                color:
                  clicked === 3 || pathName === '/info'
                    ? '#3BB7E3'
                    : '#7C7C7D ',
                marginRight: 24,
              }}
            >
              Info
            </Typography>
          </div>
          <div className={classes.container}>
            <IconButton
              id="four"
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="About"
              component={NavLink}
              to="/about"
              onClick={() => handleClick(4)}
            >
              <InfoIcon
                className={classes.icon}
                style={{
                  color:
                    clicked === 4 || pathName === '/about'
                      ? '#3BB7E3'
                      : '#7C7C7D ',
                }}
              />
            </IconButton>
            <Typography
              align="center"
              variant="button"
              className={classes.aboutText}
              style={{
                color:
                  clicked === 4 || pathName === '/about'
                    ? '#3BB7E3'
                    : '#7C7C7D ',
                marginRight: 38,
              }}
            >
              About
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
