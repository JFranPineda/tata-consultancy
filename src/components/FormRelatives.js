import React from "react";
import { navigate } from "@reach/router";

import { Button, FormControlLabel, FormLabel, Grid, RadioGroup } from '@material-ui/core';
import CustomizedInputs from './CustomizedInputs';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';


import '../style/Style.css';
import '../style/Login.css';
import '../style/Relatives.css';

const GreenRadio = withStyles({
    root: {
        color: '#a7abbe',
        '&$checked': {
            color: '#83cc5e',
        },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);

const FormRelatives = () => {
    const [selectedGender, setSelectedGender] = React.useState('a');
    const [selectedAssurance, setSelectedAssurance] = React.useState('a');

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('./select-plan');
    }

    const handleChangeGender = (event) => {
        setSelectedGender(event.target.value);
    };
    const handleChangeAssurance = (event) => {
        setSelectedAssurance(event.target.value);
    };

    return (
        <div className="form-login form-login_color_gray">
            <header className="form-login__header">
                <Grid className="form-login__header__grid">
                    <Grid className="form-login__header__grid__item" xs={12}>
                        <span className="form-login__header__grid__item__title form-login__header__grid__item__title_font-size-2">Hola,</span>
                        <span className="form-login__header__grid__item__title form-login__header__grid__item__title-blue form-login__header__grid__item__title_font-size-2">Pepito</span>
                    </Grid>
                    <Grid className="form-login__header__grid__item" xs={12}>
                        <span className="form-login__header__grid__item__message form-login__header__grid__item__message_margin-top-20 form-login__header__grid__item__message_margin-bottom-40">Valida que los datos sean correctos</span>
                    </Grid>
                </Grid>
            </header>
            <form className="form-login__form" onSubmit={handleSubmit}>
                <Grid className="form-login__form__grid" xs={12}>
                    <span className="form-login__form__grid__item__title">Datos personales del titular</span>
                </Grid>
                <Grid className="form-login__form__grid">
                    <Grid className="form-login__form__grid__item" xs={3}>
                        <CustomizedInputs select={true} type="select"></CustomizedInputs>
                    </Grid>
                    <Grid className="form-login__form__grid__item" md={5} xs={9}>
                        <CustomizedInputs label="Nro de Documento" type="number"></CustomizedInputs>
                    </Grid>
                    <Grid className="form-login__form__grid__item" md={8} xs={6}>
                        <CustomizedInputs label="Nombres" type="text"></CustomizedInputs>
                    </Grid>
                    <Grid className="form-login__form__grid__item" md={8} xs={6}>
                        <CustomizedInputs label="Apellido Paterno" type="text"></CustomizedInputs>
                    </Grid>
                    <Grid className="form-login__form__grid__item" md={8} xs={6}>
                        <CustomizedInputs label="Apellido Materno" type="text"></CustomizedInputs>
                    </Grid>
                    <Grid className="form-login__form__grid__item form-login__form__grid__item_margin-bottom-30" md={8} xs={6}>
                        <CustomizedInputs label="Fecha de Nacimiento" type="date"></CustomizedInputs>
                    </Grid>
                    <Grid className="form-login__form__grid__item form-login__form__grid__item_margin-bottom-30" md={8} xs={12}>
                        <FormLabel className="form-login__form__grid__item__label">Género</FormLabel >
                        <RadioGroup
                            aria-label="gender"
                            name="gender1"
                            value={selectedGender}
                            onChange={handleChangeGender}
                        >
                            <FormControlLabel value="A" control={<GreenRadio />} label="Masculino" />
                            <FormControlLabel value="B" control={<GreenRadio />} label="Femenino" />
                        </RadioGroup>
                    </Grid>
                    <Grid className="form-login__form__grid__item form-login__form__grid__item_margin-bottom-70" md={8} xs={12}>
                        <FormLabel className="form-login__form__grid__item__label">¿A quién vamos a asegurar?</FormLabel >
                        <RadioGroup
                            aria-label="gender"
                            name="gender1"
                            value={selectedAssurance}
                            onChange={handleChangeAssurance}
                        >
                            <FormControlLabel value="A" control={<GreenRadio />} label="Solo a mí" />
                            <FormControlLabel value="B" control={<GreenRadio />} label="A mí y a mi familia" />
                        </RadioGroup>
                    </Grid>
                    {/* <Grid item md={5} xs={9}></Grid> */}
                    <Grid className="form-login__form__grid__item form-login__form__grid__item_justify-content-end" md={8} xs={12}>
                        <Button type="submit" className="MuiButton-containedSecondary" variant="contained" color="seconday">
                            CONTINUAR
                            <ArrowForwardIosIcon className="form-login__form__grid__item__icon form-login__form__grid__item__icon_color_gray"></ArrowForwardIosIcon>
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};

export default FormRelatives;