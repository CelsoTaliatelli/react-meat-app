import {Grid, makeStyles,Card,CardActionArea,CardContent,CardMedia,Hidden,Typography, Container} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    card: {
        display: 'flex',
    },
    cardDetails: { 
        flex:1,
    },
    cardMedia: {
        width: 160
    },
    cardGrid:{
        paddingTop: theme.spacing(15),
        paddingBottom: theme.spacing(8)
    }
}));

export default function RestaurantMenu() {
    const classes = useStyles();
    const menu = [1,2,3,4];
    return (
        <Container className={classes.cardGrid}>
            <Grid container spacing={4}>
                {menu.map((r) =>
                <Grid item key={r} xs={12} md={6}>
                    <CardActionArea component="a" href="#">
                        <Card className={classes.card}>
                        <div className={classes.cardDetails}>
                            <CardContent>
                            <Typography component="h2" variant="h5">
                                Nome do Prato
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                R$ 25,00
                            </Typography>
                            <Typography variant="subtitle1" paragraph>
                                Arroz, Feijão, salada e bife a cavalo
                            </Typography>
                            <Typography variant="subtitle1" color="primary">
                                Continue reading...
                            </Typography>
                            </CardContent>
                        </div>
                        <Hidden xsDown>
                            <CardMedia className={classes.cardMedia} image={'paella.jpg'} title={'post.imageTitle'} />
                        </Hidden>
                        </Card>
                    </CardActionArea>
                </Grid> 
                )}
            </Grid>
        </Container>
    );
}