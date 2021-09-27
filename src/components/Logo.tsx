import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(({
  "@keyframes rainbow": {
    "0%": { backgroundPosition:'left'},
    "50%": {backgroundPosition: 'right'},
    "100%": { backgroundPosition:'left'},
  },
  gradient: {
    backgroundSize: '200% 200%',
    animation: '$rainbow 2s ease-in-out infinite',
    background: 'linear-gradient(to right, crimson,pink,springgreen)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'rgba(0,0,0,1)',
    fontSize: 88,
    width: 300,
    margin:' auto',
    fontStyle: "italic",
    fontWeight: 400,
    fontFamily: "Damion",
    display: 'block',
    textAlign: 'center',
    transition: 'color .2s ease-in-out',
    "&:hover": {  
      color: 'rgba(0,0,0,0)',
    },
  }
}));

export const Logo: React.FC = () => {
  const classes = useStyles();

  const logo = (
    <div>
      <h1 className={classes.gradient}> dalston </h1>
    </div>
  );
  return logo;
}