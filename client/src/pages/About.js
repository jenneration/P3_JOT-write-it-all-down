import React from "react";
import ArjunCard from "./ArjunCard";
import MenukaCard from "./MenukaCard";
import MerryCard from "./MarryCard";
import JennerCard from "./JennerCard";
import {Grid} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

const About =() => {

    return ( 
        
        
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
        </Grid>
   
        );

};

export default About;