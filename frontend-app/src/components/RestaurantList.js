import { Container, Grid, makeStyles } from "@material-ui/core";
import Restaurant from "./Restaurant";
import React, { useState, useEffect } from 'react';
import { axios } from 'axios';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(15),
        paddingBottom: theme.spacing(8)
    }
}));
export default function RestaurantList(props) {
    const restaurants = props.products; 
    console.log(props.products);
    const classes = useStyles();
    //const restaurants = [1, 2, 3];
    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
            {restaurants.map((r) => (
                    <Grid item key={r.id} xs={12} sm={6} md={4}>
                        <Link to={`restaurants/${r.id}`} style={{ textDecoration: 'none' }}>
                            <Restaurant products={r} />
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Container >
    );
} 