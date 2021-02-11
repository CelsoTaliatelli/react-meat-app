import { Typography,makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root:{
        color: '#DF1A48',
        textAlign:'center',
        marginTop:'6rem'
    },
    sp:{
        color:'#3e3e3e',
        fontWeight:'lighter'
    }
})

export default function Brand() {
    const classes = useStyles();
    return (
        <div>
            <Typography component="h1" variant="h2" className={classes.root}>
                GOOD<span className={classes.sp}>FOOD</span>
            </Typography>
            <Typography component="h2" variant="h6" className={classes.sp} style={{textAlign:'center'}}>
                Encontre aqui restuarntes e mercados próximos de você
            </Typography>
        </div>
    );
}