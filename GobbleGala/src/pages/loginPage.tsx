import React from "react";
import { 
    Button,
    TextField,
    Menu,
    MenuItem
} from "@mui/material";
import { MenuButton } from '@mui/base/MenuButton';

export const LoginPage = () => { //props: {label: string}
    //const {label} = props;
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

  const handleClose = () => {
    setAnchorEl(null);
  };
    return (
        <>
        <div><TextField id="fname" label="First Name" variant="outlined" /></div>
        <div><TextField id="lname" label="Last Name" variant="outlined" /></div>
        <div><TextField id="email" label="Email" variant="outlined" /></div>
        <div><TextField id="country" label="Country" variant="outlined" /></div>
        <div><TextField id="state" label="State" variant="outlined" /> <TextField id="zip" label="Zip" variant="outlined" /></div>

        <div>
        <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
        >
            Dashboard
        </Button>

        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}
        >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
        </Menu>

        </div>
        <div><TextField id="bname" label="Business Name" variant="outlined" /></div>
        </>
    )
}