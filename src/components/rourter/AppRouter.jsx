import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/home/Home'
import Approval from '../../pages/approval/Approval'
import Notice from '../../pages/notice/Notice'
import Emplist from '../../pages/emplist/Emplist'
import Member from '../../pages/member/Member'
import Admin from '../../pages/admin/Admin'
import Program from '../../pages/program/Program'
import Mypage from '../../pages/mypage/Mypage'
import Message from '../../pages/message/Message'
import ErrorPage from '../../pages/error/ErrorPage'

const AppRouter = () => {
  return (
  <Routes>
    <Route path="/home" exact={true} element={<Home/>}></Route>
    <Route path="/approval" exact={true} element={<Approval/>}></Route>
    <Route path="/emplist" exact={true} element={<Emplist/>}></Route>
    <Route path="/member" exact={true} element={<Member/>}></Route>
    <Route path="/program" exact={true} element={<Program/>}></Route>
    <Route path="/notice" exact={true} element={<Notice/>}></Route>
    <Route path="/admin" exact={true} element={<Admin/>}></Route>
    <Route path="/mypage" exact={true} element={<Mypage/>}></Route>
    <Route path="/message" exact={true} element={<Message/>}></Route>
    <Route path="/error" exact={true} element={<ErrorPage/>}></Route>
  </Routes>
  )
}

export default AppRouter
