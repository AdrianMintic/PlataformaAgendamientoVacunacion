import React from 'react'
import usuarios from '../Datos_json/usuarios'
import ApiVacunas from '../Datos_json/ApiVacunas'

const PerfilUser3 = () => {
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
                <li><a href="/Perfi_b">Perfil</a></li>
                  <li><a href="/Dashboard">Pagina principal</a></li>
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
				

				<h1 class="title">Perfil</h1>
        <section class="section">
        <div class="button-group">
          <a class="button modal-trigger" data-target="modaldeusuarios" >Editar Perfil</a>
          <a class="button modal-trigger" data-target="modaldeusuarios" >Guardar</a>
        </div>
        <div>
          <table>
          <thead>
              <tr>
                <th>Nombre</th>
                <th>Usuario</th>
                <th>contraseña</th>
                <th>Tipodocumento</th>
                <th>Identificacion</th>
                <th>E-mail</th>
                <th>Telefono</th>

              </tr>
            </thead>

                    <tbody id="Cursos">
                        <tr>
                            <td>{usuarios[2].nombres}</td>
                            <td>{usuarios[2].usuario}</td>
                            <td>{usuarios[2].contraseña}</td>
                            <td>{usuarios[2].tipodocumento}</td>
                            <td>{usuarios[2].identificacion}</td>
                            <td>{usuarios[2].Email}</td>
                            <td>{usuarios[2].telefono}</td>
                            
                
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

export default PerfilUser3