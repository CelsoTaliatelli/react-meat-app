import { TextField } from "@material-ui/core";
import React from 'react';


export default function Search(props) {
    return (
        <TextField onChange={props.onFilterTextChange}
            id="outlined-full-width"
            placeholder="Buscar..."
            fullWidth
            variant="outlined"
            value={props.filterText.value}
            >
         </TextField>
    );

}