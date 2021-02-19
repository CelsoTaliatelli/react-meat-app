import { Container, Grid } from "@material-ui/core";
import Brand from "./Brand";
import RestaurantList from "./RestaurantList";
import Search from "./Search";
import { useState, useEffect } from "react";
import axios from "axios";


export default function Home() {
  const [state, setState] = useState({ restaurants : [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:3004/restaurants',
      );

      setState(result.data);
    };

    fetchData();
  }, []);
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
      <RestaurantList filterText={state} restaurants={state.restaurants.data} />
    </div>
  );
}