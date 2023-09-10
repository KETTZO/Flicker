import React, { useState } from 'react';

function Profile() {
  // Estado inicial con datos del usuario
  const [profileData, setProfileData] = useState({
    photo: '/path/to/default/photo.jpg',
    firstName: 'John',
    lastName: 'Doe',
    username: 'johndoe',
  });

  // Estado para controlar la edición del perfil
  const [isEditing, setIsEditing] = useState(false);

  // Función para manejar cambios en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  // Función para manejar la carga de una nueva foto de perfil
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    // Aquí puedes implementar la lógica para cargar la foto al servidor
  };

  return (
    <div>
      <h1>Perfil de Usuario</h1>
      {isEditing ? (
        <form>
          <div>
            <label>Foto de Perfil Actual</label>
            <img src={profileData.photo} alt="Foto de perfil actual" />
          </div>
          <div>
            <label>Subir Nueva Foto</label>
            <input type="file" accept="image/*" onChange={handlePhotoUpload} />
          </div>
          <div>
            <label>Nombre</label>
            <input
              type="text"
              name="firstName"
              value={profileData.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Apellido</label>
            <input
              type="text"
              name="lastName"
              value={profileData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Usuario</label>
            <input
              type="text"
              name="username"
              value={profileData.username}
              onChange={handleInputChange}
            />
          </div>
          <button onClick={() => setIsEditing(false)}>Guardar</button>
        </form>
      ) : (
        <div>
          <div>
            <label>Foto de Perfil</label>
            <img src={profileData.photo} alt="Foto de perfil" />
          </div>
          <div>
            <label>Nombre</label>
            <span>{profileData.firstName}</span>
          </div>
          <div>
            <label>Apellido</label>
            <span>{profileData.lastName}</span>
          </div>
          <div>
            <label>Usuario</label>
            <span>{profileData.username}</span>
          </div>
          <button onClick={() => setIsEditing(true)}>Editar</button>
        </div>
      )}
    </div>
  );
}

export default Profile;
