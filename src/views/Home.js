import React from "react";
import { Link } from "@reach/router";
import { Button, Grid } from "@material-ui/core";

const CustomLink = (props) => {
    const { link, message } = props;
    return (
        <Grid className="home__row" xs={8}>
            <Link to={link} className="header__link">
                <Button className="home__row__button" variant="contained" color="primary">
                    {message}
                </Button>
            </Link>
        </Grid>
    )
};

const Home = () => {

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
            <CustomLink link="/login" message="Obtén tu seguro" />
            <CustomLink link="/add-relatives" message="Datos Personales" />
            <CustomLink link="/select-plan" message="Elige tu plan" />
            <CustomLink link="/thank-you" message="Gracias" />
        </Grid>
    );
};

export default Home;