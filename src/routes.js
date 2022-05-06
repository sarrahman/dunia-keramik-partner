import { BrowserRouter, Routes, Route } from "react-router-dom";
import DaftarMitra from "./pages/daftarMitra";
import Home from "./pages/home";

export default function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/daftar/mitra" element={<DaftarMitra />} />
            </Routes>
        </BrowserRouter>
    )
}