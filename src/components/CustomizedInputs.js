import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from '@material-ui/core/MenuItem';

const styles = {
    root: {
        background: "white",
        borderBottom: "1px solid #d3d5df",
        color: "#d3d5df",
        width: "100%"
    },
    input: {
        background: "white",
        border: "1px solid #d3d5df",
        borderBottom: "1px solid #d3d5df"
    }
};


function CustomizedInputs(props) {
    const documentType = [
        {
            value: '1',
            label: 'DNI',
        },
        {
            value: '2',
            label: 'C.E.',
        },
        {
            value: '3',
            label: 'Passport',
        }
    ];
    const { classes, label, type, select = false } = props;
    const [selectedValue, setSelectedValue] = React.useState('1');
    const [textValue, setTextValue] = React.useState();
    const [defaultValue, setDefaultValue] = React.useState("1980-10-24");

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    }

    return (
        <TextField
            label={label}
            className={classes.root}
            select={select}
            variant="filled"
            type={type}
            InputProps={{
                className: classes.input
            }}
            defaultValue={type === 'date' ? defaultValue : ""}
            value={select === false ? textValue : selectedValue}
            onChange={handleChange}
        >
            {select && documentType.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </TextField>
    );
}

CustomizedInputs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedInputs);