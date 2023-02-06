import logo from './logo.svg';
import './App.css';
import {Routes , Route } from 'react-router-dom'
import Nav from './components/Nav.js';
import Header from './components/Header';
import Login from './components/Login';
import AdminLogin from './components/AdminLogin';
import CompanyLogin from './components/CompanyLogin';
import AlumniLogin from './components/AlumniLogin';
import Register from './components/Register';
import Footer from './components/Footer';
import Home from './components/Home';
import CreateProfile from './components/CreateProfile';
function App() {
  return (
    <div>
       <Header/>
      <Routes>
          <Route path="/" element={<Nav/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
          <Route path="signup" element={<Register/>}/>
          <Route path="adminlogin" element={<AdminLogin/>}/>
          <Route path="alumnilogin" element={<AlumniLogin/>}/>
          <Route path="companylogin" element={<CompanyLogin/>}/>
          {/* <Route path="home" element={<Home/>}/> */}
      </Routes>
      <Footer/>

    </div> 
    );
}

{/* <div className="App">
<Header></Header>
<Nav></Nav>
<Login></Login>
<AdminLogin></AdminLogin>
<CompanyLogin></CompanyLogin>
<AlumniLogin></AlumniLogin>
<Register></Register>
<CreateProfile></CreateProfile>
</div> */}
export default App;
