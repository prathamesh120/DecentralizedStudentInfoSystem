import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Login } from './component/Login/Login';
import { Dashboard } from './pages/Dashboard';
import { Logout } from './component/nav/Logout';
import { Setting } from './component/nav/Setting';
import {NewUserForm} from './pages/NewUserForm';
import  CreateNewUser  from './pages/CreateNewUser';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      
      <Route index element={<App />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Dashboard' element={<Dashboard/>} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/settings" element={<Setting />} />
      <Route path='/newuserform' element={<NewUserForm/>} />
      <Route path='/CreateNewUser' element={<CreateNewUser/>}/>
      
      
      
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
