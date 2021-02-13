import { Grid, makeStyles, Card, CardContent, CardMedia, Hidden, Typography, Container, Button } from '@material-ui/core';
import InputNumber from './InputNumber';


const useStyles = makeStyles((theme) => ({
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160
    },
    cardGrid: {
        paddingTop: theme.spacing(15),
        paddingBottom: theme.spacing(8)
    },
    button: {
        MarginTop: '2rem',
        backgroundColor: '#DF1A48',
    }
}));

export default function RestaurantMenu() {
    const classes = useStyles();
    const menu = [1, 2, 3, 4];
    return (
        <Container className={classes.cardGrid}>
            <Grid container spacing={4}>
                {menu.map((r) =>
                    <Grid item key={r} xs={12} md={6}>
                        <Card className={classes.card}>
                            <div className={classes.cardDetails}>
                                <CardContent>
                                    <Typography component="h2" variant="h5">
                                        Nome do Prato
                                    </Typography>
                                    <Typography variant="subtitle1" paragraph>
                                        Arroz, Feijão, salada e bife a cavalo
                                    </Typography>
                                    <InputNumber />
                                    <Button 
                                    size="large"
                                    className={classes.button}
                                    >R$ 25,00</Button>
                                </CardContent>
                            </div>
                            <Hidden xsDown>
                                <CardMedia className={classes.cardMedia} image={'paella.jpg'} title={'post.imageTitle'} />
                            </Hidden>
                        </Card>
                    </Grid>
                )}
            </Grid>
        </Container>
    );
}