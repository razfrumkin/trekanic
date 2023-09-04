import './Styles/Login.scss'
import { useState } from 'react'
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

const Login = (props: { setPage: React.Dispatch<React.SetStateAction<Page>> }) => {
    const [username, setUsername] = useState<string>('tal')
    const [password, setPassword] = useState<string>('123456')
    const [showPassword, setShowPassword] = useState<boolean>(false)

    function login() {
        const data = { username: username.trim(), password: password.trim() }

        axiosInstance.post('https://10.0.0.14:3000/login', data).then(response => {
            console.log(response)
            //document.cookie = response.headers['set-cookie']![0]
            props.setPage(Page.Account)
        }).catch(error => {
            console.error(error)
        })
    }

    return (
        <div className="container">
            <form>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <label htmlFor="text">Username</label>
                    <input type="username" value={username} onChange={event => setUsername(event.target.value)} placeholder="Enter a username..."/>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <label htmlFor="email">Password</label>
                    <input type={showPassword ? 'text': 'password'} value={password} onChange={event => setPassword(event.target.value)} placeholder="Enter a password..."/>
                    <label><input type="checkbox" checked={showPassword} onChange={() => setShowPassword(!showPassword)}/> Show password</label>
                </div>

                <button type="button" onClick={login}>Login</button>
            </form>
        </div>
    )
}

export default Login