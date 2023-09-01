import './Styles/Account.scss'
import { useNavigate } from 'react-router-dom'
import AppointmentManager from './AppointmentManager'
import axios from 'axios'

const axiosInstance = axios.create({
    withCredentials: true
})
axiosInstance.defaults.baseURL = "http://127.0.0.1"

const Account = () => {
    const navigate = useNavigate()

    function logout() {
        const headers = {
            'Content-Type': 'application/json',
            cookie: document.cookie
        }
    
        const config = {
            withCredentials: true,
            headers: headers,
        }

        axiosInstance.post('http://10.0.0.14:3000/logout', {}, config).then(response => {
            console.log(response)
            navigate('/login')
        }).catch(error => {
            console.error(error)
        })
    }

    return (
        <div className="account-container">
            <h1>Account</h1>
            <button onClick={logout}>Logout</button>
            <AppointmentManager style={{ width: '50%' }}/>
        </div>
    )
}

export default Account