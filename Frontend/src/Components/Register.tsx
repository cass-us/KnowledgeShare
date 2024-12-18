import { useState } from "react";
import logo from "../assets/logo.png";

const Register = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [role, setRole] = useState(""); 
    const [status, setStatus] = useState("Active");  
    const [password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
       
        if (!email || !username || !role || !password || !ConfirmPassword) {
            setError("Please enter all fields");
            return;
        }
    
        if (password !== ConfirmPassword) {
            setError("Passwords do not match");
            return;
        }
    
        try {
            const response = await fetch("http://localhost:3001/api/v1/user/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    username,
                    role,
                    status,
                    password,
                }),
            });
    
            const data = await response.json();
    
            if (response.ok) {
                setSuccess("User registered successfully!");
                setError(""); 
                setEmail("");
                setUsername("");
                setRole("");
                setPassword("");
                setConfirmPassword("");
            } else {
                setError(data.message || "Error occurred during registration.");
            }
        } catch (err) {
            setError("Error occurred while creating user");
        }
    };
    

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
                <div className="flex justify-center">
                    <img src={logo} className="h-32" alt="Logo" />
                </div>
                {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
                {success && <div className="text-green-500 text-sm mb-4">{success}</div>}

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <select
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        >
                            <option value="">Select Role</option>
                            <option value="student">Expert</option>
                            <option value="teacher">Admin</option>
                        </select>
                    </div>

                    <div className="mb-6">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={ConfirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Sign up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
