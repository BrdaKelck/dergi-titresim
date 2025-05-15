import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase-config';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/'); // Kullanıcıyı giriş sayfasına yönlendirin
    } catch (error) {
      console.error('Çıkış yapma hatası:', error.message);
    }
  };

  return (
    <button onClick={handleLogout}>
      Çıkış Yap
    </button>
  );
};

export default Logout;