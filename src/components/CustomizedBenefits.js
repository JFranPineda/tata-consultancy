import React from "react";
import { Grid, List, ListItem, ListItemIcon, ListItemText, FormLabel, Divider, Chip } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Illustration from '../assets/Illustration.png';

import '../style/Style.css';
import '../style/Login.css';

const CustomizedBenefits = (props) => {
    const { value, amount, plan } = props;

    const normalIcon = "list-item__icon";
    const activeIcon = normalIcon + " " + normalIcon + "_blue";

    const normalText = "list-item";
    const activeText = normalText + " " + normalText + "_active";
    return (
        <div className="customized-benefits customized-benefits_overflow-hidden">
            <Grid className="customized-benefits__grid">
                <Grid className="customized-benefits__grid customized-benefits__grid_background-gray" justify="center" alignItems="center" md={12} xs={12}>
                    <div className="customized-benefits__item__header">
                        <FormLabel className="form-login__form__grid__item__label form-login__form__grid__item__label_margin-y-10">Cuentas con estos beneficios:</FormLabel >
                    </div>
                </Grid>
            </Grid>
            <Grid className="customized-benefits__grid customized-benefits__grid_margin-top-30" alignItems="center">
                <Grid className="customized-benefits__item" md={8} xs={6}>
                    <div className="customized-benefits__item__coverage customized-benefits__item__coverage_padding-left-40">
                        <span className="customized-benefits__item__coverage__text">Cobertura máxima</span>
                        <span className="customized-benefits__item__coverage__amount">S/ {amount}</span>
                        <Chip className="customized-benefits__item__coverage__amount__chip"
                            label={"PLAN " + plan}
                            color="primary"
                            clickable
                        />
                    </div>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid className="customized-benefits__item" md={4} xs={6}>
                    <figure className="customized-benefits__item__coverage">
                        <img src={Illustration} alt="plan-basic"></img>
                    </figure>
                </Grid>
            </Grid>
            <Divider className="divider divider_margin-top-30" variant="middle" />
            <Grid className="customized-benefits__grid">
                <Grid className="customized-benefits__item" md={12} xs={12}>
                    <div className="customized-benefits__item__features-list">
                        <List
                            component="nav"
                            aria-labelledby="nested-list-subheader"

                        >
                            <ListItem button>
                                <ListItemIcon>
                                    <FavoriteIcon className="list-item__icon list-item__icon_blue" />
                                </ListItemIcon>
                                <ListItemText className="list-item_active" primary="Lima" secondary="(zona de cobertura)" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <FavoriteIcon className="list-item__icon list-item__icon_blue" />
                                </ListItemIcon>
                                <ListItemText className="list-item_active" primary="+30 clínicas" secondary="(en red afiliada)" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <FavoriteIcon className={value === 'B' || value === 'C' || value === 'D' ? activeIcon : normalIcon} />
                                </ListItemIcon>
                                <ListItemText className={value === 'B' || value === 'C' || value === 'D' ? activeText : normalText} primary="Médico a domicilio" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <FavoriteIcon className={value === 'B' || value === 'C' || value === 'D' ? activeIcon : normalIcon} />
                                </ListItemIcon>
                                <ListItemText className={value === 'B' || value === 'C' || value === 'D' ? activeText : normalText} primary="Chequeos preventivos" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <FavoriteIcon className={value === 'C' || value === 'D' ? activeIcon : normalIcon} />
                                </ListItemIcon>
                                <ListItemText className={value === 'C' || value === 'D' ? activeText : normalText} primary="Reembolso nacional" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <FavoriteIcon className={value === 'D' ? activeIcon : normalIcon} />
                                </ListItemIcon>
                                <ListItemText className={value === 'D' ? activeText : normalText} primary="Reembolso internacional" />
                            </ListItem>
                        </List>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default CustomizedBenefits;