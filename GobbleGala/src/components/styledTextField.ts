import { TextField, styled } from "@mui/material";

export const StyledTextField = styled(TextField)({
    '& label': {
      color: '#E6E1E5',
    },
    '& label.Mui-focused': {
      color: '#E6E1E5',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#303030',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#303030',
      },
      '&:hover fieldset': {
        borderColor: '#303030',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#303030',
      },
    },
  },);