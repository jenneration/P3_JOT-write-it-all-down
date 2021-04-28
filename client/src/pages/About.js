import React from "react";
import ArjunCard from "./ArjunCard";
import MenukaCard from "./MenukaCard";
import MerryCard from "./MarryCard";
import JennerCard from "./JennerCard";
import {Grid, Typography} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Footer from "../components/Footer/footer"

const About =() => {

    return ( 
        
      <div> 
          <br></br>
          
         <div>
             <br></br>
             <div>
                 <br></br>
                

    <Grid container  spacing ={5}>
    
        
        <Grid item sm={12} md={6} lg ={3}>
        <ArjunCard/>
        </Grid> 
        <Grid item sm={12} md={6} lg ={3}>
        <MenukaCard/>
        </Grid> 
        <Grid item sm={12} md={6} lg ={3}>
        <MerryCard/>
        </Grid> 
        <Grid item sm={12} md={6} lg ={3}>
        <JennerCard/>
        </Grid> 
        <Footer />
        </Grid>
        </div>
        </div>
        </div>
   
        );

};

export default About;