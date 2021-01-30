import React from "react";
import { Link } from "@reach/router";
import { Button, Grid } from "@material-ui/core";

const Login = () => {

    return (
        <Grid className="home">
            <Grid className="home__row" xs={8}>
                <span className="home__span">
                    Cotizador de Seguros de Salud
                </span>
            </Grid>
            <Grid className="home__row" xs={8}>
                <span className="home__row__text">
                    Autor:
                <span className="home__row__text home__row__text_bold">Jesus Pineda</span>
                </span>
            </Grid>
            <Grid className="home__row" xs={8}>
                <Link to="/login" className="header__link">
                    <Button className="home__row__button" variant="contained" color="primary">
                        Obtén tu seguro
                    </Button>
                </Link>
            </Grid>
            <Grid className="home__row" xs={8}>
                <Link to="/add-relatives" className="header__link">
                    <Button className="home__row__button" variant="contained" color="primary">
                        Datos Personales
                    </Button>
                </Link>
            </Grid>
            <Grid className="home__row" xs={8}>
                <Link to="/select-plan" className="header__link">
                    <Button className="home__row__button" variant="contained" color="primary">
                        Elige tu plan
                    </Button>
                </Link>
            </Grid>
            <Grid className="home__row" xs={8}>
                <Link to="/thank-you" className="header__link">
                    <Button className="home__row__button" variant="contained" color="primary">
                        Gracias
                    </Button>
                </Link>
            </Grid>
        </Grid>
    );
};

export default Login;