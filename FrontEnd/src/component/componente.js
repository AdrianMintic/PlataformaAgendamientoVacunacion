import Rutas from "./rutas";
import React, { useState } from "react";
import Dashboard from './dashboard';
import DashboardUser2 from "./dashboardUser2";
import DashboardUser3 from "./dashboardUser3";
import { BrowserRouter as Router,Route, Redirect} from 'react-router-dom'
import {browserHistory} from "react-router";
import ReactDOM from 'react-dom';
import usuarios from "../Datos_json/usuarios";





//componentes con arrayfunction
export default function Componente() {
    
  function validar_login(){
    

   
        if((usuario === usuario_prueba[0] ) && (contraseña === contraseña_prueba[0])){
           
            return ReactDOM.render(
                
                <React.StrictMode>
                  <Dashboard/>
                  
                </React.StrictMode>,
                document.getElementById('root')
              )

            }else if ((usuario === usuario_prueba[1] ) && (contraseña === contraseña_prueba[1])){

                return ReactDOM.render(
                
                    <React.StrictMode>
                      <DashboardUser2/>
                      
                    </React.StrictMode>,
                    document.getElementById('root')
                  )
            }else if ((usuario === usuario_prueba[2] ) && (contraseña === contraseña_prueba[2])){

                return ReactDOM.render(
                
                    <React.StrictMode>
                      <DashboardUser3/>
                      
                    </React.StrictMode>,
                    document.getElementById('root')
                  )
            }else{    
                window.alert("usuario incorrecto")   
        
    }
}
 

        

const usuario_prueba = ["ADRIAN","DIEGO","JUANCHITO"]
const contraseña_prueba = ["prueba1","prueba2","prueba3"]

const [usuario, setUsuario] = useState("");
const [contraseña, setContraseña] = useState("");



return(
    <>
<div>
  <body class="bg-gradient-primary">
  <title>SB Admin 2 - Login</title>

<link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css"/>
<link
    href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
    rel="stylesheet"/>


<link href="css/sb-admin-2.min.css" rel="stylesheet"/>

<div class="container">

    
    <div class="row justify-content-center">

        <div class="col-xl-10 col-lg-12 col-md-9">

            <div class="card o-hidden border-0 shadow-lg my-5">
                <div class="card-body p-0">
                    
                    <div class="row">
                        <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                        <div class="col-lg-6">
                            <div class="p-5">
                                <div class="text-center">
                                    <h1 class="h4 text-gray-900 mb-4">Iniciar Sesion</h1>
                                </div>
                                <form class="user">
                                    <div class="form-group">
                                        <input type="text" class="form-control form-control-user"
                                            id="Ingreseusuario" name="usuario" value={usuario} 
                                            onChange={(e) => setUsuario(e.target.value)}
                                            aria-describedby="emailHelp"
                                            placeholder="Ingrese su usuario"/>
                                    </div>
                                    <div class="form-group">
                                        <input type="password" class="form-control form-control-user"
                                            id="Ingresecontraseña" name="contraseña" value={contraseña} 
                                            onChange={(e) => setContraseña(e.target.value)}
                                            placeholder="Contraseña"/>
                                    </div>
                                    <div class="form-group">
                                        <div class="custom-control custom-checkbox small">
                                            <input type="checkbox" class="custom-control-input" id="customCheck"/>
                                            <label class="custom-control-label" for="customCheck">Recuerdame</label>
                                        </div>
                                    </div>

                            

                                    
                                    
                                    <button onClick={validar_login} class="btn btn-primary btn-user btn-block">Iniciar Sesion</button>
                                  
        {/*                         <a href={'Dashboard'} class="btn btn-primary btn-user btn-block">
                                        Iniciar Sesion
</a> */}
                                    
                                    
                                   
                                </form>
                                
                                <div class="text-center">
                                    <a class="small" href="forgot-password.html">¿Olvide mi Contraseña</a>
                                </div>
                                <div class="text-center">
                                    <a class="small" href="register.html">Registrarme</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>

</div>


<script src="vendor/jquery/jquery.min.js"></script>
<script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>


<script src="vendor/jquery-easing/jquery.easing.min.js"></script>


<script src="js/sb-admin-2.min.js"></script>

</body>
    
    </div>
    </>
    );
} 
