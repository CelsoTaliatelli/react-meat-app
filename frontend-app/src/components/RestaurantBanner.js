import { Container, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'
import React,{ useEffect, useState } from "react";
import { getById } from "../Services/API";
let banner = "banner.jpg";
const useStyles = makeStyles((theme) => ({

    top: {
        marginTop: '4rem'
    },
    bannerImg: {
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: '#FFF',
        marginBottom: theme.spacing(4),
        backgroundImage: `url(http://localhost:3000/${banner})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)'
    },
    bannerContent: {
        position: 'relative',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        }
    }
}))

export default function Banner(props) {
    const[banner,setState] = useState(' ');
    const id = props.restaurantId;
    const classes = useStyles();
    useEffect(() => {
        getById(id).then(function (response) {
            setState(response.data);
        });
    }, [])
       
    return (
        <div>
            <Container maxWidth="lg" className={classes.top}>
                <Paper className={classes.bannerImg}>
                    {<img style={{ display: 'none' }} src={banner[0].banner} alt='banner' />}
                    <div className={classes.overlay} />
                    <Grid container>
                        <Grid item md={6}>
                            <div className={classes.bannerContent}>
                                <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                                    { banner[0].name }
                                </Typography>
                                <Typography variant="h5" color="inherit" paragraph>
                                    { banner[0].description }
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </div>
    );
}