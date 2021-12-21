import React from 'react';
import ApiVacunas from '../Datos_json/ApiVacunas';
import usuarios from '../Datos_json/usuarios';
import Componente from './componente';



export default function Dashboard({el}) {


  
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
                <a class="dropdown-trigger" data-target="user-dropdown">{usuarios[0].nombres}<span class="caret"></span></a>
                <ul class="dropdown-menu" id="user-dropdown">
                  <li><a href="/Perfil">Perfil</a></li>
                  <li><a href="/Dashboard">Pagina principal</a></li>
                  <li><a href="/">Salir</a></li>
                </ul>
              </div>
            </div>
        </nav>
        <aside id="aside-menu" class="menu">
        <br></br>            
            <ul class="menu-list">
              <li class="menu-item"><a href="/Usuarios">Usuarios</a></li>  
            </ul>
     
          
         
          <br></br>
        
                
          <ul class="menu-list">
            <li class="menu-item"><a href="/Inventario">Inventario vacunas</a></li>
            </ul>
            <br></br>
          <ul class="menu-list">
            <li class="menu-item"><a href="/Agendamiento">Agendamiento</a></li>  
          </ul>

        
        </aside>
        <main class="main">
        <section class="section">
        <div class="button-group">
        <h1 class="title">Bienvenido(a), {usuarios[0].nombres} </h1>
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
  
  