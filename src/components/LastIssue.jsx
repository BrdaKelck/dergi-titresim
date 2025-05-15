import React, { useEffect, useState, useRef } from 'react';
import "../css/Issues.css";
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../firebase/firebase-config';
import { Link } from 'react-router-dom';

export default function Main() {
  const [message, setMessage] = useState("Yükleniyor...");
  const [lastIssue, setLastIssue] = useState("");

  const issuesCollectionRef = query(collection(db, "issues"), orderBy('index','desc'), limit(1));

  useEffect(() => {
    const getIssueList = async () => {
      try {
        const data = await getDocs(issuesCollectionRef);
        const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setLastIssue(filteredData[0]);
        setMessage(null);
      } catch (err) {
        console.log(err);
        setMessage("Veriler yüklenemedi");
      }
    };
    getIssueList();
  }, []);

  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      {message && <p>{message}</p>}
      {lastIssue && 
      <div style={{display:"flex",margin:"50px",flexDirection:"column",flexDirection:"column",rowGap:"30px"}}>
        <h1 style={{color:"var(--issue-header)"}}>{lastIssue.header} Sayımız Yayında</h1>
        <div style={{display:"flex",flexDirection:"column",rowGap:"5px"}}>
          <Link target='_blank' style={{display:"flex",height:"40px",flexDirection:"column",justifyContent:"center",alignItems:"center", textDecoration:"none",backgroundColor:"white"}} to={lastIssue.pdf}>Pdf Olarak Oku</Link>
          <Link target='_blank' style={{display:"flex",height:"40px",flexDirection:"column",justifyContent:"center",alignItems:"center", textDecoration:"none",backgroundColor:"white"}} to={lastIssue.magazine}>Dergi Formatında Oku</Link>
        </div>
      </div>
      }
      {lastIssue && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div>
            <img src={lastIssue.url} alt={lastIssue.header} style={{ width: '300px', height: 'auto' }} />
          </div>
        </div>
      )}
  </div>
  );
}
