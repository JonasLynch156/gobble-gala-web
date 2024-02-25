import { Button } from "@mui/material";
import React from "react";

export const RegisterButton = (props: {text: string, onClick: () => void, width?: string}) => {
    const {text, onClick, width} = props;
    return (
        <Button variant="contained"
            sx={{
                ":hover": {
                    bgcolor: "#D35A5F",
                    color: "white",
                    border: 'none',
                  },
                borderRadius: 50,
                backgroundColor: '#A84448',
                stroke: '0px',
                borderWidth: '0px',
                width: width ?? '100%'
                
            }}
            onClick={onClick}
        >
            {text}
        </Button>
    );
}