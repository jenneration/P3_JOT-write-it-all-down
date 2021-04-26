import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import arjun from "../assets/arjun.gif";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 500,
    height: 500,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={arjun} />
            </ButtonBase>
          </Grid>
          <Grid item s={12} md={6} lg={4} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item >
                <Typography  style={{ padding: 150 }}>
                  ARJUN FullStackDevleoper
                </Typography>
                
                
              </Grid>
              <Grid item>
                
              </Grid>
            </Grid>
            <Grid item>
             
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
