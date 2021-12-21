import React from 'react'
import usuarios from '../Datos_json/usuarios'
import ApiVacunas from '../Datos_json/ApiVacunas';

const AgendamientoUser3 = () => {
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
          <a class="dropdown-trigger" data-target="user-dropdown">{usuarios[2].nombres}<span class="caret"></span></a>
                <ul class="dropdown-menu" id="user-dropdown">
                  <li><a href="/Dashboard_b">Pagina principal</a></li>
                  <li><a href="/">Salir</a></li>
                </ul>
          </div>
        </div>
      </nav>
      <aside id="aside-menu" class="menu">
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
			<section class="section"/>
				

				<h1 class="title">Agendamiento</h1>


		
				<br />
                 <div class="options">
                 <a class="button modal-trigger" data-target="modaldeusuarios">Modificar Agendamiento</a>
                </div>
				<div class="table">
                    <table class="default">
                        <thead>
                            <tr>
                                <th>Tipo vacuna</th>
                                <th>Fecha de Agendamiento </th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                          <tr/>
                            <tr>
                                <td>{ApiVacunas[0].nombre}</td>
                                
                                <td><input type="date"/></td>
                                <td>
                                    <button class="button modal-trigger" data-target="modaldeusuarios">Guardar</button>
                                    <button class="button modal-trigger" data-target="modaldeusuarios" type="button"
						                        onclick="if (!confirm('¿Esta seguro que desea eliminar este Agendamineto?')) {return false};">Eliminar</button>
                                </td>

                            </tr>

                            <tr>
                              <td>{ApiVacunas[1].nombre}</td>
                              
                              <td><input type="date"/></td>
                              <td>
                                  <button class="button modal-trigger" data-target="modaldeusuarios">Guardar</button>
                                  <button class="button modal-trigger" data-target="modaldeusuarios" type="button"
                                  onclick="if (!confirm('¿Esta seguro que desea eliminar este Agendamineto?')) {return false};">Eliminar</button>
                              </td>

                          </tr>
                          <tr>
                            <td>{ApiVacunas[2].nombre}</td>
                            
                            <td><input type="date"/></td>
                            <td>
                                <button class="button modal-trigger" data-target="modaldeusuarios">Guardar</button>
                                <button class="button modal-trigger" data-target="modaldeusuarios" type="button"
                                onclick="if (!confirm('¿Esta seguro que desea eliminar este Agendamineto?')) {return false};">Eliminar</button>
                            </td>

                        </tr>


                        <tr>
                          <td>{ApiVacunas[3].nombre}</td>
                          
                          <td><input type="date"/></td>
                          <td>
                              <button class="button modal-trigger" data-target="modaldeusuarios">Guardar</button>
                              <button class="button modal-trigger" data-target="modaldeusuarios" type="button"
                              onclick="if (!confirm('¿Esta seguro que desea eliminar este Agendamineto?')) {return false};">Eliminar</button>
                          </td>

                      </tr>
                      <tr>
                          <td>{ApiVacunas[4].nombre}</td>
                          
                          <td><input type="date"/></td>
                          <td>
                              <button class="button modal-trigger" data-target="modaldeusuarios">Guardar</button>
                              <button class="button modal-trigger" data-target="modaldeusuarios" type="button"
                              onclick="if (!confirm('¿Esta seguro que desea eliminar este Agendamineto?')) {return false};">Eliminar</button>
                          </td>

                      </tr>

                      <tr>
                          <td>{ApiVacunas[5].nombre}</td>
                          
                          <td><input type="date"/></td>
                          <td>
                              <button class="button modal-trigger" data-target="modaldeusuarios">Guardar</button>
                              <button class="button modal-trigger" data-target="modaldeusuarios" type="button"
                              onclick="if (!confirm('¿Esta seguro que desea eliminar este Agendamineto?')) {return false};">Eliminar</button>
                          </td>

                      </tr>
                      <tr>
                          <td>{ApiVacunas[6].nombre}</td>
                          
                          <td><input type="date"/></td>
                          <td>
                              <button class="button modal-trigger" data-target="modaldeusuarios">Guardar</button>
                              <button class="button modal-trigger" data-target="modaldeusuarios" type="button"
                              onclick="if (!confirm('¿Esta seguro que desea eliminar este Agendamineto?')) {return false};">Eliminar</button>
                          </td>

                      </tr>

                        </tbody>
                    </table>
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

export default AgendamientoUser3
