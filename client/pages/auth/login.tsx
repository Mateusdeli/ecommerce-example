import React, { useState } from 'react'
import styled from 'styled-components'
import authService from './services/auth.service'
import useLogin from './hooks/useLogin'

const Card = styled.div`
    max-width: 450px;
    min-height: 400px;

    background-color: #ffffff;
`

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { execute } = useLogin()

    const handleOnChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleOnChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const response = await execute(email, password)
        console.log(response);
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" value={email} onChange={handleOnChangeEmail} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" value={password} onChange={handleOnChangePassword} />
                </div>
                <button>Entrar</button>
            </form>
        </Card>
    )
}
