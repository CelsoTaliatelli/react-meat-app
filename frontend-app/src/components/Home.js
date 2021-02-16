import { Container, Grid } from "@material-ui/core";
import { useState } from "react";
import Brand from "./Brand";
import RestaurantList from "./RestaurantList";
import Search from "./Search";

const PRODUCTS = [
    {id: 1, name: "Big Burger Food",category:"Lanches",rate: 4.7,area:"2,5 Km",image:"burger.jpeg"},
    {id: 2, name: "Bella Donna Food",category:"Comida Italiana",rate: 3.9,area:"2,9 Km",image:"italian.png"},
    {id: 3, name: "Yum Lee Food",category:"Comida Chinesa",rate: 5.0,area:"3,5 Km",image:"chinese.jpg"}
  ];

export default function Home() {
    return (
        <div>
        <Container maxWidth="sm">
            <Brand />
            <Grid container justify="center">
            <Search />
            </Grid>
        </Container>
        <RestaurantList products={PRODUCTS}/>
      </div>
    ); 
}