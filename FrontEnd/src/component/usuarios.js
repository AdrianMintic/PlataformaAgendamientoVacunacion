import React, { Component,useState, useEffect } from 'react'
import usuarios from '../Datos_json/usuarios'
import axios from 'axios'



const Usuarios = () => {  
 
  

    return (
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
    
           
            
            <ul class="menu-list">
              <li class="menu-item">
                
              </li>
            </ul>
          </aside>
          <main class="main">
          <section class="section">
        <div class="button-group">
          <a class="button modal-trigger" data-target="modaldeusuarios" >Crear Usuario</a>
        </div>
        <div>
          <table>
          <thead>
              <tr>
                <th>Tipo documento</th>
                <th>Identificacion</th>
                <th>Nombre Completo</th>
                <th>Rol</th>
                   <th>Accion</th>

              </tr>
            </thead>
            <tbody id="usuarios">
              
                <tr>
                 <td>{usuarios[0].tipodocumento}</td>
                 <td>{usuarios[0].identificacion}</td>
                 <td>{usuarios[0].nombres}</td>
                 <td>{usuarios[0].Rol}</td>
                 <td>
                   <div class="button-group"/>
                   <a class="button modal-trigger" data-target="modaldeusuarios" >Editar</a>
                  
                   <a class="button modal-trigger" data-target="modaldeusuarios" >Eliminar</a>


</td>
                 
                  
                
                                
                </tr>
                <tr>
                 <td>{usuarios[1].tipodocumento}</td>
                 <td>{usuarios[1].identificacion}</td>
                 <td>{usuarios[1].nombres}</td>
                 <td>{usuarios[1].Rol}</td>
                 
                 <td>
                   <div class="button-group">
                   <a class="button modal-trigger" data-target="modaldeusuarios" >Editar</a>
                  
                   <a class="button modal-trigger" data-target="modaldeusuarios" >Eliminar</a>
                   </div>


</td>
             



                 
                  
                
                                
                </tr>
                <tr>
                 <td>{usuarios[2].tipodocumento}</td>
                 <td>{usuarios[2].identificacion}</td>
                 <td>{usuarios[2].nombres}</td>
                 <td>{usuarios[2].Rol}</td>
                 
                 <td>
                   <div class="button-group"/>
                   <a class="button modal-trigger" data-target="modaldeusuarios" >Editar</a>
                  
                   <a class="button modal-trigger" data-target="modaldeusuarios" >Eliminar</a>


</td>
             


                 
                  
                
                                
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
        <script src="/static/js/global.js"></script>
        <script src="/static/js/dashboard.js"></script>
      </div>
      
    )
}

export default Usuarios
