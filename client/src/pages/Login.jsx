import React, { useState } from 'react';

const styles = {
    containerStyle: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '10%',
        lineHeight: '1.1',
    },
    formStyle: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '400px',
        padding: '10px',
        border: 'solid',
        borderColor: 'black',
        borderRadius: '10px',
    },
    h1Style: {
        fontSize: '34px',
    },
    inputStyle: {
        display: 'flex',
        flexDirection: 'column',
        width: '88%',
        padding: '10px',
        marginTop: '10px',
        fontSize: '14px',
        borderRadius: '8px',
    },
    buttonStyle: {
        backgroundColor: '#67A97B',
        height: '40px',
        width: '100%',
        fontSize: '18px',
        borderRadius: '20px',
        cursor: 'pointer',
        marginBottom: '20px',
        marginTop: '20px',
    }
};

export default function Login({ currentPage, handlePageChange }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmail('');
        setPassword('');
        return alert('Form Submitted');
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'email') return setEmail(value);
        if (name === 'password') return setPassword(value);
    }


    return (
        <div style={styles.containerStyle}>
            <form style={styles.formStyle}>
                <div >
                    <h1 style={styles.h1Style}> Log in to your account </h1>
                </div>
                <div>
                    <input
                        style={styles.inputStyle}
                        value={email}
                        placeholder="Email Address"
                        name="email"
                        type="text"
                        onChange={handleChange}
                        required="true"
                    >
                    </input>
                    <br></br>
                    <input
                        style={styles.inputStyle}
                        value={password}
                        placeholder="Password"
                        name="password"
                        type="text"
                        onChange={handleChange}
                        required="true"
                    >
                    </input>
                    <button
                        style={styles.buttonStyle}
                        type="button"
                        onClick={handleSubmit}>
                        Log In
                    </button>
                    <div>
                        <p>
                            Don't have an account? 
                            <a href="#signup" onClick={() => handlePageChange('SignUp')}
                                className={currentPage === 'SignUp' ? 'link active' : 'link'}
                            >
                                Sign up
                            </a>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    )
};