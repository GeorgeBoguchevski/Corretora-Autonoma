import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../components/home/Home'
import Contato from "../components/home/contato";

export default function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/contato" element={<Contato />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    )
}