import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {

    const {googleSignIn} = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/"

const handleGoogleSignIn = () =>{
    googleSignIn()
    .then(result =>{
        const loggedUser = result.user;
        console.log(loggedUser);
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Your Have Successfully Logged In with Google',
            showConfirmButton: false,
            timer: 1500
        });
        navigate(from, { replace: true })
    })
}

    return (
        <div>
            <div className="divider">OR</div>
            <div>
                <button onClick = {handleGoogleSignIn} className="btn btn-secondary btn-block">GOOGLE</button>
            </div>
        </div>
    );
};

export default SocialLogin;