import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { FaDeleteLeft } from 'react-icons/fa6'
import styles from './index.module.css'
import { Link } from 'react-router-dom'
import Form from '../Form/Index'
import { RxCross2 } from 'react-icons/rx'
const Table = ({handledelete,bookdata,handleupdate,isupdate,setisupdate,handleedit,name,setname,phone,setphone}) => {
  const handlehide=()=>{
    setisupdate(false);
  }
  return (
    
    <>
    <div className={styles.tablecontainer}>
     {isupdate && <div className={styles.updateform}>
     <i><RxCross2 size={25} onClick={handlehide}/></i>
      <span>Update Form</span> 
      
      <div className={styles.updateinput}>
      <input type="text" value={name} onChange={(e)=>setname(e.target.value)} placeholder='Name' />
      <input type="number" value={phone} onChange={(e)=>setphone(e.target.value)} placeholder='Phone' />
     
      </div>
      <div className={styles.btncontainer}>
        <button onClick={handleupdate}>Update</button>
      </div>
      </div>}
    <h1>Phone Book Table</h1>

       <div className={styles.table}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookdata.map(it=>{
              return <tr key={it.id}>
              <td >{it.name}</td>
              <td>{it.phone}</td>
              <td>
                <i onClick={()=>handledelete(it.id)}><FaTrash size={20} color='rgb(193, 29, 0)'/></i>&nbsp;&nbsp;&nbsp;
                <i onClick={()=>handleedit(it.id)}><FaEdit color='blue' size={20}/></i>
              </td>
            </tr>
            })}
            
           
          </tbody>
        </table>
      </div>
      <div className={styles.btncontainer}>
      <Link to="/
      "><button >Add Contact</button></Link>
      </div>
    </div>

    </>
  )
}

export default Table
