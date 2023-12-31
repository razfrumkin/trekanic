import './Styles/Login.scss'
import { useState } from 'react'
import Page from '../Models/Page'
import { tryLogin } from '../Service'

const Login = (props: { setPage: React.Dispatch<React.SetStateAction<Page>> }) => {
    const [username, setUsername] = useState<string>('tal')
    const [password, setPassword] = useState<string>('123456')
    const [showPassword, setShowPassword] = useState<boolean>(false)

    function login() {
        tryLogin(username.trim(), password.trim()).then(() => {
            props.setPage(Page.Account)
        }).catch(error => {
            console.error(error)
        })
    }

    return (
        <div className="container">
            <form>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <label htmlFor="username">Username</label>
                    <input type="username" id="username" value={username} onChange={event => setUsername(event.target.value)} placeholder="Enter a username..."/>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                        <label htmlFor="password">Password</label>
                        <input type={showPassword ? 'text': 'password'} id="password" value={password} onChange={event => setPassword(event.target.value)} placeholder="Enter a password..."/>
                    </div>
                    <label className="show-password"><input type="checkbox" checked={showPassword} onChange={() => setShowPassword(!showPassword)}/> Show password</label>
                </div>

                <button className="login-button" type="button" onClick={login}>LOGIN</button>
            </form>
        </div>
    )
}

export default Login