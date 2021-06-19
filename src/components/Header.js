import React from 'react'
import { Link } from 'react-router-dom'
import GoogleAuth from './GoogleAuth'
//436516741630-493mku2q69vtf7e6kfmb6kv00est7j74.apps.googleusercontent.com
function Header() {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                Streamy
            </Link>
            <div className="right menu">
                <Link to="/" className="item">
                    All Streams
                </Link>
                <GoogleAuth />
            </div>
        </div>
    )
}

export default Header
