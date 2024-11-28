import React from 'react'
import styles from './index.module.css'
import { Link } from 'react-router-dom'
const Form = ({name,setname,phone,setphone,handlesubmit}) => {
  return (
    <>
      <div className={styles.bookcontainer}>
        <h1>Phone Book</h1>
        <div className={styles.contentcontainer}>
          <label className='babel'>Name</label>
          <input type="text" onChange={(e)=>setname(e.target.value)} value={name} placeholder='Enter Name' />
          <label className='babel'>Phone</label>
          <input type="number"  onChange={(e)=>setphone(e.target.value)} value={phone} placeholder='Enter Phone Number' />
        </div>
        <div className={styles.btn}>
          <button onClick={handlesubmit}>Submit</button>
         <Link to ="/table"><button onClick={handlesubmit}>Visit Form</button></Link> 
        </div>
      </div>
    </>
  )
}

export default Form
