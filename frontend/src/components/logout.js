import {GoogleLogin, GoogleLogout} from 'react-google-login';

const cliendID = "929438925825-617jnet076vt5778eu2j6sse2jveeooi.apps.googleusercontent.com";

function Logout() {
    
    const onSuccess = (res) => {
        console.log("LOGIN SUCCESS: ", res.profileObj);
    }

    return (
        <div id="signOutButton">
            <GoogleLogout
                clientId={cliendID}
                buttonText="Login"
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout;