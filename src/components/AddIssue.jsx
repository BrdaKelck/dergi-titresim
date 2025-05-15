import React, { useState } from 'react'
import "../css/User.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addDoc, collection, serverTimestamp, } from 'firebase/firestore';
import { db } from '../firebase/firebase-config';

export default function Page() {

  const [header, setHeader] = useState("");
  const [image_url, setImage_url] = useState("");
  const [index, setIndex] = useState("");
  const issuesCollectionRef = collection(db,"issues");
  const [message, setMessage] = useState("");
  const [pdfLink, setPdfLink] = useState("");
  const [magazineLink, setMagazineLink] = useState("");
  
  const submitNewIssue = async (event) => {
    event.preventDefault();
    try{
      await addDoc(issuesCollectionRef,{header: header,index: index, url:image_url, pdf:pdfLink, magazine:magazineLink, timeStamp: serverTimestamp()});
    }catch(e) {
      console.log(e);
    }
    setHeader("");
    setIndex("");
    setImage_url("");
    setPdfLink("");
    setMagazineLink("");
  }

  
  return (
    <Form id='new-issue-form' onSubmit={submitNewIssue}>
      <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",margin:"40px"}}>
        {message}
      </div>
      <Form.Group className="mb-3" >
        <Form.Label style={{color:"white"}}>Başlık</Form.Label>
        <Form.Control value={header} onChange={(e) => setHeader(e.target.value)} type="text" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label style={{color:"white"}}>Kaçıncı Sayı</Form.Label>
        <Form.Control value={index} onChange={(e) => setIndex(e.target.value)}  type="text"  />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label style={{color:"white"}}>Derginin Resminin Url'si</Form.Label>
        <Form.Control value={image_url} onChange={(e) => setImage_url(e.target.value)}  type="text"  />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label style={{color:"white"}}>Pdf Formatı Linki</Form.Label>
        <Form.Control value={pdfLink} onChange={(e) => setPdfLink(e.target.value)}  type="text"  />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label style={{color:"white"}}>Dergi Formatı Linki</Form.Label>
        <Form.Control value={magazineLink} onChange={(e) => setMagazineLink(e.target.value)}  type="text"  />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form> 
  )
}
