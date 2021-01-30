import React from "react";
import EmptyLeftBlock from "../components/EmptyLeftBlock";
import FormRelatives from "../components/FormRelatives";
import Grid from '@material-ui/core/Grid';

const Login = () => {

    return (
        <div className="login">
            <Grid className="login__grid">
                <Grid xs={6} className="login__grid__item">
                    <EmptyLeftBlock />
                </Grid>
                <Grid xs={6} className="login__grid__item">
                    <FormRelatives />
                </Grid>
            </Grid>
        </div>
    );
};

export default Login;