import React, { useEffect, useState } from 'react'
import "../css/Login.css"
import { Link, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { auth } from "../firebase/firebase-config"
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Login() {

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user && user.emailVerified) {
        navigate("/user");
      } 
    });
    return () => unsubscribe();
  }, []);

  const navigate = useNavigate();

  const [message, setMessage] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // E-posta doğrulama durumunu kontrol et
      if (!user.emailVerified) {
        alert('E-posta adresiniz doğrulanmamış. Lütfen doğrulama e-postasını kontrol edin.');
        await auth.signOut(); // Kullanıcıyı oturumdan çıkart
      }
    } catch (error) {
      if (error.code === 'auth/wrong-password') {
        setMessage('Yanlış şifre. Lütfen tekrar deneyin.');
      } else if (error.code === 'auth/user-not-found') {
        setMessage('Bu e-posta adresiyle kayıtlı bir kullanıcı bulunamadı.');
      } else if (error.code === 'auth/invalid-credential') {
        setMessage('Geçersiz e-posta veya şifre.');
      } else if (error.code === 'auth/network-request-failed') {
        setMessage('Ağ hatası. Lütfen internet bağlantınızı kontrol edin.');
      } else if (error.message.includes('400')) {
        setMessage('Geçersiz e-posta veya şifre.');
      } else {
        setMessage('Bir hata oluştu: ' + error.message);
      }
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div id="page-container">
      <div id='section'>
        <p style={{color:"white"}}>Hesabın yok mu ?</p>
        <Link style={{color:"white"}} to="/kayit-ol">Kayıt Ol</Link>
      </div>
      <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      <div id='login-form'> 
        <h2 style={{color:"white"}}>Giriş Yap</h2>
        {message && <div style={{color:"white",backgroundColor:"rgb(133, 48, 48)",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",paddingInline:"20px",paddingBlock:"5px",borderRadius:"3px"}}>{message}</div>  }
        <Form id="signin" onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{color:"white"}}>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{color:"white"}}>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form> 
      </div>
      </div>
    </div>
  )
}
