
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Form from './Components/Form/Index'
import Table from './Components/TAble/Index'
import { data, Route, Routes, useNavigate } from 'react-router-dom'
import { v4 as id } from 'uuid';
function App() {
  const [name, setname] = useState("")
  const [phone, setphone] = useState("")
  const [bookdata,setbookdata]=useState([]);
  const [isupdate,setisupdate]=useState(false)
  const [isid,setisid]=useState("")
  const jump=useNavigate()

  useEffect(()=>{
    getdata();
    console.log(bookdata)
  },[])

  const config={
    url:"https://bookdata-deb5e-default-rtdb.firebaseio.com/bookdata.json",
    method:"POST",
    data:{name:name,phone:phone}
  }

  const configup={
    url:`https://bookdata-deb5e-default-rtdb.firebaseio.com/bookdata/${isid}.json`,
    method:"PATCH",
    data:{name:name,phone:phone}
  }

  const handlesubmit=async()=>{
    setname("")
    setphone("")
    axios(config).then((res)=>{

      jump("/table")
      getdata()
     }).catch(err=>{
      console.log(err)
     })  

 

  }
  const getdata=()=>{
    axios.get("https://bookdata-deb5e-default-rtdb.firebaseio.com/bookdata.json").then((res)=>{
      let data= res.data;
      let d=[]
      for(let name in data){  
      d.push({id:name,...data[name]})
        }
        setbookdata(d)
        console.log(d)
        
  })
}

  

  const handledelete=(id)=>{
    axios.delete(`https://bookdata-deb5e-default-rtdb.firebaseio.com/bookdata/${id}.json`).then((res)=>{
    alert("record deleted")
    getdata();
     }).catch(err=>{
      console.log(err)
     })  
  }
  const handleupdate=()=>{
     axios(configup).then(res=>{
      setisupdate(false)
      alert("Update Record")
      getdata()
     }).catch(err=>{
      alert("network err")
     })

 
  }
  const handleedit=(e)=>{
    setisid(e)
    const filterdata=bookdata.filter(it=>{
      return it.id==e
    })

    setname(filterdata[0].name)
    setphone(filterdata[0].phone)
    setisupdate(true)
      
  }
  return (
    <>
      
      <Routes>
      <Route path='/' element={<Form name={name} setname={setname} phone={phone} setphone={setphone} handlesubmit={handlesubmit} />}/>
      <Route path='/table' element={<Table handleupdate={handleupdate} name={name} setname={setname} phone={phone} setphone={setphone} handleedit={handleedit} setisupdate={setisupdate} isupdate={isupdate} handledelete={handledelete} bookdata={bookdata} />}/>
    
    </Routes>
    </>
  )
}

export default App
