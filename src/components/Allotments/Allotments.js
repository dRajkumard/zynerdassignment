import React from 'react'
import { CircleOutlined } from '@mui/icons-material'
import "./Allotments.css"
const Allotments = () => {
    return (
        <div className='allotment'>
            <div className='allotment-container'>
                <div className='allotment-header'>
                    <div className='allotment-inside'>
                        <h3>Allotments</h3>
                        <form>
                            <select name="dropdown">
                                <option value="Computer Architecture" selected>Central</option>
                                <option value="Java">Java</option>
                                <option value="Discrete Mathematics">Discrete Mathematics</option>
                            </select>
                        </form></div>
                    <div className='dashboard-topright'>

                        <CircleOutlined className='icons' />
                        <CircleOutlined className='icons' />
                        <CircleOutlined className='icons' />
                        <CircleOutlined className='icons' />
                        <CircleOutlined className='icons' />
                    </div>
                </div>
                <div>
                    <h6>Counseling</h6>
                </div>
                <div className='counseling-container'>
                    <div className='counseling'>
                        <h6>All India Counseling</h6>
                        <p>PG Medical-All India </p>
                    </div>
                    <div className='counseling'>
                        <h6>DNB Post MBBS</h6>
                        <p>PG Medical-DNB Post MBBS </p>
                    </div>
                    <div className='counseling'>
                        <h6>All India & DNB</h6>
                        <p>PG Medical(both allotment together)-All India+DNB </p>
                    </div>
                </div>
                <hr />
                <div className='counsiling-allotment'>
                    <div className='counsiling-list'>
                        <div>
                            <h6>All India Mediacal -SS Medical</h6>
                            <form>
                                <div>
                                    <input type="radio" />
                                    <label>Counseling Ranking</label>
                                </div>
                                <div>
                                    <input type="radio" />
                                    <label>NEET PG Rank(All india Rank)</label>
                                </div>
                                <hr />
                                <div>
                                    <label>
State
                                    </label>
                                    <br/>
                                    <select name="dropdown">
                                        <option value="Computer Architecture" selected>TamilNadu</option>
                                        <option value="Java">Kerala</option>
                                    </select>
                                </div>
                                <div>
                                    <label>
Institutes
                                    </label> <br/>
                                    <select name="dropdown">
                                        <option value="Computer Architecture" selected>TamilNadu</option>
                                        <option value="Java">Kerala</option>
                                    </select>
                                </div>
                                <div>
                                    <label>
Course
                                    </label> <br/>
                                    <select name="dropdown">
                                        <option value="Computer Architecture" selected>TamilNadu</option>
                                        <option value="Java">Kerala</option>
                                    </select>
                                </div>
                                <div>
                                    <label>

Quota
                                    </label> <br/>
                                    <select name="dropdown">
                                        <option value="Computer Architecture" selected>TamilNadu</option>
                                        <option value="Java">Kerala</option>
                                    </select>
                                </div>
                                <div>
                                    <label>
Year
                                    </label> <br/>
                                    <select name="dropdown">
                                        <option value="Computer Architecture" selected>TamilNadu</option>
                                        <option value="Java">Kerala</option>
                                    </select>
                                </div>
                                <div>
                                    <label>
Round
                                    </label> <br/>
                                    <select name="dropdown">
                                        <option value="Computer Architecture" selected>TamilNadu</option>
                                        <option value="Java">Kerala</option>
                                    </select>
                                </div>
                                <div>
                                    <label>
Catagory
                                    </label> <br/>
                                    <select name="dropdown">
                                        <option value="Computer Architecture" selected>TamilNadu</option>
                                        <option value="Java">Kerala</option>
                                    </select>
                                </div>
                                <div>
                                    <label>
DegreeType
                                    </label> <br/>
                                    <select name="dropdown">
                                        <option value="Computer Architecture" selected>TamilNadu</option>
                                        <option value="Java">Kerala</option>
                                    </select>
                                </div>
                                <div>
                                    <label>
Sub Exams
                                    </label> <br/>
                                    <select name="dropdown">
                                        <option value="Computer Architecture" selected>TamilNadu</option>
                                        <option value="Java">Kerala</option>
                                    </select>
                                </div>
                                
                            </form>

                        </div>
                    </div>
                    <div className='allotment-table'>
                        <div className='allotment-tabel-content'>
                            <table>
                                <tr>
                                    <th>Round</th>
                                    <th>Rank</th>
                                    <th>Qouta</th>
                                    <th>State</th>
                                    <th>Catagory</th>
                                    <th>Institutes</th>
                                    <th>Course</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>AIO</td>
                                    <td>Westbengal</td>
                                    <td>GEN</td>
                                    <td>Institute of postgraduate mediacal education&reasearch,Kolkata </td>
                                    <td>General Surgery</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>AIO</td>
                                    <td>Westbengal</td>
                                    <td>GEN</td>
                                    <td>Institute of postgraduate mediacal education&reasearch,Kolkata </td>
                                    <td>General Surgery</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>AIO</td>
                                    <td>Westbengal</td>
                                    <td>GEN</td>
                                    <td>Institute of postgraduate mediacal education&reasearch,Kolkata </td>
                                    <td>General Surgery</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>AIO</td>
                                    <td>Westbengal</td>
                                    <td>GEN</td>
                                    <td>Institute of postgraduate mediacal education&reasearch,Kolkata </td>
                                    <td>General Surgery</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>AIO</td>
                                    <td>Westbengal</td>
                                    <td>GEN</td>
                                    <td>Institute of postgraduate mediacal education&reasearch,Kolkata </td>
                                    <td>General Surgery</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>AIO</td>
                                    <td>Westbengal</td>
                                    <td>GEN</td>
                                    <td>Institute of postgraduate mediacal education&reasearch,Kolkata </td>
                                    <td>General Surgery</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>AIO</td>
                                    <td>Westbengal</td>
                                    <td>GEN</td>
                                    <td>Institute of postgraduate mediacal education&reasearch,Kolkata </td>
                                    <td>General Surgery</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>AIO</td>
                                    <td>Westbengal</td>
                                    <td>GEN</td>
                                    <td>Institute of postgraduate mediacal education&reasearch,Kolkata </td>
                                    <td>General Surgery</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>AIO</td>
                                    <td>Westbengal</td>
                                    <td>GEN</td>
                                    <td>Institute of postgraduate mediacal education&reasearch,Kolkata </td>
                                    <td>General Surgery</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>AIO</td>
                                    <td>Westbengal</td>
                                    <td>GEN</td>
                                    <td>Institute of postgraduate mediacal education&reasearch,Kolkata </td>
                                    <td>General Surgery</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>AIO</td>
                                    <td>Westbengal</td>
                                    <td>GEN</td>
                                    <td>Institute of postgraduate mediacal education&reasearch,Kolkata </td>
                                    <td>General Surgery</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>AIO</td>
                                    <td>Westbengal</td>
                                    <td>GEN</td>
                                    <td>Institute of postgraduate mediacal education&reasearch,Kolkata </td>
                                    <td>General Surgery</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>AIO</td>
                                    <td>Westbengal</td>
                                    <td>GEN</td>
                                    <td>Institute of postgraduate mediacal education&reasearch,Kolkata </td>
                                    <td>General Surgery</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>AIO</td>
                                    <td>Westbengal</td>
                                    <td>GEN</td>
                                    <td>Institute of postgraduate mediacal education&reasearch,Kolkata </td>
                                    <td>General Surgery</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Allotments
