import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login';
import Appointments from './Pages/Appointments'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/appointments" element={<Appointments/>}/>
        </Routes>
    </BrowserRouter>
)