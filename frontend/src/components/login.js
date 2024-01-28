// Login.js
import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useAuth } from './AuthContext';

const cliendID = "929438925825-617jnet076vt5778eu2j6sse2jveeooi.apps.googleusercontent.com";

function Login() {
  const { login } = useAuth();

  const onSuccess = (res) => {
    console.log("LOGIN SUCCESS: ", res.profileObj);
    // Llama a la función de login del contexto para establecer el email y el token
    login(res.profileObj.email, res.tokenId);
    // Redirige a la página principal
    // (dependiendo de cómo manejes las rutas en tu aplicación)
    window.location.href = '/main';
  }

  const onFailure = (res) => {
    console.log("LOGIN Failed: ", res);
    
    login("test-mail", "test-token");
    window.location.href = '/home';
  }

  return (
    <div>
      <GoogleLogin
        clientId={cliendID}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy='single_host_origin'
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;