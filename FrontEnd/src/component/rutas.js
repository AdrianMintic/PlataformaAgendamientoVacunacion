
import React from 'react'
import Componente from './componente.js';
import Dashboard from './dashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import error from './error.js';
import Inventario from './inventario.js';
import Agendamiento from './agendamiento.js';
import Usuarios from './usuarios.js';
import DashboardUser2 from './dashboardUser2.js';
import DashboardUser3 from './dashboardUser3.js'; 
import InventarioUser2 from './inventarioUser2.js';
import AgendamientoUser2 from './agendamiento User2.js';
import AgendamientoUser3 from './agendamientoUser3.js';
import Perfil from './perfil.js';
import PerfilUser2 from './perfilUser2.js';
import PerfilUser3 from './perfilUser3.js';
const Rutas = () => {
    return (
        <div>
            
            <Router>
                <Switch>

                <Route exact path="/" component={Componente}/>
                <Route exact path="/Dashboard" component={Dashboard}/>
                <Route exact path="/Dashboard_a" component={DashboardUser2}/>
                <Route exact path="/Dashboard_b" component={DashboardUser3}/>
                
                <Route exact path="/Usuarios" component={Usuarios}/>
                <Route exact path="/Perfil" component={Perfil}/>
                <Route exact path="/Perfi_a" component={PerfilUser2}/>
                <Route exact path="/Perfi_b" component={PerfilUser3}/>

                
                <Route exact path="/Agendamiento" component={Agendamiento}/>
                <Route exact path="/Agendamiento_a" component={AgendamientoUser2}/>
                <Route exact path="/Agendamiento_b" component={AgendamientoUser3}/>

                <Route exact path="/Inventario" component={Inventario}/>
                <Route exact path="/Inventario_a" component={InventarioUser2}/>
                <Route exact path="*" component={error}/>
                
                
                </Switch>  
            </Router>
       
        </div>
    )
}

export default Rutas




/*}
<Router>
     
<Switch>       
  <Route exact path="/" component={<Componente/>}/>

  <Route exact path="/Dashboard" component={Dashboard} />
  
  <Route exact path="/ejemplo" component={Ejemplo} />

    
</Switch>
</Router>

);
}*/