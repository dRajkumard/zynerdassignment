
import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import Loginlogo from '../../assets/login.png'
import { Person, Visibility,VpnKey} from '@mui/icons-material';
import './Login.css';
import axios from 'axios';


const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState();
    const [post ,setPost] = useState("");
    // useEffect(() => {
    //     axios.get('https://www.postman.com/collections/923ae261e93048bff71d').then((response) => {
    //       setPost(response.data);
    //       console.log(response.data.item)
    //       console.log(response.data)
    //     });
    //   }, []);
      const handleSubmitPress = () => {
    
        // setErrortext('');
        if (!email) {
         alert('Please fill email');
          return;
        }
        if (!password) {
          alert('Please fill password');
          return;
        }
        // setLoading(true);
        const payload = {
           email,
          password
        };
        fetch('http://hire.zynerd.com/ui/user_sessions/login', {
          method: 'POST',
          headers: {
            //Header Defination
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        })
          .then((response) => response.json())
          .then((responseJson) => {
            //Hide Loader
            // setLoading(false);
            console.log(responseJson.data.token);
            // If server response message same as Data Matched
            if (responseJson.success === true) {
              
              sessionStorage.setItem('token', responseJson.data.token);
              sessionStorage.getItem('token').then((res) => console.log("rajtoken",res))
              
                
              
              
            //   navigation.navigate('DrawerNavigationRoutes');
            } else {
            //   setErrortext(responseJson.message);
              // ToastAndroid.show(responseJson.message, ToastAndroid.LONG, ToastAndroid.BOTTOM);
            }
          })
          
          .catch((error) => {
            //Hide Loader
            // setLoading(false);
            // console.error(error);
          });
          
      };
    
    const useremail = (event) =>{
console.log(event.target.value);
setEmail(event.target.value);
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
                    
                   <button className='loginbutton' onClick={handleSubmitPress}>Login</button>
                   
                   </div>
                                
                    </form>
                    </div>
                    </div>
                </div>
           
    )
}
export default Login