import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import menuka from "../assets/menuka.gif";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
    maxHeight:700,
  },
  image: {
    width: 430,
    height: 400,
  },
  resize:{
    fontSize:30
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
              <img className={classes.img} alt="complex" src={menuka} />
            </ButtonBase>
          </Grid>
          <Grid item s={12} md={6} lg={4} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>

                <Typography style={{ padding: 155 }} className={classes.resize} >
                  MENUKA 

                </Typography>
                {/* <Typography variant="body2" textAlign="center" gutterBottom>
                 SR. Website QA Analyst
                </Typography> */}
                
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