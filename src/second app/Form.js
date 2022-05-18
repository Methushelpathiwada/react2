import React,  { useState } from 'react';
import './Style.css';


const  Form = () =>
{

    const [name, setName] = useState("")
    const [department, setDept] = useState("")
    const [rate, setRate] = useState("")

    const[allUser, setAllUser] = useState([])

    
const handleSubmit = (event) =>
{
    event.preventDefault();
    const newUser = {
        name : name,
        department:department,
        rate : rate
    }
    setAllUser([...allUser, newUser])
  

   
  
};

    return(
        < >
            <div >
                <h1>
                    EMPLOYEE FEEDBACK FORM
                </h1>
                <hr />
<div className='main-container'>
                <form onSubmit={handleSubmit}>
                    <center>
                <div>                        
                    <label htmlFor="name">Name : </label>
                    <input type="text" name="name" id="name"  placeholder='Enter Name' onChange={(e) => setName(e.target.value)} 
                   value={name}
                    required />
                </div>
                    <br/>
                
                <div>
                    <label htmlFor="department">Department : </label>

                    <input type="text"  name="department" id="department" placeholder='Enter ur department' required  onChange={(e) => setDept(e.target.value)}  value={department} />
                    </div>

                    <br />
                    <div>
                    <label htmlFor="rate">Rating : </label>

                    <input type="number" placeholder='Enter rate' name="rate" id="rate"  
                     
                     onChange={(e) => setRate(e.target.value)} value={rate} required/>
                     </div>
                    <br />

                    <hr />
                    <button className='sub-btn' type="submit" value="Submit" >Submit </button>
                    </center>
                </form>
                </div>
            </div>
            
           
           <div className='show-data'>
               <center>

        
                <table className='table-show' > 
              
                        <thead>
                       
                            <th>User Name</th>
                            <th>Department</th>
                            <th>Rate</th>
                        </thead>
                    {allUser.map((data)=>(
                        
                        <tbody>
                            <td>{data.name}</td>
                            <td>{data.department}</td>
                            <td>{data.rate}</td>

                        </tbody>
                    ))}
                </table>
                </center>

            </div>
            
        </>
    );

}

export default Form;