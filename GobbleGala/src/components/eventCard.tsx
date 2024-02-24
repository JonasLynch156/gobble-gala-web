import React from "react";
import { Box, Typography } from "@mui/material";
import '@fontsource/montserrat'
import { NamePFP } from "./nameandPFP";
import { Tags } from "./tags";

export const EventCard = (props: {}) => {
    return(
    <>
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '15px',
            borderRadius: '25px',
            border: '1px solid #2D1213',
            background: '#1C0C0E',
            gap: '20px',
            color: '#E7E7E7',
            fontFamily: 'Montserrat',
            letterSpacing: '0.5px',
            lineHeight: '24px',
            fontWeight: '400',
            }}>
                <NamePFP name='Kaden Langston' pfp='/src/assets/langy.jpg'/>
                <Tags names={['Tacos', 'Soda']} />
                <Typography sx={{
                    fontSize: '16px',
                }}>PARTY TN!!! We lookin for tha tacos!!!</Typography>
                <Typography sx={{
                    alignSelf: 'flex-start',
                    color: '#DEDEDE',
                    fontSize: '14px',
                    textDecorationLine: 'underline'
                }}>Location: {'222 Party Ln.'}</Typography>
            </Box>
    </>
    );
}
