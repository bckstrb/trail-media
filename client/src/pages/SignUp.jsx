import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_PROFILE } from '../utils/mutations';
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
        width: '400px',
        padding: '10px',
        border: 'solid',
        borderColor: '#3F5345',
        borderRadius: '10px',
    },
    h1Style: {
        fontSize: '34px',
        margin: '10px',
        padding: '10px'
    },
    inputStyle: {
        display: 'flex',
        flexDirection: 'column',
        width: '88%',
        padding: '10px',
        marginTop: '10px',
        fontSize: '14px',
        borderColor: '#3F5345',
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


export default function SignUp({ currentPage, handlePageChange }) {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        password: '',
      });
      const [addProfile, data ] = useMutation(ADD_PROFILE);
  

    
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
    
        try {
          const { data } = await addProfile({
            variables: { ...formState },
          });
    
          Auth.login(data.addProfile.token);
        } catch (e) {
          console.error(e);
        }
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
            <form onSubmit={handleFormSubmit} style={styles.formStyle}>
                <div >
                    <h1 style={styles.h1Style}> Create your account </h1>
                </div>
                <div>
                
                    <input
                        style={styles.inputStyle}
                        value={formState.name}
                        placeholder="Name"
                        name="name"
                        type="text"
                        onChange={handleChange}
                        required={true}
                    >
                    </input>
                    <br></br>
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
                        type="submit"
                        onClick={handleFormSubmit}
                        >
                        Sign Up
                    </button>
                    <div>
                        <p>
                            Already have an account?
                            <a href="#login" onClick={() => handlePageChange('Login')}
                                className={currentPage === 'Login' ? 'link active' : 'link'}
                            >
                                Log in
                            </a>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    )
};