import React, { useState } from 'react';
import styles from './style.module.css';
function Form() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
      setPassword(e.target.value)
      }

      const objInfo = {
        name,
        email,
        password
      }
    
      const handleSubmit = (e) => {
        console.log(objInfo)
     
       
        e.preventDefault();
        }
  return(
<div>
  <h3 className={styles.some}>Registration Form</h3>
  <div>
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="fname">First Name</label>
      <input type="text"  id="fname" value={name} name="firstname" onChange={handleNameChange} placeholder="Your name.." />
      <label htmlFor="email">Email</label>
      <input type="text" id="email" value={email} name="email" onChange={handleEmailChange}  placeholder="Your email" />
      <label htmlFor="password">Password</label>
      <input type="text" id="password" value={password} name="password" onChange={handlePasswordChange}  placeholder="Your password" />
      
      <input type="submit"  defaultValue="Submit" />
    </form>
  </div>

  <h1>{name}</h1>
  <h1>{email}</h1>
  <h1>{password}</h1>
  
</div>


    
    
  )
}

export default Form;
