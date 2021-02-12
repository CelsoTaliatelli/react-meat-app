import React from 'react';
import { IconButton, InputAdornment, makeStyles, TextField } from "@material-ui/core";
import clsx from 'clsx'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles((theme) => ({
    TextField: {
        width: '15ch'
    },
    margin: {
        margin: theme.spacing(1),
    }
}));

export default function InputNumber() {
    const classes = useStyles();
    return (
        <TextField
            className={clsx(classes.TextField, classes.margin)}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <IconButton>
                            <RemoveIcon />
                        </IconButton>
                    </InputAdornment>
                ),
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton>
                            <AddIcon />
                        </IconButton>
                    </InputAdornment>
                )
            }}
            variant="outlined"
        />
    );
}