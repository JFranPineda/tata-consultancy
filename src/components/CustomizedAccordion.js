import React from "react";

import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import '../style/Style.css';
import '../style/Login.css';

const CustomizedAccordion = (props) => {
    const { summary, details } = props;

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon color="primary" fontSize="small" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography className="heading">{summary}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    {details}
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
};

export default CustomizedAccordion;