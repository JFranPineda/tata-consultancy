import React from "react";
import { Link } from "@reach/router";

import { Button, Grid } from '@material-ui/core';


import '../style/Style.css';
import '../style/Ending.css';
import '../style/Relatives.css';

const FormThankYou = () => {

    return (
        <div className="thank-you thank-you_color_gray">
            <header className="thank-you__header">
                <Grid className="thank-you__header__grid">
                    <Grid className="thank-you__header__grid__item thank-you__header__grid__item_margin-top-120" xs={10}>
                        <span className="thank-you__header__grid__item__title thank-you__header__grid__item__title_font-size-2">¡Gracias por</span>
                        <span className="thank-you__header__grid__item__title thank-you__header__grid__item__title-blue thank-you__header__grid__item__title_font-size-2">confiar en nosotros!</span>
                    </Grid>
                    <Grid className="thank-you__header__grid__item thank-you__header__grid__item_margin-top-40 " xs={11}>
                        <span className="thank-you__header__grid__item__message">
                            Queremos conocer mejor la salud de los asegurados. Un asesor
                            <p className="thank-you__header__grid__item__message-bold">se pondrá en contacto</p>
                            contigo en las siguientes
                            <p className="thank-you__header__grid__item__message-bold">48 horas.</p>
                        </span>
                    </Grid>
                </Grid>
            </header>
            <div className="thank-you__footer">
                <Grid className="thank-you__footer__grid">
                    <Grid className="thank-you__footer__grid__item thank-you__footer__grid__item_justify-content-end" md={10} xs={6}>
                        <Link to="../" className="header__link">
                            <Button type="submit" className="MuiButton-containedSecondary" variant="contained" color="secondary">
                                IR AL INICIO
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default FormThankYou;