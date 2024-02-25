import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Navigate } from 'react-router-dom'

export default function SignOut() {
    const { signout } = useAuth()

    signout()
    return <Navigate to={"/"}></Navigate>
}
