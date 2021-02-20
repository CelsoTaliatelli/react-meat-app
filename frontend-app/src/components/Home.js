import { Container, Grid } from "@material-ui/core";
import Brand from "./Brand";
import RestaurantList from "./RestaurantList";
import Search from "./Search";
import { useEffect, useState } from "react";
import { getAll } from "../Services/API";


 export default function Home() {
  const [state, setState] = useState(' ');
  useEffect(() => {
    getAll().then(e => setState(e.data));
  })
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