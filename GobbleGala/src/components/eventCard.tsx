import React from "react";
import { Box, Avatar, Typography } from "@mui/material";
import '@fontsource/montserrat'
import { NamePFP } from "./nameandPFP";

export const EventCard = () => {
    return(
    <>
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '15px',
            borderRadius: '25px',
            border: '1px solid #2D1213',
            background: '#1C0C0E'
            }}>
                <NamePFP name="Kaden Langston" pfp="/src/assets/langy.jpg"/>
            </Box>
    </>
    );
}
