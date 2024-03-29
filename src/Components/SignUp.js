import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp () {

    {/* Variables to hold state of login information */}
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState("none")

    {/* Saving date for account creation date record */}
    let curr_date = new Date().toDateString().slice(4)
    
    {/* Focusing name input on initial page load */}
    useEffect(() => {
        document.getElementById('nameInput').focus()
    },[])


    {/* Record input values in state variables */}
    const onUserChange = (e) => {
        setUsername(e.target.value)
    }
    const onPassChange = (e) => {
        setPassword(e.target.value)
    }
    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }


    const onSubmit = (e) => {
        e.preventDefault()

        {/* Regex of 'special characters' required for a strong password */}
        const required_chars = /[!@#$%&]/

        {/* Check if password is 'strong' (8 chars long and has 1 special char) */}
        if ((password.length >= 8) && required_chars.test(password)) {

            {/* Gets array of users from local storage, initializes to empty array if null */}
            let users_list = JSON.parse(localStorage.getItem('users'))
            if (users_list === null) {  
            users_list = [] 
            }   

            {/* Saves new user data as an object*/}
            let curr_user = {
                'username': username,
                'email': email,
                'password': password,
                'joinDate': curr_date,
                'posts': []
            }

            {/* Adds new user to user list and pushes to local storage */}
            users_list.push(curr_user)
            localStorage.setItem('users', JSON.stringify(users_list))

            {/* Gives confirmation and resets form */}
            setStatus("success")
            setUsername("")
            setEmail("")
            setPassword("")
            
        }
        else {
            setStatus("fail")
        }
    }


    return(
        <div className = {"content col-lg-12"}>
            <div className={"container-fluid"}>
                <div className={"row"}>

                    {/*Empty column for the left sidebar */}
                    <div className={"col-sm-1"}></div>

                    {/* This div contains all main content*/}
                    <div className={"col-sm-10 bg-light"} style={{minHeight:500}}>
                        <div style={{margin:70}}>
                            <div className={"form-group row mx-auto"} style={{width:400}}>
                                <div className={"card-header"}>
                                    <p className={"h1 text-center"}>Sign Up</p>
                                </div>
                                <form onSubmit={onSubmit}>
                                    <div>
                                        <label className={"col-sm-2 col-form-label h6"}>Name</label>
                                        <input
                                        id = 'nameInput' 
                                        className={"form-control"} 
                                        type="text"  
                                        placeholder = 'John Smith'
                                        value={username} 
                                        onChange={onUserChange} />
                                    </div>
                                    <div>
                                        <label className={"col-sm-2 col-form-label h6"}>Email</label>
                                        <input 
                                        className={"form-control"} 
                                        type="email" 
                                        placeholder = 'John@example.com' 
                                        value={email} 
                                        onChange={onEmailChange} />
                                    </div>
                                    <div>
                                        <label className={"col-sm-2 col-form-label h6"}>Password</label>
                                        <input 
                                        className={"form-control"} 
                                        type="password" 
                                        placeholder = 'Password'
                                        value={password} 
                                        onChange={onPassChange} />
                                    </div>
                                    <br/>

                                    {/* Conditionally displays sign up confirmation or invalid password error message */}
                                    {status === 'fail' &&  <div className = 'alert alert-danger'>Password does not meet requirements: <br></br>&nbsp;&nbsp;&nbsp;&nbsp;Must be 8 characters long<br></br>&nbsp;&nbsp;&nbsp;&nbsp;Must contain one of ! @ # $ % &</div>}
                                    {status === 'success' &&  <div className = 'alert alert-success'>Sign up successful</div>}

                                    <button className={"btn btn-primary"} style={{marginTop:20}} type="submit">Submit</button>
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

export default SignUp
