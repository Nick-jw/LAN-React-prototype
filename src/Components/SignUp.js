import React, {useState} from 'react';

function SignUp () {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

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
        const password_str = new String(password)

        const required_chars = /[!@#$%&]/
        if ((password.length >= 8) && required_chars.test(password)) {

            let users_list = JSON.parse(localStorage.getItem('users'))

            if (users_list === null) {  
            users_list = [] 
            }   

            let curr_user = {
                'username': username,
                'email': email,
                'password': password,
                'posts': []
            }

            users_list.push(curr_user)
            localStorage.setItem('users', JSON.stringify(users_list))
            alert("Form Submitted")
        }
        else {
            alert("Password does not meet requirements\nMust be at least 8 characters long\nMust contain one of ' ! @ # $ % & '")
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
                                        <input className={"form-control"} type="text"  placeholder = 'John Smith'value={username} onChange={onUserChange} />
                                    </div>
                                    <div>
                                        <label className={"col-sm-2 col-form-label h6"} for={"staticEmail"}>Email</label>
                                        <input className={"form-control"} type="email" placeholder = 'john@example.com' value={email} onChange={onEmailChange} />
                                    </div>
                                    <div>
                                        <label className={"col-sm-2 col-form-label h6"}>Password</label>
                                        <input className={"form-control"} type="password" placeholder = 'password'value={password} onChange={onPassChange} />
                                    </div>
                                    <button className={"btn btn-primary"} style={{"margin-top":20}} type="submit">Submit</button>
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