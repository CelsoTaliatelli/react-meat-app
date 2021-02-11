import { AppBar,Typography, Toolbar, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    bg: {
        backgroundColor: '#DF1A48'
    }
})

export default function Header() {
    const classes = useStyles();
    return (
        <AppBar position="relative" className={classes.bg}>
            <Toolbar>
                <Typography variant="h6" color="inherit" noWrap>
                    MeatApp
                </Typography>
            </Toolbar>
        </AppBar>
    );
}