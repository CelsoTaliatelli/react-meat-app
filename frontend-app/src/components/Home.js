import { Container, Grid } from "@material-ui/core";
import Brand from "./Brand";
import RestaurantList from "./RestaurantList";
import Search from "./Search";
import { useState } from "react";

const PRODUCTS = [
    {id: 1, name: "Big Burger Food",category:"lanches",rate: 4.7,area:"2,5 Km",image:"burger.jpeg"},
    {id: 2, name: "Bella Donna Food",category:"Comida Italiana",rate: 3.9,area:"2,9 Km",image:"italian.png"},
    {id: 3, name: "Yum Lee Food",category:"Comida Chinesa",rate: 5.0,area:"3,5 Km",image:"chinese.jpg"}
  ];

export default function Home() {
  const [state, setState] = useState(' ');
    return (
        <div>
        <Container maxWidth="sm">
            <Brand />
            <Grid container justify="center">
            <Search 
              filterText={() => setState(state)}
              onFilterTextChange={e => setState(e.target.value)}
              />
            </Grid>
        </Container>
        <RestaurantList filterText={state} products={PRODUCTS}/>
      </div>
    ); 
}