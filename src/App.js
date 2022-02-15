import react from 'react';
import './App.css';
import {useState} from "react";

function App() {
  
   const inistate={
     "Username":"",
    "Stage_of_business":""
   }
    const [formValue,setFormValue]=useState("")

  //   const handleChange=(e)=>{
  //   const {username,value}=e.target;
  //   setformValue( {...formvalue,[name]:value})
  //  }
  return (

    <div className="App">
        <div>
            <form >
              <label>Username:</label><br />

              <input type="text" name="username" placeholder='UserName' /><br />

              <label >Stage of business:</label>
              <select name="business_stage">
                <option value="Select">Select</option>
                <option value="Start-up">Start-up</option>
                <option value="Scale-up">Scale-up</option>
              </select> <br /><br />


              <label >Age of establishment:</label>
              <input type="number" placeholder='Age of establishment' min="0" max="100" placeholder="0 to 100" />


              <label>Primary Products/Services offfered :</label>
              <input type="text" placeholder='primary_product_service_offered' />
                


              <label>Offered to:</label> <br />
              <select name="Offered to" >
                <option value="Endcustomers">End customers</option>
                <option value="Wholesalers">Wholesalers</option>
                <option value="Distributors">Distributors</option>
                <option value="Retailers">Retailers</option>
              </select>



              
              l

            </form>
        </div>
        <div>

        </div>
    </div>
  );
}

export default App;
