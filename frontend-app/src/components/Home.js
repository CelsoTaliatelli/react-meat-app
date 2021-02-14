import { Container, Grid } from "@material-ui/core";
import { getAll } from "../Services/restaurants";
import Brand from "./Brand";
import RestaurantList from "./RestaurantList";
import Search from "./Search";

export default function Home() {
    console.log(getAll());
    return (
        <div>
        <Container maxWidth="sm">
            <Brand />
            <Grid container justify="center">
            <Search />
            </Grid>
        </Container>
        <RestaurantList />
      </div>
    ); 
}