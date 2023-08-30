import { useNavigate } from 'react-router-dom'
import './Styles/Login.scss'
import { useEffect, useState } from 'react'

const Login = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState<string>('')
    const [emailErrors, setEmailErrors] = useState<string[]>([])

    useEffect(() => {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const errors: string[] = []

        if (!regex.test(email)) errors.push('Please enter a valid email')

        setEmailErrors(errors)
    }, [email])

    const [password, setPassword] = useState<string>('')
    const [passwordErrors, setPasswordErrors] = useState<string[]>([])

    useEffect(() => {
        const minimum = 8
        const maximum = 16
        const errors: string[] = []

        const trimmed = password.trim()

        if (trimmed.length < minimum) errors.push(`Password must have at least ${minimum} character`)
        else if (trimmed.length > maximum) errors.push(`Password cannot exceed ${maximum} characters`)

        setPasswordErrors(errors)
    }, [password])

    function login() {
        navigate('/appointments')
    }

    function canSubmit(): boolean {
        return emailErrors.length === 0 && passwordErrors.length === 0
    }

    return (
        <div className="container">
            <form>
                <div style={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
                    <label htmlFor="email">Email address</label>
                    <input type="email" value={email} onChange={event => setEmail(event.target.value)} placeholder="name@example.com"/>
                    {emailErrors.length > 0 ? <small style={{color: "red"}}>{emailErrors[0]}</small> : <></>}
                </div>

                <div style={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
                    <label htmlFor="email">Password</label>
                    <input type="password" value={password} onChange={event => setPassword(event.target.value)} placeholder="Enter a password..."/>
                    {passwordErrors.length > 0 ? <small style={{color: "red"}}>{passwordErrors[0]}</small> : <></>}
                </div>

                <button type="submit" onClick={login} disabled={!canSubmit()}>Login</button>
            </form>
        </div>
    )
}

export default Login