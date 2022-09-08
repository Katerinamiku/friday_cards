import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Error404 from "./components/error404/Error404";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import Login from "./components/Login/Login";
import NewPassword from "./components/ForgetPassword/NewPassword/NewPassword";
import Profile from "./components/Profile/Profile";
import Registration from "./components/Registration/Registration";
import Templates from "./components/Templates/Templates";
import Navbar from "./components/Navbar/Navbar";

function App() {
    return (
        <div className="App">
            <div>
                <Navbar/>
            </div>
            <div className={'contentContainer'}>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="profile" element={<Profile/>}/>
                    <Route path="registration" element={<Registration/>}/>
                    <Route path="reset" element={<ForgetPassword/>}/>
                    <Route path="reset/new" element={<NewPassword/>}/>
                    <Route path="templates" element={<Templates/>}/>
                    <Route path='*' element={<Error404/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
