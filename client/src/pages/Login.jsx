import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const styles = {
    containerStyle: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '5%',
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
        borderColor: '#3F5345',
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
        borderColor: '#3F5345',
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

export default function Login({ currentPage, handlePageChange, props }) {

        const [formState, setFormState] = useState({ email: '', password: '' });
        const [login, { error, data }] = useMutation(LOGIN_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
          const { data } = await login({
            variables: { ...formState },
          });
    
          Auth.login(data.login.token);
        } catch (e) {
          console.error(e);
        }
    
        // clear form values
        setFormState({
          email: '',
          password: '',
        });
      };

    const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormState({
          ...formState,
          [name]: value,
        });
      };

    return (
        <div style={styles.containerStyle}>
            <form style={styles.formStyle}>
                <div >
                    <h1 style={styles.h1Style}> Log in to your account </h1>
                </div>
                <div>
                    <input
                        style={styles.inputStyle}
                        value={formState.email}
                        placeholder="Email Address"
                        name="email"
                        type="text"
                        onChange={handleChange}
                        required={true}
                    >
                    </input>
                    <br></br>
                    <input
                        style={styles.inputStyle}
                        value={formState.password}
                        placeholder="Password"
                        name="password"
                        type="text"
                        onChange={handleChange}
                        required={true}
                    >
                    </input>
                    <button
                        style={styles.buttonStyle}
                        type="button"
                        onClick={handleFormSubmit}>
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