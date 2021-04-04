import { Container, Grid } from "@material-ui/core";
import Brand from "./Brand";
import RestaurantList from "./RestaurantList";
import Search from "./Search";
import { useState,useEffect } from "react";
//import { getAll } from "../Services/API";
import axios from "axios";
  
const RESTAURANTS = []
/*getAll().then(function(response){
    response.data.forEach(e => {
      RESTAURANTS.push(e);
    });
});*/

 export default function Home() {
  const [state, setState] = useState(0);

  useEffect(async () => {
    const RESTAURANTS = await axios(
      'http://localhost:3004/restaurants'
    );
    setState(RESTAURANTS.data);
  },[]);
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
      <RestaurantList filterText={state} restaurants={state} />
    </div>
  );
}