import { Grid, makeStyles, Card, CardContent, CardMedia, Hidden, Typography, Container, Button, TextField, StepLabel } from '@material-ui/core';
import InputNumber from './InputNumber';
import {addCart} from '../Services/Cart';
import {getById} from '../Services/API';
import React,{useState,useEffect} from 'react';

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
        "&:hover" :{
            color:'#DF1A48'
        },
        MarginTop: '25rem',
        backgroundColor: '#DF1A48',
        color: '#FFF',
        width: '15rem',
    }
}));


export default function RestaurantMenu(props) {

    const classes = useStyles();
    const menu = [];
    
    const[products,setProducts] = useState(0);
    useEffect(() => {
    getById(props.restaurantMenu).then(function(response){
        setProducts(response.data);
    });
    }, [])
      
      if(products){
          products.forEach(p => {
              menu.push(
            <Grid key={p.id} container spacing={4}>
                {p.menu.map((p) =>
                    <Grid item key={p.id} xs={12} md={6}>
                        <Card className={classes.card}>
                            <div className={classes.cardDetails}>
                                <CardContent>
                                    <Typography component="h2" variant="h5">
                                        {p.name}
                                    </Typography>
                                    <Typography variant="subtitle1" paragraph>
                                        {p.description}
                                    </Typography>
                                    <Grid container>
                                        <Grid item>
                                            <InputNumber value={p.price} />
                                        </Grid>
                                        <Grid item>
                                            <Button onClick={addCart}
                                                size="large"
                                                className={classes.button}
                                            >Adicionar ao Pedido
                                    </Button>
                                        </Grid>
                                    </Grid>

                                </CardContent>
                            </div>
                            <Hidden xsDown>
                                <CardMedia className={classes.cardMedia} image={'paella.jpg'} title={'post.imageTitle'} />
                            </Hidden>
                        </Card>
                    </Grid>
                )}
            </Grid>)
          });
      }
    return (
        <Container className={classes.cardGrid}>
            { menu }
        </Container>
    );
}