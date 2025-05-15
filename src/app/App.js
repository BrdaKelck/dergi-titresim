import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, Button, Dropdown } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Main from "../pages/Main";
import Issues from "../pages/Issues";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Cerez from "../pages/hakkimizda/Cerez.jsx";
import Gizlilik from "../pages/hakkimizda/Gizlilik";
import SignIn from "../pages/SignIn.jsx"
import Commnents from "../pages/Comments.jsx"
import User from "../pages/User.jsx"
import logo from "../assets/logo.png"
import { auth } from '../firebase/firebase-config.js';
import Logout from '../components/LogOut.jsx';
import NotFound from '../pages/NotFound.jsx';
import PrivateRoute from '../components/PrivateRoute.jsx';
import { useDispatch } from 'react-redux';
import { addUid } from "../redux/actions/actions"
import "./../css/theme.css"

const App = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if(user && user.emailVerified){
        setUser(user);
        dispatch(addUid(user.uid));
      }else{
        setUser("");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <Router>
        <Navbar bg="white" variant="white" expand="lg">
          <div id="navbar" style={{margin:0,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",minHeight:"25vh",minWidth:"100%",gap:"10px"}}>
            <div id="navbar-logo" style={{minHeight:"100px",width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
              <img src={logo} style={{ width:"60%",height:"29.5%",maxWidth:"600px",maxHeight:"177px" }} className="d-inline-block align-top" alt="logo"/>
            </div>
            <div id="navbar-links" style={{paddingInline:"100px",paddingBlock:"10px"}}>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/" >Ana Sayfa</Nav.Link>
                  <Nav.Link href="/sayilar">Sayılar</Nav.Link>
                  <Nav.Link href="/sizden-gelenler">Yorumlar</Nav.Link>
                  <Dropdown>
                    <Dropdown.Toggle variant="outline-dark" id="dropdown-basic" style={{border: "none"}}>
                      Hakkımızda
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href='/cerez-politikasi'>Çerez Politikası</Dropdown.Item>
                      <Dropdown.Item href='/gizlilik-politikasi'>Gizlilik Politikası</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Nav.Link href="/iletisim">İletişim</Nav.Link>
                </Nav>
                <Nav className="ms-auto">
                {user ? (
                <Dropdown>
                  <Dropdown.Toggle variant="outline-dark" id="dropdown-basic" style={{border: "none"}}>
                    Ayarlar
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="/user">Hesabım</Dropdown.Item>
                    <Dropdown.Item ><Logout/></Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <Nav.Link href='/giris'>
                  <Button variant="outline-dark">
                    Giriş
                  </Button>
                </Nav.Link>
              )}
            </Nav>
              </Navbar.Collapse>
            </div>
          </div>
        </Navbar>
        
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/sayilar" element={<Issues />} />
          <Route path='/cerez-politikasi' element={<Cerez/>}/>
          <Route path='/gizlilik-politikasi' element={<Gizlilik/>}/>
          <Route path="/iletisim" element={<Contact />} />
          <Route path="/giris" element={<Login />}/>
          <Route path="/user" element={<PrivateRoute element={<User />} />} />
          <Route path='/kayit-ol' element={<SignIn check={user && "logged-in"}/>}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path='/sizden-gelenler' element={<Commnents/>}/>
        </Routes>

        <div style={{display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"black",height:"200px",justifyContent:"center"}}>
         <div style={{display:"flex",flexDirection:"column",justifyContent:"center",width:"70%"}}>
            <div className='informations'>
                <h2 style={{color: "white"}}>Biz Kimiz?</h2>
                <p>Dergi Titreşim, bir grup öğrenci tarafından kurulmuş bir sosyal projedir.{"\n"}Sizler de aramıza katılmak için @dergititresim Instagram adresi üzerinden bize mesaj atabilirsiniz.</p>
            </div>
         </div>
      </div>
    </Router>
  );
};

export default App;
