import React, { useEffect, useState } from 'react'
import "../css/Main.css"
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase/firebase-config';
import LastIssue from "../components/LastIssue.jsx"

export default function Main() {
  const [issueList, setIssueList] = useState([]);
  const issuesCollectionRef = query(collection(db,"issues"), orderBy('index'));
  const [message, setMessage] = useState("Yükleniyor...");
  
  useEffect(()=>{
    const getIssueList = async () => {
      try{
        const data = await getDocs(issuesCollectionRef);
        const filteredData = data.docs.map((doc)=>({...doc.data(), id:doc.id}))
        if(filteredData){
          setIssueList(filteredData);
          console.log(filteredData)
        }else{
          console.log("Data boş!")
        }
        
        setMessage(null);
      } catch(err){
        console.log(err);
      }
    };
    getIssueList();
  },[])
  return (
    <div className='homepage' style={{color:"white", display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",rowGap:"100px"}}>
      <LastIssue/>
    </div>
  )
}
