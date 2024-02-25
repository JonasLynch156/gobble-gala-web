// this is the page that will lead to profile creation
import { Box,TextField, Typography } from "@mui/material";
import React from "react";
import { RegisterButton } from "../components/registerButton";
import turkeyLogo from '../assets/turkey.svg'
import { StyledTextField } from "../components/styledTextField";
import { useNavigate } from "react-router-dom";

export const ProfileCreation = (props: {isHost: boolean}) => {
    const {isHost} =props;
    const navigate = useNavigate();
    return (
        <Box sx={{
            display:'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100vh',
            gap: '40px',
            alignContent: 'center',
            overflowY: 'scroll',
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '11px',
                marginTop: '100px',
                alignContent: 'center',
                alignSelf: 'center',
            }}>
                <img src={turkeyLogo} style={{width: '27.53px', height: '31.44px', flexShrink: 0,}} className="gobbieLogo" alt="Gobbie the gobble gala turkey" />
                <Typography sx={{
                    color: '#E7E7E7',
                    fontSize: '25.152px',
                    fontWeight: 700,
                    lineHeight: 'normal',
                    justifySelf: 'center'
                }}>GobbleGala</Typography>
            </Box>
            <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '18px',
                width: '700px',
                alignSelf: 'center',
                input: {color: '#AFAFAF'}
            }}>
                <StyledTextField 
                    label={'First Name'}
                    placeholder={'Joe'}
                    focused/>
                <StyledTextField 
                    label={'Last Name'}
                    placeholder={'Smith'}
                    focused/>
                <StyledTextField
                    label={'Email'}
                    placeholder="joesmith@joesmith.com"
                    focused/>
                <StyledTextField
                    label={'Country'}
                    placeholder="United States"
                    focused/>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '16px',
                    width: '100%',
                    alignSelf: 'center',
                    alignContent: 'center',
                    justifyContent: 'center',
                    padding: '0px',
                    margin: '0px'
                }}>
                    <StyledTextField sx={{
                        width: '341px',}}
                        label={'State'}
                        placeholder="Texas"
                        focused/>
                    <StyledTextField sx={{
                        width: '341px',}}
                        label={'Zip'}
                        placeholder="78236"
                        focused/>
                </Box>
                 {!isHost ? (<StyledTextField label='Business Name' placeholder="Business" focused/>): null}
            </Box>
            <Box sx={{alignContent: 'center'}}>
            <RegisterButton width={'700px'} text={'register'} onClick={isHost? () => {navigate('/host-dashboard')} : () => {navigate('/cater-dashboard')}}></RegisterButton></Box>
        </Box>
    );
}