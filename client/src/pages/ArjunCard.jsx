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
  resize:{
    fontSize:30
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
    maxHeight:700,
  },
  image: {
    width: 400,
    height: 400,
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
          <Grid item sm={12} md={6} lg={4} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item >
                <Typography  style={{ padding: 150 }}className={classes.resize}>
                  ARJUN 
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
