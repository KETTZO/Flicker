import React, { useState } from 'react';

function Login() {
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Función para manejar cambios en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del formulario al servidor
    // Por ejemplo, puedes hacer una solicitud POST a una API para autenticar al usuario
    console.log(formData);
  };

  return (
    <div className="login">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
}

export default Login;
