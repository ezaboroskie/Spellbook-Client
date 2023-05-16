import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {applyMiddleware, compose, createStore} from 'redux'
import reducer from './store/reducer'
import {Provider} from 'react-redux'
import Register from './components/Register';
import Login from './components/Login'
import RollDice from './components/RollDice';
import RandomCard from './components/RandomCard';
import SearchCard from './components/SearchCards';
import Counter from './components/Counter';
import Logout from './components/Logout';
import Favorites from './components/Favorites';
import ProtectedRoute from './components/ProtectedRoute';
import 'bootstrap/dist/css/bootstrap.min.css'


const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const token = localStorage.getItem('jwt')
if(token){
  store.dispatch({type:'ON_LOGIN', payload:token})
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store ={store}>
    <BrowserRouter>
    <Routes>
      <Route path = "/login" element = {<Login/>}/>
      <Route path = "/" element = {<App/>}/>
      <Route path = "/register" element = {<Register/>}/>
      <Route path = "/rolldice" element = {<RollDice/>}/>
      <Route path = "/home" element ={<App/>}/>
      <Route path = "/randomcard" element ={<RandomCard/>}/>
      <Route path = "/searchcard" element ={<SearchCard/>}/>
      <Route path = "/counter" element ={<Counter/>}/>
      <Route path = "/logout" element ={<Logout/>}/>
      <Route path = "/favorites" element ={<ProtectedRoute><Favorites/></ProtectedRoute>}/>
    </Routes>
    </BrowserRouter>
    </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
