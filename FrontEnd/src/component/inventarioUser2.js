import React from 'react'
import usuarios from '../Datos_json/usuarios'
import ApiVacunas from '../Datos_json/ApiVacunas'

const InventarioUser2 = () => {
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
                <a class="dropdown-trigger" data-target="user-dropdown">{usuarios[1].nombres}<span class="caret"></span></a>
                <ul class="dropdown-menu" id="user-dropdown">
                  <li><a href="/Dashboard_a">Pagina principal</a></li>
                  <li><a href="/">Salir</a></li>
                </ul>
              </div>
        </div>
      </nav>
      <aside id="aside-menu" class="menu">
      <br></br>

        <br></br> 
        <ul class="menu-list">
          <li class="menu-item"><a href="/Inventario_a">Inventario vacunas</a></li>
          </ul>
          <br></br>
        <ul class="menu-list">
          <li class="menu-item"><a href="/Agendamiento_a">Agendamiento</a></li>  
        </ul>

       
        
        <ul class="menu-list">
          <li class="menu-item">
            
          </li>
        </ul>
      </aside>
      <main class="main">
      <section class="section"/>
				

				<h1 class="title">Inventario</h1>
        <section class="section">
        <div class="button-group">
          <a class="button modal-trigger" data-target="modaldeusuarios" >Crear Vacuna</a>
        </div>
        <div>
          <table>
          <thead>
              <tr>
                <th>Codigo de Vacuna</th>
                <th>Nombre Vacuna</th>
                <th>cantidad</th>
                   <th>Accion</th>

              </tr>
            </thead>

                    <tbody id="Cursos">
                        <tr>
                            <td>{ApiVacunas[0].id}</td>
                            <td>{ApiVacunas[0].nombre}</td>
                            <td>{ApiVacunas[0].cantidad}</td>
                            
                            <td>
                   <div class="button-group"/>
                   <a class="button modal-trigger" data-target="modaldeusuarios" >Editar</a>
                  
                   <a class="button modal-trigger" data-target="modaldeusuarios" >Eliminar</a>


</td>
                        </tr>
                        <tr>
                            <td>{ApiVacunas[1].id}</td>
                            <td>{ApiVacunas[1].nombre}</td>
                            <td>{ApiVacunas[1].cantidad}</td>
                            
                            <td>
                   <div class="button-group"/>
                   <a class="button modal-trigger" data-target="modaldeusuarios" >Editar</a>
                  
                   <a class="button modal-trigger" data-target="modaldeusuarios" >Eliminar</a>


</td>
                        </tr>
                        <tr>
                            <td>{ApiVacunas[2].id}</td>
                            <td>{ApiVacunas[2].nombre}</td>
                            <td>{ApiVacunas[2].cantidad}</td>
                            
                            <td>
                   <div class="button-group"/>
                   <a class="button modal-trigger" data-target="modaldeusuarios" >Editar</a>
                  
                   <a class="button modal-trigger" data-target="modaldeusuarios" >Eliminar</a>


</td>
                        </tr>
                        <tr>
                            <td>{ApiVacunas[3].id}</td>
                            <td>{ApiVacunas[3].nombre}</td>
                            <td>{ApiVacunas[3].cantidad}</td>
                            
                            <td>
                   <div class="button-group"/>
                   <a class="button modal-trigger" data-target="modaldeusuarios" >Editar</a>
                  
                   <a class="button modal-trigger" data-target="modaldeusuarios" >Eliminar</a>


</td>
                        </tr>
                        <tr>
                            <td>{ApiVacunas[4].id}</td>
                            <td>{ApiVacunas[4].nombre}</td>
                            <td>{ApiVacunas[4].cantidad}</td>
                            
                            <td>
                   <div class="button-group"/>
                   <a class="button modal-trigger" data-target="modaldeusuarios" >Editar</a>
                  
                   <a class="button modal-trigger" data-target="modaldeusuarios" >Eliminar</a>


</td>
                        </tr>
                        <tr>
                            <td>{ApiVacunas[5].id}</td>
                            <td>{ApiVacunas[5].nombre}</td>
                            <td>{ApiVacunas[5].cantidad}</td>
                            
                            <td>
                   <div class="button-group"/>
                   <a class="button modal-trigger" data-target="modaldeusuarios" >Editar</a>
                  
                   <a class="button modal-trigger" data-target="modaldeusuarios" >Eliminar</a>


</td>
                        </tr>
                        <tr>
                            <td>{ApiVacunas[6].id}</td>
                            <td>{ApiVacunas[6].nombre}</td>
                            <td>{ApiVacunas[6].cantidad}</td>
                            
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

export default InventarioUser2
