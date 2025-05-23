import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../../.././scripts/Supabase.ts";
import SHA256 from "crypto-js/sha256";
import { useUser } from "../../../contesto/UserContext";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { login, logout } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Sleep Monitor - Login";

        const storedUser = localStorage.getItem("user");
        const parsedUser = storedUser ? JSON.parse(storedUser) : null;

        if (parsedUser) {
            login(parsedUser);
        }
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (email && password) {
            const fetchData = async () => {
                try {
                    const { data, error } = await supabase
                        .from("Utenti")
                        .select("*")
                        .eq("Email", email)
                        .eq("pwd", SHA256(password).toString());

                    if (error) {
                        logout();
                        return;
                    }

                    if (data && data.length === 1) {
                        const user = data[0];
                        login({
                            id: user.id,
                            email: email,
                            pwd: user.pwd,
                            Nome: user.Nome,
                            Cognome: user.Cognome,
                            dataNascita: user.dataNascita,
                            Sesso: user.Sesso,
                        });
                    } else {
                        alert("Controlla meglio user e password");
                        logout();
                    }
                } catch {
                    alert("Si è verificato un errore durante il login.");
                    logout();
                }
            };
            fetchData().then();
        } else {
            alert("Si è verificato un errore durante il login.");
            logout();
        }
    };

    return (
        <div style={{ minHeight: "100vh" }}>
            <div
                className="container-lg position-absolute top-50 start-50 translate-middle"
                style={{ maxWidth: "600px", width: "100%", margin: "auto" }}
            >
                <h1 className="m-4 text-center">
                    <img
                        src="/icon/moon.png"
                        alt="Logo"
                        width="48"
                        height="48"
                        className="d-inline-block align-text-top mx-2"
                    />
                    Sleep Monitor
                </h1>
                <div className="card rounded-4 p-4">
                    <h2 className="text-center">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="inputEmail1" className="form-label">
                                Indirizzo email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="inputEmail1"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <div id="emailHelp" className="form-text">
                                Se hai dimenticato la tua email, contatta un
                                amministratore.
                            </div>
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="inputPassword"
                                className="form-label"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="inputPassword"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="d-grid gap-2 mx-auto">
                            <button
                                type="submit"
                                className="btn btn-primary"
                                style={{ transition: "all 0.2s ease" }}
                                onMouseDown={(e) => {
                                    e.currentTarget.style.boxShadow =
                                        "0 4px 8px rgba(0, 0, 0, 0.3)";
                                    e.currentTarget.style.transform =
                                        "scale(0.95)";
                                }}
                                onMouseUp={(e) => {
                                    e.currentTarget.style.boxShadow = "none";
                                    e.currentTarget.style.transform =
                                        "scale(1)";
                                }}
                                onTouchStart={(e) => {
                                    e.currentTarget.style.boxShadow =
                                        "0 4px 8px rgba(0, 0, 0, 0.3)";
                                    e.currentTarget.style.transform =
                                        "scale(0.95)";
                                }}
                                onTouchEnd={(e) => {
                                    e.currentTarget.style.boxShadow = "none";
                                    e.currentTarget.style.transform =
                                        "scale(1)";
                                }}
                            >
                                Login
                            </button>
                        </div>
                    </form>
                    <button
                        className="btn mt-1 btn-outline-primary"
                        onClick={() => {
                            navigate("/registrazione");
                        }}
                        style={{ transition: "all 0.2s ease" }}
                        onMouseDown={(e) => {
                            e.currentTarget.style.boxShadow =
                                "0 4px 8px rgba(0, 0, 0, 0.3)";
                            e.currentTarget.style.transform = "scale(0.95)";
                        }}
                        onMouseUp={(e) => {
                            e.currentTarget.style.boxShadow = "none";
                            e.currentTarget.style.transform = "scale(1)";
                        }}
                        onTouchStart={(e) => {
                            e.currentTarget.style.boxShadow =
                                "0 4px 8px rgba(0, 0, 0, 0.3)";
                            e.currentTarget.style.transform = "scale(0.95)";
                        }}
                        onTouchEnd={(e) => {
                            e.currentTarget.style.boxShadow = "none";
                            e.currentTarget.style.transform = "scale(1)";
                        }}
                    >
                        Registrati
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;
