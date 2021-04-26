import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import jennerm from "../assets/jennerm.gif";


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
  resize:{
    fontSize:50
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
              <img className={classes.img} alt="complex" src={jennerm} />
            </ButtonBase>
          </Grid>
          <Grid item s={12} md={6} lg={4} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs align="center">
                <Typography style={{ padding: 155 }} >
                 JENNER <br></br> FullStackDevloper 
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
