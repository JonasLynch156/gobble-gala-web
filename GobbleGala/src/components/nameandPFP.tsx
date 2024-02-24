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
                    fontSize: '14px',
                    fontStyle: 'normal',
                }}>{name}</Typography>
            </Box>
            )
}