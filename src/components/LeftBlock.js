import React from "react";
import SecurityIcon from "@material-ui/icons/Security";
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import LocalAtmTwoToneIcon from '@material-ui/icons/LocalAtmTwoTone';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import '../style/Login.css';
import Grid from '@material-ui/core/Grid';



const LeftBlock = () => {

    return (
        <div className="left-block left-block_color_white left-block_position_relative">
            <div className="left-block__background left-block__background_position_absolute"></div>
            <header className="left-block__header">
                <Grid className="left-block__header__grid">
                    <Grid className="left-block__header__grid__item" xs={12}>
                        <span className="left-block__header__grid__item__span">
                            Seguro de
                        </span>
                    </Grid>
                    <Grid className="left-block__header__grid__item" xs={12}>
                        <span className="left-block__header__grid__item__span left-block__header__grid__item__span_font-weight_bold">
                            Salud
                        </span>
                    </Grid>
                </Grid>
            </header>
            <div className="left-block__body">
                <Grid className="left-block__body__grid">
                    <Grid className="left-block__body__grid__item" xs={12}>
                        <SecurityIcon className="left-block__body__grid__item__icon left-block__body__grid__item__icon_color_white"></SecurityIcon>
                        <span className="left-block__body__grid__item__span">Cómpralo de manera fácil y rápida</span>
                    </Grid>
                    <Grid className="left-block__body__grid__item" xs={12}>
                        <PhoneAndroidIcon className="left-block__body__grid__item__icon left-block__body__grid__item__icon_color_white"></PhoneAndroidIcon>
                        <span className="left-block__body__grid__item__span">Cotiza y compra tu seguro 100% digital</span>
                    </Grid>
                    <Grid className="left-block__body__grid__item" xs={12}>
                        <LocalAtmTwoToneIcon className="left-block__body__grid__item__icon left-block__body__grid__item__icon_color_white"></LocalAtmTwoToneIcon>
                        <span className="left-block__body__grid__item__span">Hasta S/. 12 millones de cobertura anual</span>

                    </Grid>
                    <Grid className="left-block__body__grid__item" xs={12}>
                        <LocalHospitalIcon className="left-block__body__grid__item__icon left-block__body__grid__item__icon_color_white"></LocalHospitalIcon>
                        <span className="left-block__body__grid__item__span">Más de 300 clínicas en todo el Perú</span>

                    </Grid>
                </Grid>
            </div>
            <div className="left-block__footer">
                <Grid className="left-block__footer__grid">
                    <span className="left-block__footer__grid__item__span">© 2020 RIMAC Seguros y Reaseguros</span>
                </Grid>
            </div>
        </div>
    );
};

export default LeftBlock;