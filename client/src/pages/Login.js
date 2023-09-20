import React, { useState } from "react";
import "../App.css";
import axios from 'axios';

function RegistrationForm() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Send data to the server for registration
        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                // Handle successful registration
            } else {
                // Handle registration error
            }
        } catch (error) {
            // Handle network error
        }
    };

    
    const [registerClicked, setRegisterClicked] = useState(true);

    const toggleButton = () => {
        setRegisterClicked(!registerClicked);
    };

    return (
        <>
            <div className='LoginRegisterContainer'>
                <div className='LoginRegister'>
                        {/* <h2>PEEEEEEE</h2> */}
                    <div className={`ButtonRegister ${registerClicked ? "" : "RegisterBtnActive"}`}>
                        <button
                            className={`btn btn-primary ${setRegisterClicked ? "" : "RegisterBtnActive"}`}
                            onClick={toggleButton}
                        >
                            {registerClicked ? "Register" : "Login"}
                        </button>
                    </div>
                    <div
                        className={`FormContainer ${registerClicked ? "" : "FormContainerShifted"}`}
                    >
                        {registerClicked ? (
                            <div className='LoginForm'>
                                <form>
                                    <h2 className='mb-4'>Login</h2>
                                    <div className='input-login mb-3'>
                                        <label for='UsernameLogin' className='form-label'>
                                            Masukkan Username
                                        </label>
                                        <input
                                            className='form-control'
                                            id=''
                                            name=''
                                            aria-label=''
                                            placeholder='Username'
                                        />
                                    </div>
                                    <div className='input-login mb-3'>
                                        <label for='PasswordLogin' className='form-label'>
                                            Masukkan Password
                                        </label>
                                        <input
                                            type='password'
                                            className='form-control'
                                            id=''
                                            name=''
                                            aria-label=''
                                            placeholder='Password'
                                        />
                                    </div>
                                    <submit className=''>
                                        <button className='btn btn-primary'>Login</button>
                                    </submit>
                                </form>
                            </div>
                        ) : (
                            <div className='RegisterForm'>
                                <form>
                                    <h2 className='mb-4'>Register</h2>
                                    <div className='mb-3'>
                                        <label for='' class='form-label'>
                                            Masukkan Username Baru
                                        </label>
                                        <input
                                            className='form-control'
                                            id=''
                                            aria-label=''
                                            placeholder='Username'
                                        />
                                    </div>
                                    <div className='mb-3'>
                                        <label for='' class='form-label'>
                                            Masukkan Email yang Valid
                                        </label>
                                        <input
                                            type='email'
                                            className='form-control'
                                            id=''
                                            aria-label=''
                                            placeholder='Email'
                                        />
                                    </div>
                                    <div className='mb-3'>
                                        <label for='' class='form-label'>
                                            Masukkan Password Baru
                                        </label>
                                        <input
                                            type='password'
                                            className='form-control'
                                            id=''
                                            aria-label=''
                                            placeholder='Password'
                                        />
                                    </div>
                                    <submit className=''>
                                        <button className='btn btn-primary'>Register</button>
                                    </submit>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegistrationForm;
