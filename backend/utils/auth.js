const jwt = require('jsonwebtoken');

const auth = (value) => {
  try {
    const decoded = jwt.verify(value, 'SUPER_HYPER_MEGA_PALABRA_SECRETA'); 
    return decoded.usuario;
  } catch (error) {
    throw new Error('Token inválido o expirado');
  }
};

module.exports = { auth };
