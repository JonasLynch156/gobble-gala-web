import turkeyLogo from '.././assets/turkey.svg'
import { Button } from "@mui/material";
import { RegisterButton } from '../components/registerButton';


function Register() {
    
return (
    <div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={turkeyLogo} className="gobbieLogo" alt="Gobbie the gobble gala turkey" />
            <h2 style={{ marginLeft: '10px' }}>GobbleGala</h2>
        </div>
        <form>
        <RegisterButton text='Register as Caterer' onClick={() => {}}/>
        <br></br>
        <br></br>
        <RegisterButton text='Register as Host' onClick={() => {}}/>
        </form>
    </div>
);
}

export default Register;