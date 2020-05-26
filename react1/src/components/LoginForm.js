import React, { useState } from 'react';
import '../styling/Login.css';

export const Login = () => {
    const [creds, setCreds] = useState({
        username: "",
        password: "",
    });
    const handleChanges = (e) => {
        setCreds({
            ...creds,
            [e.target.name]: e.target.value,
        });
    };
    return (
        <div className="logins">
            <form>
                <input
                    type="text"
                    placeholder="username"
                    name="username"
                    value={creds.username}
                    onChange={handleChanges}
                />
                <br />
                <br />
                <input
                    type="text"
                    placeholder="password"
                    name="password"
                    value={creds.password}
                    onChange={handleChanges}
                />
                <button>submit</button>
            </form>
        </div>
    );
};