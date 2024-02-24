import turkeyLogo from '.././assets/turkey.svg'
import { Button } from "@mui/material";


function Register() {
    
return (
    <div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={turkeyLogo} className="gobbieLogo" alt="Gobbie the gobble gala turkey" />
            <h2 style={{ marginLeft: '10px' }}>GobbleGala</h2>
        </div>
        <form>
        <Button variant="contained"
            sx={{
                ":hover": {
                    bgcolor: "#D35A5F",
                    color: "white",
                    border: 'none',
                  },
                borderRadius: 50,
                backgroundColor: '#A84448',
                stroke: 'none',
            }}
        >
            Register as Caterer
        </Button>
        <br></br>
        <br></br>
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
            }}
        >
            Register as Host
        </Button>
        </form>
    </div>
);
}

export default Register;