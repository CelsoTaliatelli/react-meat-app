import { Container, Grid, makeStyles } from "@material-ui/core";
import Restaurant from "./Restaurant";
import React from 'react';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(15),
        paddingBottom: theme.spacing(8)
    }
}));
export default function RestaurantList(props) {
    const restaurants = props.products;
    const classes = useStyles();
    const filter = props.filterText;
    const gridItem = [];

    restaurants.forEach(r => {
        if(r.name.indexOf(filter) === -1){
            return;
        }
        gridItem.push(
            <Grid item key={r.id} xs={12} sm={6} md={4}>
                <Link to={`restaurants/${r.id}`} style={{ textDecoration: 'none' }}>
                    <Restaurant products={r} />
                </Link>
            </Grid>
        );    
    });
    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
               {gridItem}
            </Grid>
        </Container >
    );
} 