import React from 'react';
import { makeStyles } from "@mui/styles";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import { Link } from 'react-router-dom';
import { ROUTES_CONFIG } from '../routes';
import { Logo } from "./Logo";

const colorArray = ["crimson", "pink", "springgreen", "orange"];
const getRandomColor = () => colorArray[Math.floor(Math.random() * colorArray.length)];

const useStyles = makeStyles(({
  root: {
    marginBottom: "10%",
  },
  navbar: {
    display: "flex",
    flexwrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    marginLeft: "0%",
  },
  title: {
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: 20,
    fontStyle: "normal",
    fontWeight: 600,
    WebkitFontSmoothing: 'antialiased',
    color: "black",
    textDecoration: "none! important",
  },
  link: {
    marginLeft: 30,
    fontSize: 13,
    fontStyle: "normal",
    fontWeight: 800,
    fontFamily: "'Poiret One', cursive;",
    textTransform: 'uppercase',
    letterSpacing: '1px',
    lineHeight: '1.3em',
    WebkitFontSmoothing: 'antialiased',
    color: "black",
    display: "flex",
    flexDirection: "row",
    textDecoration: "none",
    transition: '1s',
    "&:hover": {
      color: getRandomColor(),
      transition: "0.7s",
      textDecoration: "underline deeppink",
    },
    "&:focus": {
      color: getRandomColor(),
      transition: "0.7s",
      textDecoration: "underline deeppink",
    }
  },
}));

interface HeaderProps {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: HeaderProps) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger} style={{backgroundColor: 'white',}}>
      {children}
    </Slide>
  );
}

export const Header: React.FC = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment >
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className={classes.root} elevation={0} >
          <Link to={ROUTES_CONFIG.ROOT} className={classes.title} >
            <Logo />
          </Link>
          <Toolbar className={classes.navbar}>
            <Link to={ROUTES_CONFIG.ROOT} className={classes.link}>
              ALL
            </Link>
            <Link to={ROUTES_CONFIG.WOMEN_PRODUCT_LIST} className={classes.link}>
              WOMEN
            </Link>
            <Link to={ROUTES_CONFIG.MEN_PRODUCT_LIST} className={classes.link}>
              MEN
            </Link>
            <Link to={ROUTES_CONFIG.SHOES_PRODUCT_LIST} className={classes.link}>
              SHOES
            </Link>
            <Link to={ROUTES_CONFIG.BAGS_PRODUCT_LIST} className={classes.link}>
              BAGS
            </Link>
            <Link to={ROUTES_CONFIG.ACCESSORIES_PRODUCT_LIST} className={classes.link}>
              ACCESSORIES
            </Link>
            <Link to={ROUTES_CONFIG.ABOUT} className={classes.link}>
              ABOUT
            </Link>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar/>
    </React.Fragment>
  );
}