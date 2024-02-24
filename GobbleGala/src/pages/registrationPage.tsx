import turkeyLogo from '.././assets/turkey.svg'
import { Button } from "@mui/material";
import { ApplyButton } from '../components/applyButton';


function Register() {
    
return (
    <div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={turkeyLogo} className="gobbieLogo" alt="Gobbie the gobble gala turkey" />
            <h2 style={{ marginLeft: '10px' }}>GobbleGala</h2>
        </div>
        <form>
        <ApplyButton text='Apply as Caterer' onClick={() => {}}/>
        <br></br>
        <br></br>
        <ApplyButton text='Apply as Host' onClick={() => {}}/>
        </form>
    </div>
);
}

export default Register;