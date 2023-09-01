import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login';
import Account from './Pages/Account'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/account" element={<Account/>}/>
        </Routes>
    </BrowserRouter>
)