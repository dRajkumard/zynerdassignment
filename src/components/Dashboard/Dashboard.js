import { CircleOutlined } from '@mui/icons-material'
import React from 'react'
import "./Dashboard.css"
import YouTube from 'react-youtube'

const Dashboard = () => {
  const opts ={
    height:'40',
    width:'70',
  }
  return (
    <>
    <div className='dashboard'>
    <div className='dashboard-spliting'>
    <div className='dashboard-container'>
      <div>
        <div className='topheader'>
    <h4>Dashboard</h4>
    </div>
    <div className='header-container'>
    <div >
    <h5>Hello John, Get all your NEET PG info here</h5>
    <p>The thoughest part of your journey is over -NEET PG Exam!<br/>and the most crusiel part is next counseling
    </p>
    </div>
    <div className='dashboard-icons'>
    <CircleOutlined className='dashboard-icon'/>
    <CircleOutlined className='dashboard-icon'/>
    <CircleOutlined className='dashboard-icon'/>
    </div>
    </div>
 <div className='video-announcement-container'>
  <div className=' video'>

    <h6>Videos</h6>
    
    <div className='video-container'>
  <YouTube videoId="3PEPdxhuINU" opts={opts}/>
  <div>
    <p>Leo phasellus eget
    <small>Loreum ipsum dolor sit amit consectetur adipiscing etc 2m</small></p>
  </div>
  </div>
    <div className='video-container'>
  <YouTube videoId="3PEPdxhuINU" opts={opts}/>
  <div>
    <p>Leo phasellus egetr
    <small>Loreum ipsum dolor sit amit consectetur adipiscing etc 2m</small></p>
  </div>
  </div>
    <div className='video-container'>
  <YouTube videoId="3PEPdxhuINU" opts={opts}/>
  <div>
    <p>Leo phasellus egetr
    <small>Loreum ipsum dolor sit amit consectetur adipiscing etc 2m</small></p>
  </div>
  </div>
    <div className='video-container'>
  <YouTube videoId="3PEPdxhuINU" opts={opts}/>
  <div>
    <p>Leo phasellus egetr
    <small>Loreum ipsum dolor sit amit consectetur adipiscing etc 2m</small></p>
  </div>
  </div>
    <div className='video-container'>
  <YouTube videoId="3PEPdxhuINU" opts={opts}/>
  <div>
    <p>Leo phasellus egetr
    <small>Loreum ipsum dolor sit amit consectetur adipiscing etc 2m</small></p>
  </div>
  </div>
    <div className='video-container'>
  <YouTube videoId="3PEPdxhuINU" opts={opts}/>
  <div>
    <p>Leo phasellus egetr
    <small>Loreum ipsum dolor sit amit consectetur adipiscing etc 2m</small></p>
  </div>
  </div>
    <div className='video-container'>
  <YouTube videoId="3PEPdxhuINU" opts={opts}/>
  <div>
    <p>Leo phasellus egetr
    <small>Loreum ipsum dolor sit amit consectetur adipiscing etc 2m</small></p>
  </div>
  </div>
    
    
   
  </div>
  <div className='announcement-event-container'>
<div className='announcement'>
<div className='announcement-table'>
  <table>
    <tr>
      <th>Announcement</th>
      <th> <form>
         <select name = "dropdown">
            <option value = "Computer Architecture" selected>Computer Architecture</option>
            <option value = "Java">Java</option>
            <option value = "Discrete Mathematics">Discrete Mathematics</option>
         </select>
      </form></th>
      <th><input type="search" placeholder="search"/></th>
      </tr>
      {/* <div className='announcement-topheader'> */}
        
     
      
      {/* </div> */}
   
    <tr>
      <th>Counseling</th>
      <th>News</th>
      <th>Detail</th>
    </tr>
    <tr>
      <td>Utterpradesh -PG Medical</td>
      <td>News type</td>
      <td>Loreum ipsum dolor sit amit consectetur </td>
    </tr>
    <tr>
      <td>Utterpradesh -PG Medical</td>
      <td>News type</td>
      <td>Loreum ipsum dolor sit amit consectetur </td>
    </tr>
    <tr>
      <td>Utterpradesh -PG Medical</td>
      <td>News type</td>
      <td>Loreum ipsum dolor sit amit consectetur </td>
    </tr>
    <tr>
      <td>Utterpradesh -PG Medical</td>
      <td>News type</td>
      <td>Loreum ipsum dolor sit amit consectetur </td>
    </tr>
   
    
  </table>
</div>

</div>
<div className='event'>
<div className='announcement-table'>
  <table>
    <tr>
      <th>Event</th>
      <th> <form>
         <select name = "dropdown">
            <option value = "Computer Architecture" selected>Computer Architecture</option>
            <option value = "Java">Java</option>
            <option value = "Discrete Mathematics">Discrete Mathematics</option>
         </select>
      </form></th>
      <th><input type="search" placeholder="search"/></th>
      </tr>
      {/* <div className='announcement-topheader'> */}
        
     
      
      {/* </div> */}
   
    <tr>
      <th>Past</th>
      <th>Today</th>
      <th>Upcoming</th>
    </tr>
    <tr>
      <td>Utterpradesh -PG Medical</td>
      <td>News type</td>
      <td>Loreum ipsum dolor sit amit consectetur </td>
    </tr>
    <tr>
      <td>Utterpradesh -PG Medical</td>
      <td>News type</td>
      <td>Loreum ipsum dolor sit amit consectetur </td>
    </tr>
    <tr>
      <td>Utterpradesh -PG Medical</td>
      <td>News type</td>
      <td>Loreum ipsum dolor sit amit consectetur </td>
    </tr>
    <tr>
      <td>Utterpradesh -PG Medical</td>
      <td>News type</td>
      <td>Loreum ipsum dolor sit amit consectetur </td>
    </tr>
   
    
  </table>
</div>
</div>
  </div>
  </div>
  </div>
  </div>

  <div className='dashboard-right col'>
    <div className='dashboard-topright'>
      
      <CircleOutlined className='icons'  />
      <CircleOutlined className='icons'  />
      <CircleOutlined className='icons'  />
      <CircleOutlined className='icons'  />
      <CircleOutlined className='icons'  />
      </div>
      <div className='notification-table'>
        <table>
          <tr>
            <th>Notification</th>
          </tr>
          <tr>
            <td>
            <p>Leo phasellus egetr
    <small>Loreum ipsum dolor sit amit consectetur adipiscing etc 2m</small></p>
            </td>
          </tr>
          <tr>
            <td>
            <p>Leo phasellus egetr
    <small>Loreum ipsum dolor sit amit consectetur adipiscing etc 2m</small></p>
            </td>
          </tr>
          <tr>
            <td>
            <p>Leo phasellus egetr
    <small>Loreum ipsum dolor sit amit consectetur adipiscing etc 2m</small></p>
            </td>
          </tr>
          <tr>
            <td>
            <p>Leo phasellus egetr
    <small>Loreum ipsum dolor sit amit consectetur adipiscing etc 2m</small></p>
            </td>
          </tr>
          
        
        </table>
      </div>
      <div>
        <div>
          <h5>Counseling</h5>
          <form>
         <select name = "dropdown">
            <option value = "Computer Architecture" selected>Computer Architecture</option>
            <option value = "Java">Java</option>
            <option value = "Discrete Mathematics">Discrete Mathematics</option>
         </select>
      </form>
      <input placeholder='filter' type='text'/>
        </div>
        <div>
          <ul>
            <li></li>
            </ul>
        </div>
      </div>
      </div>
  </div>
  </div>
  </>
  )
}

export default Dashboard