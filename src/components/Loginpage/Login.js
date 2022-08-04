
import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import Loginlogo from '../../assets/login.png'
import { Person, Visibility,VpnKey} from '@mui/icons-material';
import './Login.css';
import axios from 'axios';


const Login = () => {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState();
    const [post ,setPost] = useState("");
    useEffect(() => {
        axios.get('https://www.postman.com/collections/923ae261e93048bff71d').then((response) => {
          setPost(response.data);
          console.log(response.data.item)
          console.log(response.data)
        });
      }, []);
    const Login = () =>{
        if(!username){
            alert('Please fill username')
        }
        if(!password){
            alert("Please fill Password")
        }
        
    }
    
    const useremail = (event) =>{
console.log(event.target.value);
setUsername(event.target.value);
    }   
    const userpassword = (event) =>{
        console.log(event.target.value)
        setPassword(event.target.value)
    }
     return(
       
            <div className='Loginfield'>
                 <h2 className='text-center loginLog card'>Login </h2>
                <div className='logincontainer row'>
               <div className="logocontainer col-md-5 ">
                <img src={Loginlogo} alt='loginimage'/>
               </div>
                <div className="inputcontainer col-md-6 card">
               
                <form action="" className='form'>
                    <div className='loginicon'>
                <Person className='loginLogo'/> 
                   <input type="text" placeholder='UserId' className='form-control' onChange={useremail}/>
                   </div><br/><br/>
                   <div className='loginicon'>
                <VpnKey className='loginLogo'/>
                   <input type="password" placeholder='Password' className='form-control' onChange={userpassword} />
                   </div><br/><br/>
                   <div className='buttoncontainer'>
                    
                   <button className='loginbutton' onClick={Login}><Link to="/home">Login </Link></button>
                  
                   </div>
                                
                    </form>
                    </div>
                    </div>
                </div>
           
    )
}
export default Login