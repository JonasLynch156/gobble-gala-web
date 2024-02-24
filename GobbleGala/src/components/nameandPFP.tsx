import React from "react";
import { Box, Avatar, Typography } from "@mui/material";
import '@fontsource/montserrat'

export const NamePFP = (props: {name: string, pfp: string}) => {
    const {name, pfp} = props;
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '8px',
            alignItems: 'center',
            justifyItems: 'center',
            }}>
                <Avatar alt={`Profile Picure: ${name}`} src={pfp}></Avatar>
                <Typography sx={{
                    color: '#E7E7E7',
                    fontFamily: 'Montserrat',
                    fontSize: '14px',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: '24px', /* 171.429% */
                    letterSpacing: '0.5px'
                }}>{name}</Typography>
            </Box>
            )
}