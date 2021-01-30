import React from "react";
import { Link } from "@reach/router";

import { Button, FormLabel, Grid } from '@material-ui/core';
import CustomizedCard from './CustomizedCard';
import CustomizedBenefits from './CustomizedBenefits';

import '../style/Style.css';
import '../style/Login.css';
import '../style/Plan.css';
import CustomizedAccordion from "./CustomizedAccordion";

const PlanPicker = () => {
    const [selectedValue, setSelectedValue] = React.useState('A');
    const [amount, setAmount] = React.useState('1MM');
    const [plan, setPlan] = React.useState('BÁSICO');


    const handleChange = (event) => {
        setSelectedValue(event.target.value);

    };

    React.useEffect(() => {
        if (selectedValue !== null) {
            switch (selectedValue) {
                case 'A':
                    setAmount('1MM');
                    setPlan('BÁSICO');
                    break;
                case 'B':
                    setAmount('5MM');
                    setPlan('AVANZADO');
                    break;
                case 'C':
                    setAmount('7.5MM');
                    setPlan('PREMIUM');
                    break;
                case 'D':
                    setAmount('10MM');
                    setPlan('FULL');
                    break;
                default:
            }
        }

    }, [selectedValue]);

    return (
        <div className="form-login form-login_color_gray">
            <header className="form-login__header">
                <Grid className="form-login__header__grid">
                    <Grid className="form-login__header__grid__item" xs={12}>
                        <span className="form-login__header__grid__item__title form-login__header__grid__item__title_font-size-2">Elige</span>
                        <span className="form-login__header__grid__item__title form-login__header__grid__item__title-blue form-login__header__grid__item__title_font-size-2">tu protección</span>
                    </Grid>
                    <Grid className="form-login__header__grid__item" xs={12}>
                        <span className="form-login__header__grid__item__message form-login__header__grid__item__message_margin-top-20 form-login__header__grid__item__message_margin-bottom-40">Selecciona tu plan de salud ideal.</span>
                    </Grid>
                </Grid>
            </header>
            <div className="form-login__form">
                <Grid className="form-login__form__grid form-login__form__grid_justify-content-space-between">
                    <CustomizedCard value="A" plan="BÁSICO" price="160"
                        handleChange={handleChange}
                        selectedValue={selectedValue}
                    />
                    <CustomizedCard value="B" plan="AVANZADO" price="200"
                        handleChange={handleChange}
                        selectedValue={selectedValue}
                    />
                    <CustomizedCard value="C" plan="PREMIUM" price="250"
                        handleChange={handleChange}
                        selectedValue={selectedValue}
                    />
                    <CustomizedCard value="D" plan="FULL" price="500"
                        handleChange={handleChange}
                        selectedValue={selectedValue}
                    />
                </Grid>
            </div>
            <div className="form-login__benefits">
                <CustomizedBenefits value={selectedValue} plan={plan} amount={amount} />
            </div>
            <div className="form-login__services">
                <Grid className="form-login__services__grid">
                    <Grid className="form-login__services__grid__item form-login__services__grid__item_margin-bottom-15" md={8} xs={12}>
                        <FormLabel className="form-login__services__grid__item__label">
                            <span className="form-login__services__grid__item__label form-login__services__grid__item__label_font-size-1">Revisa nuestros</span>
                            <span className="form-login__services__grid__item__label form-login__services__grid__item__label-blue form-login__services__grid__item__label_font-size-1">servicios y exclusiones</span>
                        </FormLabel >
                    </Grid>
                    <Grid className="form-login__services__grid__item" md={12} xs={12}>
                        <CustomizedAccordion summary="Servicios brindados" details="Servicio 01: Servicio de seguros" />
                        <CustomizedAccordion summary="Exclusiones" details="Exclusión 01: Capacidad máximo solo 1 persona por familia" />
                    </Grid>
                </Grid>
            </div>
            <div className="form-login__footer">
                <Grid className="form-login__footer__grid">
                    <Grid className="form-login__footer__grid__item form-login__footer__grid__item_justify-content-end" md={8} xs={6}>
                        <a className="form-login__footer__grid__item__link" href="https://www.linkedin.com/in/jfranpineda/">ENVIAR COTIZACIÓN POR CORREO</a>
                    </Grid>
                    <Grid className="form-login__footer__grid__item form-login__footer__grid__item_justify-content-end" md={4} xs={6}>
                        <Link to="../thank-you" className="header__link">
                            <Button type="submit" className="MuiButton-containedSecondary" variant="contained" color="secondary">
                                COMPRAR PLAN
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default PlanPicker;