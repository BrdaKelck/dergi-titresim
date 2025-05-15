import React, { useEffect, useState } from "react";
import Admin from "../components/Admin";
import { useSelector } from "react-redux";
import Client from "../components/Client";

export default function User () {
  const uid = useSelector((state) => state.addUid.uid);
  const [isAdmin, setIsAdmin] = useState(false);
  const adminUid1 = "admin-uid";

  useEffect(()=>{
    if(uid===adminUid1){setIsAdmin(true);}
  },[uid])
  return (isAdmin ? <Admin/> : <Client/>)
}
