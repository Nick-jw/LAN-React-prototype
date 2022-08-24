import {React,useState} from 'react'
import {useNavigate} from 'react-router-dom'


function Update () {
    const navigate = useNavigate()
    //getting user list
    let user_list = JSON.parse(localStorage.getItem('users'))
    let curr_email = JSON.parse(localStorage.getItem('loggedInUser'))
    let curr_user_index = 0

     //getting current name, email password
    
     for (var i = 0; i < user_list.length; i++) {
        if (user_list[i]['email'] === JSON.parse(localStorage.getItem('loggedInuser'))) {
            curr_user_index = i
            break
        }
     }

    let curr_username = user_list[curr_user_index]['username']
    let curr_password = user_list[curr_user_index]['password']



    const [username, setUsername] = useState(curr_username);
    const [email, setEmail] = useState(curr_email);
    const [password, setPassword] = useState(curr_password);
    const [status, setStatus] = useState();

    const onSubmit = (e) => {

    }
    return (
        <div className = 'content col-lg-12'>
            <div className = 'container-fluid'>
                <div className = 'row'>
                    {/*leftside bar */}
                    <div className = 'col-sm-1'></div>

                    <div className = 'col-sm-10 bg-light' style = {{minHeight:500}}>
                        <div style={{margin:70}}>
                            <div className = 'form-group row mx-auto' style = {{width:400}}>
                                <div className = 'card-header'>
                                    <p className = 'h1 text-center'>Edit Profile</p>
                                </div>
                                <form onSubmit = {onSubmit}>
                                    <div>
                                        <label className = 'col-sm-2 col-form-label h6'>Name</label>
                                        <input className = 'form-control' type = 'text' placeholder = 'Name' value ={username} onChange = {event =>{setUsername(event.target.value)}}/>

                                    </div>
                                    <div>
                                        <label className = 'col-sm-2 col-form-label h6'>Email</label>
                                        <input className = 'form-control' type = 'email' placeholder = 'Email' value = {email} onChange = {event => {setEmail(event.target.value)}}/>
                                    </div>
                                    <div>
                                    <label className = 'col-sm-2 col-form-label h6'>Password</label>
                                    <input className = 'form-control' type = 'password' placeholder = 'Password' value = {password} onChange = {event => {setPassword(event.target.value)}}/>
                                    </div>

                                    <div className = 'container d-flex justify-content-between'>
                                        <button type= 'button' className ='btn btn-lg btn-secondary btn-rounded  m-3'
                                        onClick = {() => {
                                            navigate("/profile", {replace: true,})
                                        }}>
                                            Cancel
                                        </button>
                                        <button type = 'button' className = 'btn btn-lg btn-info btn-rounded  m-3'
                                        onClick = {() => {
                                            onSubmit()
                                            navigate('/profile', {replace:true,})
                                        }}
                                        >
                                            Save changes
                                        </button>
                                    </div>
                                </form>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Update