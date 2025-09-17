import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router";
import { BASE_URL } from "../utils/constants";

const Login = () => {
    const [emailID, setEmailID] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [isLoginForm, setIsLoginForm] = useState(true);
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async () => {

        try {
            const res = await axios.post(BASE_URL + "/login", {
                emailID,
                password,
            }, {withCredentials: true}
        );
        dispatch(addUser(res.data));
        return navigate("/");
        } catch (err) {
            setError(err?.response?.data || "Something went wrong");
        }
    }

    const handleSignup = async () => {

        try {
            const res = await axios.post(BASE_URL + "/signup", {
                firstName,
                lastName,
                emailID,
                password,
                age,
            }, {withCredentials: true}
        );
        dispatch(addUser(res.data.data));
        return navigate("/profile");
        } catch (err) {
            setError(err?.response?.data || "Something went wrong");
        }
    }

    return (
        <div className="flex justify-center my-10">
            <div className="card bg-base-300 w-96 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title justify-center">{isLoginForm ? "Login" : "Signup"}</h2>
                    {!isLoginForm && (
                        <>
                            <div className="flex justify-center">
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend">Firstname</legend>
                                    <input type="text" className="input" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                </fieldset>
                            </div>
                            <div className="flex justify-center">
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend">Lastname</legend>
                                    <input type="text" className="input" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                </fieldset>
                            </div>
                            <div className="flex justify-center">
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend">Age</legend>
                                    <input type="text" className="input" value={age} onChange={(e) => setAge(e.target.value)} />
                                </fieldset>
                            </div>
                        </>
                    )}
                    <div className="flex justify-center">
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Email ID</legend>
                            <input type="text" className="input" value={emailID} onChange={(e) => setEmailID(e.target.value)} />
                        </fieldset>
                    </div>
                    <div className="flex justify-center">
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Password</legend>
                            <input type="text" className="input" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </fieldset>
                    </div>
                    <p className="text-red-500">{error}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary" onClick={isLoginForm ? handleLogin : handleSignup}>
                            {isLoginForm ? "Login" : "Signup"}
                        </button>
                    </div>
                    <p className="m-auto cursor-pointer py-2" onClick={() => setIsLoginForm((value) => !value)}>
                        {isLoginForm ? "New User? Signup here" : "Already have account? Login here"}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;