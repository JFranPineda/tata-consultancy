import React from "react";
import EmptyLeftBlock from "../components/EmptyLeftBlock";
import PlanPicker from "../components/PlanPicker";
import Grid from '@material-ui/core/Grid';

const Plan = () => {

    return (
        <div className="login">
            <Grid className="login__grid">
                <Grid xs={6} className="login__grid__item">
                    <EmptyLeftBlock />
                </Grid>
                <Grid xs={5} className="login__grid__item">
                    <PlanPicker />
                </Grid>
            </Grid>
        </div>
    );
};

export default Plan;