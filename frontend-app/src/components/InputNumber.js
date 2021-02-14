import React, { useState } from 'react';
import { IconButton, InputAdornment, makeStyles, TextField } from "@material-ui/core";
import clsx from 'clsx'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import './removeArrow.css';

const useStyles = makeStyles((theme) => ({
    TextField: {
        width: '20ch'
    },
    margin: {
        marginRight: theme.spacing(1),
        marginTop: theme.spacing(0.2)
    },
    iconColor: {
        color: '#DF1A48'
    }
}));


export default function InputNumber(props) {
    const [count, setCount] = useState(1);
    const classes = useStyles();
    var valor = `R$ ${count * props.value}`;
    return (
        <div>
        <TextField
            className={clsx(classes.TextField, classes.margin)}
            InputLabelProps={{
                style:{
                    fontSize:'18px',
                    fontWeight:'bold',
                    color: 'green'
                }
            }}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <IconButton onClick={() => setCount(count - 1)}>
                            <RemoveIcon className={classes.iconColor} />
                        </IconButton>
                    </InputAdornment>
                ),
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton onClick={() => setCount(count + 1)}>
                            <AddIcon className={classes.iconColor} />
                        </IconButton>
                    </InputAdornment>
                ),
                max:5
            }}
            type="number"
            variant="outlined"
            size="small"
            label={valor}
            value={count}
        />
        </div>
    );
}