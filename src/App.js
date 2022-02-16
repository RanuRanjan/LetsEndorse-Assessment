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

   <>
<h1 style={{textAlign:"center"}} >LetsEndorse</h1>
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
      </select><br />


      <label >Secondary Product/Services</label>
      <input type="text" />
       
     <label> Processed Products</label>
     <input type="text" placeholder='Processed Products' />
      

      <label >Years of relevant experience in this field</label>
      <input type="number" placeholder='Releavent'/>

      <label >Skill training</label>
      <select >
        <option >No formal skill taining</option>
        <option >Has formal skill training and certificate</option>
      </select>
  
     <label >Unique Seling Proposition </label>
     <select >
       <option >the Entrepreners's experience in this field</option>
       <option >innovative product</option>
       <option >high profit margin</option>
       <option >high growth potenial </option>
     </select>



    </form>
</div>
<div>

</div>
</div>
   </>
  );
}

export default App;
