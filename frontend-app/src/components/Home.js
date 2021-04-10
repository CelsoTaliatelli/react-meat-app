import { Container, Grid } from "@material-ui/core";
import Brand from "./Brand";
import RestaurantList from "./RestaurantList";
import Search from "./Search";
import { useState,useEffect } from "react";

 export default function Home() {
  const [state, setState] = useState(0);
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
      <RestaurantList filterText={state} />
    </div>
  );
}