import React from "react"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LandingPage from "../pages/LandingPage/LandingPage"
import StatusPengajuan from "../pages/StatusPengajuan/StatusPengajuan"
import Pengajuan from "../pages/Pengajuan/Pengajuan"
import KonfirmasiPengajuan from "../pages/KonfirmasiPengajuan/KonfirmasiPengajuan"
import StudioMusik from "../pages/Jadwal/StudioMusik"
import StudioAnimasi from "../pages/Jadwal/StudioAnimasi"
import StudioTari from "../pages/Jadwal/StudioTari"
import CoWorkingSpace from "../pages/Jadwal/CoWorkingSpace"

const Router = () => {
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" Component={LandingPage}/>
            <Route path="/StatusPengajuan" Component={StatusPengajuan}/>
            <Route path="/Pengajuan" Component={Pengajuan}/>
            <Route path="/ConfirmationPage" Component={KonfirmasiPengajuan}/>
            <Route path="/StudioMusik" Component={StudioMusik}/>
            <Route path="/StudioAnimasi" Component={StudioAnimasi}/>
            <Route path="/StudioTari" Component={StudioTari}/>
            <Route path="/CoWorkingSpace" Component={CoWorkingSpace}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default Router