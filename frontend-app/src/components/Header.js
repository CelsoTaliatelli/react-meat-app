import { AppBar,Typography, Toolbar, makeStyles,Link, IconButton, Badge } from "@material-ui/core";
import ShoppingCart from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles({
    root: {
        flexGrow:1,
    },
    bg: {
        backgroundColor: '#DF1A48'
    },
    title: {
        flexGrow: 1
    }
})

export default function Header() {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.bg}>
            <Toolbar>
                <Typography variant="h6" color="inherit" className={classes.title} noWrap>
                        <Link href="/" style={{textDecoration: 'none',color:'inherit'}}>MeatApp</Link>
                </Typography>
                    <IconButton style={{color: '#FFF'}}>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCart style={{color: '#FFF'}}/>
                        </Badge>
                    </IconButton>
            </Toolbar>
        </AppBar>
    );
}