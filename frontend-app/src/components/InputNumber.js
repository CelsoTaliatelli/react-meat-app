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
        margin: theme.spacing(1),
    },
    iconColor: {
        color: '#DF1A48'
    }
}));


export default function InputNumber() {
    const [count, setCount] = useState(1);
    const classes = useStyles();
    return (
        <TextField
            className={clsx(classes.TextField, classes.margin)}
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
                )
            }}
            type="number"
            variant="outlined"
            value={count}
        />
    );
}