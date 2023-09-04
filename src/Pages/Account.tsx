import './Styles/Account.scss'
import AppointmentManager from '../Components/AppointmentManager'
import axios from 'axios'
import { Page } from '../Router'

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://10.0.0.14', 
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'https://10.0.0.14:3000/', 
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE', 
        'Access-Control-Allow-Credentials': true
    }
})

const Account = (props: { setPage: React.Dispatch<React.SetStateAction<Page>> }) => {
    function logout() {
        axiosInstance.post('https://10.0.0.14:3000/logout').then(response => {
            console.log(response)
            props.setPage(Page.Login)
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