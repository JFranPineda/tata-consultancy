import React from "react";
import { navigate } from "@reach/router";
import { withStyles } from '@material-ui/core/styles';

import { Button, Checkbox, FormControlLabel, Grid } from '@material-ui/core';
import CustomizedInputs from './CustomizedInputs';

import '../style/Style.css';
import '../style/Login.css';

const GreenCheckbox = withStyles({
    root: {
        color: '#a7abbe',
        '&$checked': {
            color: '#83cc5e',
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

const FormLogin = () => {
    const [state, setState] = React.useState({
        checkedPDD: false,
        checkedECC: false,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('./add-relatives');
    };

    return (
        <div className="form-login form-login_color_gray">
            <header className="form-login__header">
                <Grid className="form-login__header__grid">
                    <Grid className="form-login__header__grid__item" xs={12}>
                        <span className="form-login__header__grid__item__title form-login__header__grid__item__title_font-size-2 form-login__header__grid__item__title_margin-bottom-15">Obtén tu</span>
                        <span className="form-login__header__grid__item__title form-login__header__grid__item__title_font-size-2 form-login__header__grid__item__title_margin-bottom-15 form-login__header__grid__item__title-blue">seguro ahora</span>
                    </Grid>
                    <Grid className="form-login__header__grid__item" xs={12}>
                        <span className="form-login__header__grid__item__message form-login__header__grid__item__message_margin-bottom-40">Ingresa los datos para comenzar</span>
                    </Grid>
                </Grid>
            </header>
            <form className="form-login__form" onSubmit={handleSubmit}>
                <Grid className="form-login__form__grid">
                    <Grid className="form-login__form__grid__item" xs={3}>
                        <CustomizedInputs select={true} type="select"></CustomizedInputs>
                    </Grid>
                    <Grid className="form-login__form__grid__item" md={5} xs={9}>
                        <CustomizedInputs label="Nro de Documento" type="number"></CustomizedInputs>
                    </Grid>
                    <Grid className="form-login__form__grid__item" md={8} xs={6}>
                        <CustomizedInputs label="Fecha de Nacimiento" type="date"></CustomizedInputs>
                    </Grid>
                    <Grid className="form-login__form__grid__item" md={8} xs={6}>
                        <CustomizedInputs label="Celular" type="number"></CustomizedInputs>
                    </Grid>
                    <Grid className="form-login__form__grid__item form-login__form__grid__item_margin-bottom-0" md={8} xs={12}>
                        <FormControlLabel
                            control={
                                <GreenCheckbox
                                    checked={state.checkedPDD}
                                    onChange={handleChange} name="checkedPDD" />
                            }
                        />
                        <span className="form-login__form__grid__item__terms-conditions">
                            Acepto la <a className="form-login__form__grid__item__terms-conditions__link" href="https://www.rimac.com/terminos-condiciones/politicas">Política de Protección de Datos Personales y los Términos y Condiciones</a>
                        </span>
                    </Grid>
                    <Grid className="form-login__form__grid__item form-login__form__grid__item_margin-bottom-30" md={8} xs={12}>
                        <FormControlLabel
                            control={
                                <GreenCheckbox
                                    checked={state.checkedECC}
                                    onChange={handleChange} name="checkedECC" />
                            }
                        />
                        <span className="form-login__form__grid__item__terms-conditions">
                            Acepto la <a className="form-login__form__grid__item__terms-conditions__link" href="https://prevencionrimac.com/riesgospatrimoniales/Terminos#envio-de-comunicaciones-comerciales">Política de Envío de Comunicaciones Comerciales</a>
                        </span>
                    </Grid>
                    <Grid className="form-login__form__grid__item" md={10} xs={12}>
                        <Button type="submit" variant="contained" color="primary">
                            COMENCEMOS
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};

export default FormLogin;