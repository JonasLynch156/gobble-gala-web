import React from "react";
import { Box, Typography } from "@mui/material";

export const Tags = (props: {names: string[]}) => {
    const {names} = props;
    return(
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '16px'

        }}>
            {names.map((name) => (
            <Typography
                sx={{
                display: 'inline-flex',
                padding: '6px 29px',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
                borderRadius: '50px',
                background: '#2D1213',
                boxShadow: '0px 2px 4px 0px #00000025', 
                fontSize: '12px'
                }}>
                {name}
            </Typography>
        ))}
        </Box>
    )
}