import React from 'react';
import ApiVacunas from '../Datos_json/ApiVacunas';
import usuarios from '../Datos_json/usuarios';
import Componente from './componente';



export default function DashboardUser3() {


  
    return (
      <>
      <div id='menuinicio'>
      <div class="wrapper">
        <nav class="navbar">
          <div class="navbar-left">
            <div class="toggle" data-target="aside-menu">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div class="brand1">
              Medicina Integral 
             De Colombia.
            </div>
           
            <span class="search">
              <input type="text" placeholder="Search"/>
            </span>
          </div>
    
          <div class="navbar-right">
            <div class="dropdown">
            <a class="dropdown-trigger" data-target="user-dropdown">{usuarios[2].nombres}<span class="caret"></span></a>
                <ul class="dropdown-menu" id="user-dropdown">
                <li><a href="/Perfi_b">Perfil</a></li>
                  <li><a href="/Dashboard_b">Pagina principal</a></li>
                  <li><a href="/">Salir</a></li>
                </ul>
    
            </div>
          </div>
        </nav>
        <aside id="aside-menu" class="menu">
        <br></br>
      
          <ul class="menu-list">
            <li class="menu-item"><a href="/Agendamiento_b">Agendamiento</a></li>  
          </ul>

         
         
        </aside>
        <main class="main">
        <section class="section">
        <div class="button-group">
        <h1 class="title">Bienvenido(a), {usuarios[2].nombres} </h1>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Edad</th>
                <th>Me protege de</th>
                <th>Dosis</th>
              </tr>
            </thead>
            <tbody id="usuarios">
              
                <tr>
                 <td>{ApiVacunas[0].edad}</td>
                 <td>{ApiVacunas[0].nombre}</td>
                 <td>{usuarios[2].vacunas[0].status}</td>

                 
                  
                
                                
                </tr>
                <tr>
                 <td>{ApiVacunas[1].edad}</td>
                 <td>{ApiVacunas[1].nombre}</td>
                 <td>{usuarios[2].vacunas[1].status}</td>
                                
                </tr>
                <tr>
                 <td>{ApiVacunas[2].edad}</td>
                 <td>{ApiVacunas[2].nombre}</td>
                 <td>{usuarios[2].vacunas[2].status}</td>
                                
                </tr>
                <tr>
                 <td>{ApiVacunas[3].edad}</td>
                 <td>{ApiVacunas[3].nombre}</td>
                 <td>{usuarios[2].vacunas[3].status}</td>
                                
                </tr>
                <tr>
                 <td>{ApiVacunas[4].edad}</td>
                 <td>{ApiVacunas[4].nombre}</td>
                 <td>{usuarios[2].vacunas[4].status}</td>
                                
                </tr>
                <tr>
                 <td>{ApiVacunas[5].edad}</td>
                 <td>{ApiVacunas[5].nombre}</td>
                 <td>{usuarios[2].vacunas[5].status}</td>
                                
                </tr>
                <tr>
                 <td>{ApiVacunas[6].edad}</td>
                 <td>{ApiVacunas[6].nombre}</td>
                 <td>{usuarios[2].vacunas[6].status}</td>
                                
                </tr>
              
  
            </tbody>
          </table>
        </div>
      </section>
          <div class="u-container-layout u-container-layout-1">
            <img class="u-image u-image-default u-image-1" src="{{ url_for('static', filename='images/list.jpg') }}" alt="" data-image-width="920" data-image-height="552"/>
          </div>
        </main>
        <footer class="footer">
          <p>Todos los derechos reservados &copy; 2021 - Medicina integral de col.</p>
        </footer>
      </div>
      <script type="text/javascript" src="/Datos_json/ApiVacunas.json"></script>
      <script src="/static/js/global.js"></script>
      <script src="/static/js/dashboard.js"></script>
    </div>
    </>

    );

  }
  
  