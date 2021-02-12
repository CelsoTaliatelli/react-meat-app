import { Container, Grid } from "@material-ui/core";
import Brand from "./Brand";
import RestaurantList from "./RestaurantList";
import Search from "./Search";

export default function Home() {
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