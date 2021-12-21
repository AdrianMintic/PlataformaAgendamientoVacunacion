import React from 'react'  
  
   const usuarios =
     [

      {
          "id" : 1,
          "tipodocumento":  "C.C",
          "identificacion": 13545436,
          "usuario":"ADRIAN",
          "contraseña": "prueba1",
          "nombres": "Adrian Fernandez",
          "Rol": "Administrador",
          "Email": "Adrian@uninorte.edu.co",
          "telefono": 536346
      
          
      },
      
      {
        "id" : 2,
          "tipodocumento":  "C.C",
          "identificacion": 43664657,
          "contraseña": "prueba2",
          "usuario": "DIEGO",
          "nombres": "Diego Perez Perea",
          "Rol": "Interno",
          "Email": "Diego@uninorte.edu.co",
          "telefono": 2344444734
    
      },

      {
        "id" : 3,
          "tipodocumento":  "R.C",
          "identificacion": 54373457,
          "contraseña": "prueba3",
          "usuario": "JUANCHITO",
          "nombres": "Juanito Alimaña con Maña",
          "Rol": "Externo",
          "Email": "Juancho@uninorte.edu.co",
          "telefono": 267563,
          "vacunas":[ {
            "id" : 1,
            "status": "Aplicada",
          },
          {
            "id" : 2,
            "status": "Aplicada",
          },
          {
            "id" : 3,
            "status": "Aplicada",
          },
          {
            "id" : 4,
            "status": "Aplicada",
          },
          {
            "id" : 5,
            "status": "No Aplicada",
          },
          {
            "id" : 6,
            "status": "No Aplicada",
          },
          {
            "id" : 7,
            "status":"No Aplicada",
          }]
          
      }
           
              
    ]
    
export default usuarios;