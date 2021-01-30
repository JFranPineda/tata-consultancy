import React from "react";
import LeftBlock from "../components/LeftBlock";
import FormLogin from "../components/FormLogin";
import Grid from '@material-ui/core/Grid';

const Login = () => {

    return (
        <div className="login">
            <Grid className="login__grid">
                <Grid xs={8} className="login__grid__item">
                    <LeftBlock />
                </Grid>
                <Grid xs={4} className="login__grid__item">
                    <FormLogin />
                </Grid>
            </Grid>
        </div>
    );
};

export default Login;