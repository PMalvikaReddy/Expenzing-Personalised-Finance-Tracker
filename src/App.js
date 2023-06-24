import React from 'react'

import Navbar from './components/Navbar/Navbar'
import Expense from './components/Expense/Expense';
import Main from './components/Main/Main';
import Blogs from './components/Blogs/Blogs'
import Contact from './components/Contact/Contact';
import About from './components/About/About';

import{
  BrowserRouter as Router,
 Routes,
  Route,

} from "react-router-dom";



const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route exact path='/' element={<Main/>}></Route>
      <Route path='/Main' element={<Main/>}></Route>
      <Route path='/Blogs' element={<Blogs/>}></Route>
      <Route path='/Expense' element={<Expense/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      </Routes>
    </Router>

  )
}

export default App

