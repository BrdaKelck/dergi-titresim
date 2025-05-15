import React, { useState } from 'react'
import AddIssue from "../components/AddIssue"
import "../css/User.css"

export default function () {

  const [ni, setNi] = useState(true);

  return (
    <div id='user-container'>
      <div id='user-section'>
        <div id='user-options'>
          <button onClick={() =>{setNi(true);}} id='new-issue' style={{borderRadius:"10px"}}>Yeni Sayı Ekle</button>
        </div>
        <div id='option-section'>
        {ni && <AddIssue/>}
        </div>
      </div>
    </div>
  )
}
