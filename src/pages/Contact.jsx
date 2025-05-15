import React, { useState } from 'react'
import '../css/Contact.css'
import { FaInstagram  } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";
import { CiYoutube } from "react-icons/ci";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Main() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div id='contact'>
      <div id='contact-container'>
        <div id='contact-social-media'>
          <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}><h2 style={{color:"white",marginBlock:"50px"}}>Bize Ulaş</h2></div>
          
          <div className='social-medias'>
            <a href='https://www.instagram.com/dergititresim/'><SiGmail color='white' style={{width:"30",height:"30px"}}/>
            dergititresim@gmail.com</a>
          </div> 
          <div className='social-medias'>
            <a href="https://www.instagram.com/dergititresim/"><FaInstagram color='white' style={{width:"30",height:"30px"}}/>
            İnstagram</a>
          </div>
          <div className='social-medias'>
            <a href='https://www.instagram.com/dergititresim/'><CiYoutube color='white' style={{width:"30",height:"30px"}}/>
            Youtube</a>
          </div>
        </div>
        <div id='contact-send-message'>
          <Form id="signin">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
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
