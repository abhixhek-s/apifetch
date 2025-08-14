import React, { useEffect, useState } from 'react'

const Apifetch = () => {
    const[data,setData]=useState([]);
    const[filteredData,setFilteredData]=useState([]);
    async function fetchData(){
        const res=await fetch("https://jsonplaceholder.typicode.com/posts");
        const data=await res.json();
        setData(data);
        setFilteredData(data);
}
useEffect(()=>{fetchData();},[]);
function filterData(id){
    setFilteredData(data.filter(user=>user.userId===id));

}

  return (
    <>
    <button onClick={()=>filterData(1)}>user1</button>
    <button onClick={()=>filterData(2)}>user2</button>
    <button onClick={()=>filterData(3)}>user3</button>
    <button onClick={()=>filterData(4)}>user4</button>
    <button onClick={()=>setFilteredData(data)}>all</button>
    <div>{filteredData.map(user=>
        <div key={user.id}>
            <p><b>Title:</b>{user.title}</p>
            <p><b>Body:</b>{user.body}</p>
            <hr></hr>

        </div>
    )}</div></>
  )
}

export default Apifetch