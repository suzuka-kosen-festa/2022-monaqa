import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login } from './components/pages/Login'
import { Search } from './components/pages/Search'
import { QR } from './components/pages/QR'

const Routers = () => (
  <Router>
    <Routes>
      <Route path="/" element={<QR />} />
      <Route path="/login" element={<Login />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  </Router>
)
export default Routers
