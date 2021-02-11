import { Container, Grid, makeStyles } from "@material-ui/core";
import Restaurant from "./Restaurant";

const useStyles = makeStyles((theme) =>({
    cardGrid:{
        paddingTop: theme.spacing(15),
        paddingBottom: theme.spacing(8)
    }
}));

export default function RestaurantList() {
    const classes = useStyles();
    const restaurants = [1,2,3];
    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
                {restaurants.map((r) => (
                    <Grid item  key={r} xs={12} sm={6} md={4}>
                        <Restaurant />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
} 