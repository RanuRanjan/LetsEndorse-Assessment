// import React from 'react';
import './App.css';
import {useState} from "react";

function App() {
  
  
 const [name,setName]=useState("")

    const getName=(e)=>{
      setName(e.target.value)
  }

const[idea,setIdea]=useState("")
  const getIdea=(e)=>{
    setIdea(e.target.value)
}

const [age, setAge]=useState("")
const getAge=(e)=>{
  setAge(e.target.value)
}


const [product,setProduct]=useState("")
const getProduct=(e)=>{
  setProduct(e.target.value)
}


const [offfered,setOffered]=useState("")
const getOffered=(e)=>{
  setOffered(e.target.value)
}


const [secproduct,setSecproduct]=useState("")
const getSecproduct=(e)=>{
  setSecproduct(e.target.value)
}


const [procesedprod,setProcesedprod]=useState("")
const getProcesedprod=(e)=>{
  setProcesedprod(e.target.value)
}


const [relyears,setRelyears]=useState("")
const getRelyears=(e)=>{
  setRelyears(e.target.value)
}


const [skill,setSkill]=useState("")
const getSkill=(e)=>{
  setSkill(e.target.value)
}



const [unique,setUnique]=useState("")
const getUnique=(e)=>{
  setUnique(e.target.value)
}



const [local,setLocal]=useState("")
const getLocal=(e)=>{
  setLocal(e.target.value)
}


const [owner,setOwner]=useState("")
const getOwner=(e)=>{
  setOwner(e.target.value)
}


const [estab,setEstab]=useState("")
const getEstab=(e)=>{
  setEstab(e.target.value)
}


const [mark,setMark]=useState("")
const getMark=(e)=>{
  setMark(e.target.value)
}


const [pri,setPri]=useState("")
const getPri=(e)=>{
  setPri(e.target.value)
}






  return (

   <>
<h1 style={{textAlign:"center"}} >LetsEndorse</h1>
    <div className="App">
        
<div> 
    <form >
      <label>Username:</label>

      <input type="text" name="username" placeholder='UserName' onChange={getName} />

      <label >Stage of business:</label>
      <select name="business_stage" onChange={getIdea}>
        <option value="Select">Select</option>
        <option value="Start-up">Start-up</option>
        <option value="Scale-up">Scale-up</option>
      </select> <br />


      <label >Age of establishment:</label>
      <input type="number" placeholder='Age of establishment' min="0" max="100" placeholder="0 to 100" onChange={getAge}/><br />


      <label>Primary Products/Services offfered :</label>
      <input type="text" placeholder='primary_product_service_offered' onChange={getProduct} />
        


      <label>Offered to:</label>
      <select name="Offered to" onChange={getOffered} >
        <option value="Endcustomers">End customers</option>
        <option value="Wholesalers">Wholesalers</option>
        <option value="Distributors">Distributors</option>
        <option value="Retailers">Retailers</option>
      </select><br />


      <label >Secondary Product/Services</label >
      <input type="text"    onChange={getSecproduct}/><br />
       
     <label> Processed Products</label>
     <input type="text" placeholder='Processed Products'  onChange={getProcesedprod}/><br />
      

      <label >Years of relevant experience in this field</label>
      <input type="number" placeholder='Releavent' onChange={relyears} />

      <label >Skill training</label>
      <select  onChange={getSkill}>
        <option >No formal skill taining</option>
        <option >Has formal skill training and certificate</option>
      </select><br />
  
     <label >Unique Seling Proposition </label>
     <select onChange={getUnique}>
       <option >the Entrepreners's experience in this field</option>
       <option >innovative product</option>
       <option >high profit margin</option>
       <option >high growth potenial </option>
       <option >Superior customer suport</option>
       <option >quality and affordable products/service </option>
       <option >high demand in the target market </option>
       <option >abudant supply of raw </option>
       <option >wide range of product/services </option>
       <option >robust value-chain of the business </option>
       <option >frquency of customer visit</option>
     </select><br />
       
      <label >Locality of business</label>
      <select onChange={getLocal} >
        <option >Urban</option>
        <option >Rural</option>
        <option >semi-Urban</option>
        <option >Slum</option>
      </select> <br />

      <label >Ownership of infrastructure</label>
      <select onChange={getOwner} > 
        <option >Rented</option>
        <option >Leased</option>
        <option >Self-owned</option>
      </select><br /><br />

     <label>
     Establishment area (in square feet)
     (Enter 0 if the establishment area is irrelevant)  :
     </label>

     <input type="number" placeholder=' Establishment area'   onChange={getEstab}/>


     <h2>Target Market :  </h2>

     <label >Market research</label><br />
     <select onChange={getMark} >
       <option >Not Conducted</option>
       <option >Market research has been conducted</option>

     </select><br />
    


     <label >Primeary market</label>
     <select  onChange={getPri}>
       <option value="local">Local</option>
       <option value="Regional">Regional</option>
       <option value="National">National</option>
       <option >International</option>

     </select><br />
     
    <label >Customers</label>
    <input type="text" placeholder='Customers' /><br />


   <label >Suppliers</label>
   <input type="text" placeholder='Suppliers' /> <br />

   <label >Market avenues</label>
   <input type="text" placeholder='Select' /><br />

   <label >Aveneus of scaling up in future</label>
   <input type="text" />



    </form>
</div>
<div>

   <p> <strong>{name}</strong> is looking <strong>{idea}</strong> to their business of sharemarket</p>
   <p>This enterprise has been operational since <strong>{age}</strong> years and has been serving its customers since then</p>
   <p>This establishment offers products/services like  <strong>{product}</strong> to <strong>{offfered}</strong></p>
   <p>In addition, the enterprise shall also be invloved in  <strong>{secproduct}</strong>  </p>
   <p>other products of the enterprise shall include in  <strong>{procesedprod}</strong> </p>
   <p>  <strong>{name}</strong> has relevant experience of <strong>{relyears}</strong> years in the field</p>
   <p>The entrepreneur <strong>{skill}</strong> in this field of work</p>
   <p>The enterprise is uniquely positioned because of its <strong>{unique}</strong> </p>

   <p>The <strong>{local}</strong> is located in area of in a <strong>{owner}</strong> property</p>

   <p>The size of the establishment is {estab} sq ft</p>
   <p> <strong>{mark}</strong> and the range of products and target market has been identified after that.</p>
   <p>The enterprise shall focus on offering its products/services to <strong>{pri}</strong> markets</p>
</div>
</div>
   </>
  );
}


export default App;
