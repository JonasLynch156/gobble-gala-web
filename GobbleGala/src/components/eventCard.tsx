import React from "react";
import { Box, Typography } from "@mui/material";
import '@fontsource/montserrat'
import { NamePFP } from "./nameandPFP";
import { Tags } from "./tags";
import { ApplyButton } from "./applyButton";


export const EventCard = (props: {
    cardtype : string,
    description: string,
    hostName: string,
    hostPFP: string,
    location: string,
    tags: string[],
    caterName?: string,
    approved?: boolean
}) => {
    const {cardtype, description, hostName, hostPFP, location, tags, caterName, approved } = props;
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
                <NamePFP name={hostName} pfp={hostPFP}/>
                <Tags names={tags} />
                <Typography sx={{
                    fontSize: '16px',
                }}>{description}</Typography>
                <Typography sx={{
                    alignSelf: 'flex-start',
                    color: '#DEDEDE',
                    fontSize: '14px',
                    textDecorationLine: 'underline'
                }}>Location: {location}</Typography>
                {cardtype !== 'caterBooked' ? (
                    <ApplyButton 
                    text={cardtype === 'host' ? 'View Available Caterers' : 'Request to Cater'}
                    onClick={() => {}} />
                ) :(
                    <Box
                    sx={{
                        display: 'flex',
                        padding: '19px 120px 19px 24px',
                        alignItems: 'center',
                        borderRadius: '0px 0px 25px 25px',
                        background: '#2D1213',
                        color: approved ? '#00FF19' : '#FFB800'
                    }}> {caterName + (approved ? 'is Booked' : 'is awaiting approval')}</Box>
                )}
                
            </Box>
    </>
    );
}
