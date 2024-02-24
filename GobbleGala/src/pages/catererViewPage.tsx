// This page will be the one the caterers can see with all the
// events on it.
import { Avatar, Box, SvgIcon } from "@mui/material";
import React from "react";
import { EventCard } from "../components/eventCard";

// Example cards for this page
const sampleData = [
    {
        hostName: 'its.kaden',
        hostPFP: '/src/assets/langy.jpg',
        description: 'Party Soon need a burger truck',
        location: '111 Party Ln.',
        tags: ['Burger', 'Soda'],
    },
    {
        tName: 'its.kaden',
        hostPFP: '/src/assets/langy.jpg',
        description: 'Party Soon need a burger truck',
        location: '111 Party Ln.',
        tags: ['Burger', 'Soda'],
    },
    {
        tName: 'its.kaden',
        hostPFP: '/src/assets/langy.jpg',
        description: 'Party Soon need a burger truck',
        location: '111 Party Ln.',
        tags: ['Burger', 'Soda'],
    },
];

export const CatererViewPage = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: "column",
            gap: '30px',
            background: '#0D0506',
            width: '100%',
            height: '100vh'
        }}>
            <SvgIcon>
            <svg width="37" height="42" viewBox="0 0 37 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.3632 15.3274C10.9589 12.2952 11.7675 14.3167 13.9911 9.46519C16.2147 4.61368 13.1825 2.99651 13.1825 2.99651C6.10743 -3.47217 2.0645 7.84802 2.0645 7.84802C3.68167 4.61368 7.7246 6.23085 7.7246 6.23085L6.91601 8.6566L8.53318 10.2738L5.3662 12.5647L2.94044 15.8664L2.0645 19.1682C2.0645 19.1682 1.92971 20.9875 3.68167 21.594C5.43363 22.2004 12.5761 20.7854 12.5761 20.7854L11.3632 15.3274Z" fill="#EA5A47" stroke="#EA5A47" stroke-width="1.61717" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22.2791 32.1056C20.662 34.5313 15.054 36.6809 9.01453 35.8507C5.29884 35.3399 -0.260179 32.1056 1.25592 26.4455C4.70009 13.5874 19.0448 18.3596 19.0448 18.3596C19.0448 18.3596 19.4491 5.62441 26.9285 5.11905C34.4079 4.61368 25.3113 13.8113 25.3113 13.8113C25.3113 13.8113 28.7478 9.46519 31.9821 11.0824C35.2165 12.6995 30.5671 15.9339 28.0403 16.3382C25.5135 16.7425 33.5993 15.1253 35.2165 16.7425C36.8337 18.3596 35.5197 19.1682 30.365 19.9768C25.2102 20.7854 36.0251 19.1682 36.0251 21.594C36.0251 24.0197 30.365 24.8283 30.365 24.8283C30.365 24.8283 33.195 24.2219 34.61 26.5465C36.0251 28.8712 29.7585 28.8712 29.7585 28.8712C29.7585 28.8712 36.0251 31.297 34.4079 33.7227C32.7907 36.1485 25.5135 32.9142 25.5135 31.297" fill="#A57939"/>
            <path d="M22.2791 32.1056C20.662 34.5313 15.054 36.6809 9.01453 35.8507C5.29884 35.3399 -0.260179 32.1056 1.25592 26.4455C4.70009 13.5874 19.0448 18.3596 19.0448 18.3596C19.0448 18.3596 19.4491 5.62441 26.9285 5.11905C34.4079 4.61368 25.3113 13.8113 25.3113 13.8113C25.3113 13.8113 28.7478 9.46519 31.9821 11.0824C35.2165 12.6995 30.5671 15.9339 28.0403 16.3382C25.5135 16.7425 33.5993 15.1253 35.2165 16.7425C36.8337 18.3596 35.5197 19.1682 30.365 19.9768C25.2102 20.7854 36.0251 19.1682 36.0251 21.594C36.0251 24.0197 30.365 24.8283 30.365 24.8283C30.365 24.8283 33.195 24.2219 34.61 26.5465C36.0251 28.8712 29.7585 28.8712 29.7585 28.8712C29.7585 28.8712 36.0251 31.297 34.4079 33.7227C32.7907 36.1485 25.5135 32.9142 25.5135 31.297" stroke="#A57939" stroke-width="1.61717" stroke-miterlimit="10"/>
            <path d="M10.1503 36.0474V40.1914L7.72459 41" stroke="#4F4F4F" stroke-width="1.61717" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.5761 40.1914H10.1503" stroke="#4F4F4F" stroke-width="1.61717" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.619 36.0474V40.1914L14.1933 41" stroke="#4F4F4F" stroke-width="1.61717" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M19.0448 40.1914H16.619" stroke="#4F4F4F" stroke-width="1.61717" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22.2791 32.1056C20.662 34.5313 15.054 36.6809 9.01453 35.8507C5.29884 35.3399 -0.260179 32.1056 1.25592 26.4455C4.70009 13.5874 19.0448 18.3596 19.0448 18.3596C19.0448 18.3596 19.4491 5.62441 26.9285 5.11905C34.4079 4.61368 25.3113 13.8113 25.3113 13.8113C25.3113 13.8113 28.7478 9.46519 31.9821 11.0824C35.2165 12.6995 30.5671 15.9339 28.0403 16.3382C25.5135 16.7425 33.5993 15.1253 35.2165 16.7425C36.8337 18.3596 35.5197 19.1682 30.365 19.9768C25.2102 20.7854 36.0251 19.1682 36.0251 21.594C36.0251 24.0197 30.365 24.8283 30.365 24.8283C30.365 24.8283 33.195 24.2219 34.61 26.5465C36.0251 28.8712 29.7585 28.8712 29.7585 28.8712C29.7585 28.8712 36.0251 31.297 34.4079 33.7227C32.7907 36.1485 25.5135 32.9142 25.5135 31.297" stroke="#4F4F4F" stroke-width="1.61717" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.72459 6.23085C7.72459 6.23085 3.68167 4.61368 2.0645 7.84802C2.0645 7.84802 6.10742 -3.47217 13.1825 2.99651C13.1825 2.99651 16.2147 4.61368 13.9911 9.46519C11.7675 14.3167 10.9589 12.2952 11.3632 15.3274" stroke="#4F4F4F" stroke-width="1.61717" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.91601 8.6566C6.91601 8.6566 8.53318 10.2738 5.80421 12.0931C1.25592 15.1253 2.26665 19.0671 2.26665 19.0671" stroke="#4F4F4F" stroke-width="1.61717" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg> 
            </SvgIcon>
            <Avatar/>

            <Box>
            {sampleData.map((card) => (
                <EventCard 
                cardtype="caterUnbooked" 
                description={card.description!}
                hostName={card.hostName!}
                hostPFP={card.hostPFP!}
                tags={card.tags!}
                location={card.location!}
                 />
            ))}
            </Box>
        </Box>
    );
}