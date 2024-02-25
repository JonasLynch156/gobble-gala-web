import turkeyLogo from '.././assets/turkey.svg'
import { RegisterButton } from '../components/registerButton';
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();

    const handleClick = (route: string) => {
        navigate(route);
    };
return (
    <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
            <img src={turkeyLogo} className="gobbieLogo" alt="Gobbie the gobble gala turkey" />
            <h2 style={{ marginLeft: '10px' }}>GobbleGala</h2>
        </div>
        <form>
        <RegisterButton text='Register as Caterer' width='400px' onClick={() => handleClick("/cater-register")}/>
        <br></br>
        <br></br>
        <RegisterButton text='Register as Host' width='400px' onClick={() => handleClick("/host-register")}/>
        </form>
    </div>
);
}

export default Register;