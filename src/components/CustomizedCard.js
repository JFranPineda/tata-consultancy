import React from "react";
import { withStyles } from '@material-ui/core/styles';

import { Radio, FormControlLabel, Grid, Card, CardContent, CardActionArea, Typography } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import '../style/Style.css';
import '../style/Login.css';

const GreenRadio = withStyles({
    root: {
        color: '#a7abbe',
        '&$checked': {
            color: '#83cc5e',
        },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);

const CustomizedCard = (props) => {
    const { plan, price, value, selectedValue, handleChange } = props;
    const baseClass = "customized-card__card"
    const normalClass = "customized-card__card customized-card__card_position-relative";
    const activeClass = normalClass + " " + baseClass + "_active"

    return (
        <Grid className="customized-card">
            <Card variant="outlined" className={selectedValue === value ? activeClass : normalClass}>
                <CardActionArea>
                    <FormControlLabel value={value} className="position-absolute right-0"
                        control={
                            <GreenRadio
                                checked={selectedValue === value}
                                onChange={handleChange}
                                value={value}
                                name="radio-button-demo"
                                inputProps={{ 'aria-label': value }}
                                checkedIcon={<CheckCircleIcon fontSize="small" />}
                                size="small"
                            />} />
                    <CardContent className="customized-card__card__card-content">
                        <Typography className="customized-card__card__card-content__plan" color="textSecondary" gutterBottom>
                            {plan}
                        </Typography>
                        <Typography variant="h5" component="h2" className="customized-card__card__card-content__price">
                            <span className="customized-card__card__card-content__price__coin">S/ </span>
                            <span className="customized-card__card__card-content__price__value">{price}</span>
                        </Typography>
                        <Typography className="customized-card__card__card-content__mode" color="textSecondary">
                            mensual
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
};

export default CustomizedCard;