import React, { useEffect } from 'react';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';



function SignIn ({onSignIn}) {

    //constants 
    const[email, setEmail] = useState(""); // email setter
    const[password, setPassword] = useState(""); //password setter
    const [error, setError] = useState("") // error message success or fail
    const navigate = useNavigate()

    // gets list of users from local storage for checking
    let user_list = JSON.parse(localStorage.getItem('users'))
    if (user_list === null) {
    user_list = []  
    }

    //focuses first input on first render
    useEffect(() => {
        document.getElementById('emailInput').focus()
    },[]);
    

    // on form submission
    const handleSubmit = event => {
        event.preventDefault();
        setError("")
        
        let curr_user_index = -1
        let valid_user = false
        // finds matching email input
        for (var i = 0; i < user_list.length; i++) {
            if (user_list[i]['email'] === email) {
                curr_user_index = i
                valid_user = true 
                break
            }
        }
        //validates matching email input with respective passwords and password input
        if ((valid_user) && password === user_list[curr_user_index]['password']) {
            onSignIn(email); // see app.js
            navigate('/profile', {replace: true});
        } else{
            setError('Login failed! Email or password do not match'); // error = fail
        }
        
    };
    
    
    return (
        <div className = {"content col-lg-12"}>
            <div className={"container-fluid"}>
                <div className={"row"}>

                    {/*Empty column for the left sidebar */}
                    <div className={"col-sm-1"}></div>

                    {/* This div contains all main content*/}
                    <div className={"col-sm-10 bg-light"} style={{minHeight:500}}>
                        <div style = {{margin:70}}>
                            <div className = {"form-group row mx-auto"} style = {{width:400}}>
                                
                                <div className = {'card-header'}>
                                    <p className = {'h1 text-center'}>Sign In</p>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label className = {'col-sm2 col-form-label h6'}>Email</label>
                                        <input className = {'form-control'}
                                        id = 'emailInput'
                                        type = 'email'
                                        name = 'email'
                                        placeholder='John@example.com'
                                        value = {email}
                                        onChange = {event => {setEmail(event.target.value)}}
                                        required
                                        />
                                    </div>
                                    <div>
                                        <label className= {'col-sm2 col-form-label h6'}>Password</label>
                                        <input className= {'form-control'}
                                        type = 'password'
                                        name = 'password'
                                        placeholder = 'Password'
                                        value = {password}
                                        onChange = {event => {setPassword(event.target.value)}}
                                        required
                                        />
                                    </div>
                                    <br/>
                                    {/*true of false for error display */}
                                    {error !== "" &&  <div className = 'alert alert-danger'>{error}</div>}
                                    <button className = {'btn btn-primary'} style = {{'margin-top':20}} type = 'submit'>Submit</button>

                                </form>
                            </div>
                        </div>
                    </div>

                {/*Empty column for the right sidebar */}
                <div className={"col-sm-1"}></div>
            </div>
        </div>
    </div>
    );
}

export default SignIn
