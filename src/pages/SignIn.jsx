import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../css/signIn.css"
import { auth } from "../firebase/firebase-config"
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function Login(props) {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  useEffect(()=>{
    if(props.check){
      navigate("/giris");
    }
  },[props.check,navigate])

  const signIn = async (e) => { 
    e.preventDefault();
    try{
      const userCredential = await createUserWithEmailAndPassword(auth,email,password);
      const user = userCredential.user;
      await sendEmailVerification(user);
      setMessage('Doğrulama e-postası gönderildi. Lütfen e-posta adresinizi kontrol edin.');
      setEmail("");
      setPassword("");
    }catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setMessage('Bu e-posta adresi zaten kullanımda. Lütfen başka bir e-posta adresi deneyin.');
      } else if(error.code === 'auth/weak-password') {
        setMessage('Şifreniz en az 6 karakter uzunluğunda olmalıdır.');
      }else {
       setMessage('Bir hata oluştu: ' + error.message);
     }
    }
  }

  return (
    <div id="signin-container">
      <div id='signin-section'>
        <h2 style={{color:"white"}}>Kayıt Ol</h2>
        {message && <div style={{color:"white",backgroundColor:"rgb(133, 48, 48)",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",paddingInline:"20px",paddingBlock:"5px",borderRadius:"3px"}}>{message}</div>}
        <Form id="signin" onSubmit={signIn}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{color:"white"}}>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{color:"white"}}>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form> 
      </div>
    </div>
  )
}
