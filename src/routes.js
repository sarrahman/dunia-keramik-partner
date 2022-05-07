import { BrowserRouter, Routes, Route } from "react-router-dom";
import DaftarMitra from "./pages/daftarMitra";
import Home from "./pages/home";
import NotFound from "./pages/notfound";
import SuccessPage from "./pages/successPage";

export default function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/daftar/mitra" element={<DaftarMitra />} />
                <Route path="/success" element={<SuccessPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}