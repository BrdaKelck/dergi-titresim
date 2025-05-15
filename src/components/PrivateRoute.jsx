import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../firebase/firebase-config'; // auth'yi import etmeyi unutmayın

const PrivateRoute = ({ element: Component, ...rest }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user && user.emailVerified) {
        setUser(user);
      } else {
        setUser(null);
      } 
      setLoading(false);
    });
    console.log("user: ",user);
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div style={{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"rgb(37, 37, 37)",color:"white"}}>Yükleniyor...</div>; // Yüklenme durumu göstergesi
  }

  // `element` prop'u ile bileşeni döndür
  return user ? Component : <Navigate to="/giris" />;
};

export default PrivateRoute;