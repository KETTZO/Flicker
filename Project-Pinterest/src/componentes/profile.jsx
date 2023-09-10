import React, { useState } from 'react';
import './profile.css'

function Perfil() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [usuario, setUsuario] = useState('');
  const [imagenPerfil, setImagenPerfil] = useState(null);

  // Función para manejar la subida de una nueva imagen de perfil
  const handleImagenPerfilChange = (event) => {
    // Aquí puedes implementar la lógica para cargar la imagen.
  };

  // Función para manejar el evento de edición
  const handleEditarClick = () => {
    // Aquí puedes implementar la lógica para guardar los cambios en el perfil.
  };

  return (
    <div className="profile-container">
    {/* Imagen de perfil */}
    <img src={imagenPerfil} alt="Imagen de perfil" className="profile-image" />

    {/* Inputs para nombre y apellido */}
    <div className="profile-input-group">
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="profile-input"
        />
      </div>
      <div>
        <label>Apellido:</label>
        <input
          type="text"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          className="profile-input"
        />
      </div>
    </div>

    {/* Inputs para usuario y cambiar foto */}
    <div className="profile-input-group-user">
      <div>
        <label>Usuario:</label>
        <input
          type="text"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          className="profile-input-user"
        />
      </div>
      <div>
        <label className="profile-file-label">Cambiar Foto</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImagenPerfilChange}
          className="profile-input-file"
        />
      </div>
    </div>

    {/* Botón de editar */}
    <button onClick={handleEditarClick} className="profile-edit-button">Editar</button>
  </div>
);
}

export default Perfil;
