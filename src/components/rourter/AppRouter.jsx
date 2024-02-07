import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/home/Home'
import Approval from '../../pages/approval/Approval'
import Notice from '../../pages/notice/Notice'
import Program from '../../pages/program/Program'

const AppRouter = () => {
  return (
  <Routes>
    <Route path="/" exact={true} element={<Home/>}></Route>
    <Route path="/approval" exact={true} element={<Approval/>}></Route>
    <Route path="/notice" exact={true} element={<Notice/>}></Route>
    <Route path="/program" exact={true} element={<Program/>}></Route>
  </Routes>
  )
}

export default AppRouter