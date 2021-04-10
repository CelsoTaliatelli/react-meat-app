import { Container, Grid, makeStyles } from "@material-ui/core";
import Restaurant from "./Restaurant";
import React, { useState,useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(15),
        paddingBottom: theme.spacing(8)
    }
}));

export default function RestaurantList(props) {
    
    const classes = useStyles();
    const filter = props.filterText;
    const gridItem = [];
    
    const[data,setData] = useState(0);
    
    useEffect(async () => {
        const result = await axios(
           'http://localhost:8000/restaurants',
        );
        setData(result.data);
    },[]);

    for(var i = 0;i < data.length;i++){
        console.log(data[i].name);
        gridItem.push(
            <Grid item key={data[i].id} xs={12} sm={6} md={4}>
                <Link to={`restaurants/${data[i].id}`} style={{ textDecoration: 'none' }}>
                <Restaurant products={data[i]} />
                </Link>
            </Grid>
        );
    }

    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              {gridItem}
            </Grid>
        </Container >
    );
} 