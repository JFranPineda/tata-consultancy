import React from "react";
import EmptyLeftBlock from "../components/EmptyLeftBlock";
import FormThankYou from "../components/FormThankYou";
import Grid from '@material-ui/core/Grid';

const Ending = () => {

    return (
        <div className="login">
            <Grid className="login__grid">
                <Grid xs={6} className="login__grid__item">
                    <EmptyLeftBlock />
                </Grid>
                <Grid xs={5} className="login__grid__item">
                    <FormThankYou />
                </Grid>
            </Grid>
        </div>
    );
};

export default Ending;