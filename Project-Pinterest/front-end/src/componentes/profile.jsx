import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import miImagen from './../assets/img.png';
import './profile.css'


function Profile() {
  // Estado para almacenar la información del perfil
  const [profileInfo, setProfileInfo] = useState({
    nombre: '',
    apellido: '',
    usuario: '',
    fotoPerfil: '', // Aquí puedes guardar la URL de la foto de perfil
  });

  // Función para manejar cambios en los campos de entrada
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileInfo({
      ...profileInfo,
      [name]: value,
    });
  };

  // Función para manejar la carga de una nueva foto de perfil
  const handlePhotoChange = (e) => {
    // Aquí puedes implementar la lógica para cargar la nueva foto de perfil
  };


  return (
      <div className="card" style={{backgroundColor: '#313131', color: '#c99da2'}}>
        <h1>Mi Perfil</h1>
        <div className="profile-picture">
          <img src={miImagen} className="img-thumbnail" alt="Foto de perfil" />
        </div>
        <br />
  
        <div className="row">
          <div className="col-sm-12 col-md-6 mb-5">
            <input
              className="form-control"
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={profileInfo.nombre}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-sm-12 col-md-6 mb-5">
            <input
              className="form-control"
              type="text"
              name="apellido"
              placeholder="Apellido"
              value={profileInfo.apellido}
              onChange={handleInputChange}
            />
          </div>
        </div>
  
        <div className="row">
          <div className="col-sm-12 col-md-6 mb-5">
            <input
              className="form-control"
              type="text"
              name="usuario"
              placeholder="Usuario"
              value={profileInfo.usuario}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-sm-12 col-md-6 mb-5">
            <input
              className="form-control input-change-photo"
              type="file"
              name="imagen"
              onChange={handlePhotoChange} // Utiliza una función separada para manejar la carga de imágenes
            />
          </div>
        </div>
        <button type="button" class="btn btn-outline-light">Editar</button>
      </div>
  );
  
}

export default Profile;