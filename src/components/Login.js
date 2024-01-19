import React from "react";
import {Link} from 'react-router-dom';
function Login(){
    return(
        <div>
            login page<br></br>
            Don't have an account?<Link to= '/signup'>create account</Link>
        </div>
    );
}

export default Login;