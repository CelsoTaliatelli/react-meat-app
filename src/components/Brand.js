import { Typography,makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root:{
        color: '#DF1A48',
        textAlign:'center',
        marginTop:'6rem'
    },
    sp:{
        color:'#001',
        fontWeight:'lighter'
    }
})

export default function Brand() {
    const classes = useStyles();
    return (
        <Typography component="h1" variant="h2" className={classes.root}>
            GOOD<span className={classes.sp}>FOOD</span>
        </Typography>
    );
}