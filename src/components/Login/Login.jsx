import React, { useState } from 'react';
import axios from 'axios';

function Login(props) {
    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const sendData = {
            email: data.email,
            password: data.password
        };

        axios.post("http://localhost/login.php", sendData)
            .then((response) => {
                if (response.data.statut === 'valid') {
                    props.setPage(3);
                } else {
                    alert("Connexion échouée");
                }
            })
            .catch((error) => {
                console.error("Erreur:", error);
                alert("Une erreur s'est produite lors de la connexion.");
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="email"
                type="email"
                placeholder="Email"
                value={data.email}
                onChange={handleChange}
            />
            <input
                name="password"
                type="password"
                placeholder="Mot de passe"
                value={data.password}
                onChange={handleChange}
            />
            <button type="submit">Connexion</button>
        </form>
    );
}

export default Login;
