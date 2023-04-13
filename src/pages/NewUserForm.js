import React from 'react'
import { Header } from '../component/Header/Header'
import './NewUserForm.css'

export const NewUserForm = () => {
  return (
    <div id='Forms'>
        <Header/>
        <div id=''>
        <h2 >Basic Info</h2>
        <br></br>
        <br></br>
        <div className='formbox'>
        <form>
          
           <label for="name" style={{color:'black'}}>Name</label>
           <input type='text' name='Name'></input>

           <label for="address" style={{color:'black'}}>Address</label>
           <input type='text' address='Address'></input>

           <label for="birthday" style={{color:'black'}}>Birthday</label>
           <input type="date" id="birthday" name="birthday"></input>

           <label for="parentname" style={{color:'black'}}>Parent Name</label>
           <input type='text' name='Parent Name'></input>

           <label for="phone" style={{color:'black'}}>Mobile Number</label>
           <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"></input>

           <label for="parentphone" style={{color:'black'}}>Parent Mobile Number</label>
           <input type="tel" id="phone" name="parentphone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"></input>

           <label for="caste" style={{color:'black'}}>Caste</label>
           <input type='text' name='caste'></input>

           <label for="aadharnumber" style={{color:'black'}}>Aadhar Number</label>
           <input type="tel" id="aadharnumber" name="aadharnumber" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"></input>
           
        </form>
        </div>
        <br></br>
        <br></br>
        <h2>Marks Info</h2>
        <br></br>
        <br></br>
        <div className='formbox'>
        <form>
          
           <label for="10thmarks" style={{color:'black'}}>10<sup>th</sup> Marks</label>
           <input type="tel" id="10thmarks" name="10thmarks" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"></input>

           <label for="12thmarks" style={{color:'black'}}>12<sup>th</sup> Marks</label>
           <input type="tel" id="12thmarks" name="12thmarks" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"></input>

           <label for="diploma" style={{color:'black'}}>Diploma if</label>
           <input type="tel" id="diploma" name="diploma" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"></input>

           <label for="result" style={{color:'black'}}>Result</label>
           <input type="tel" id="result" name="result" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"></input>


           
        </form>
        </div>
        <br></br>
        <br></br>
        <h2 >Other Info</h2>
        <br></br>
        <br></br>
        <div className='formbox'>
        <form>
          
           <label for="yearofadmission" style={{color:'black'}}>Year Of Admission</label>
           <input type="number" id="yearofadmission" name="yearofadmission" min="1993"></input>

           <label for="branch">Branch</label>

<select name="branch" id="branch">
  <option value="Information Technology">Information Technology</option>
  <option value="Computer Science and ">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>

           
        </form>
        </div>
        <br></br>
        <br></br>
        <h2 >Accomodation Info</h2>
        <br></br>
        <br></br>
        <form >
          
        </form>
        <br></br>
        <br></br>
        
        </div>
        
    </div>
  )
}
