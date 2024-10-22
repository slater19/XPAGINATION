import React, { useEffect, useState } from "react";
import './XPAGINATION.css';
import Pagination from './PAGINATION.js'

const XPAGINATION = () => {
    const api="https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
    const [employees,setEmployees]=useState([])
    const [employeesPerPage]=useState(10)
    const [currentPage,setCurrentPage]=useState(1)
    
    const indexOfLastItem = currentPage * employeesPerPage;
    const indexOfFirstItem = indexOfLastItem - employeesPerPage;
    // const currentItems = employees.slice(indexOfFirstItem, indexOfLastItem);
    const currentItems = employees.slice((currentPage-1)*employeesPerPage, currentPage*employeesPerPage);

    const paginate = (page)=>{setCurrentPage(page)}

  
    
    
    useEffect(()=>{
      const fetchEmployeees = async() => {
      try {
        const res = await fetch(api)
        const data=await res.json(); 
        setEmployees(data) 
        
        console.log(data);
        // TODO: CRIO_TASK_MODULE_CART - Pass Bearer token inside "Authorization" header to get data from "GET /cart" API and return the response data
      } catch (error) {
          console.error("failed to fetch data ",error);
      }
  
    };
    fetchEmployeees();
  },[]);

   
  return (
    <div  className="Pagination">
      
    <header>
      
      <h1>Employee Data Table</h1>
    </header>
    <table>
    <thead>    
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
      <th>Role</th>
    </tr>
    </thead>

    {/* <caption>Employee details</caption> */}
    <tbody>
    {currentItems.map((employee)=>{
    const {id,name,email,role} = employee
    return (
   
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{role}</td>
    </tr>
    )
    
    })}  </tbody>

  </table>
  <Pagination
        length={employees.length}
        postsPerPage={employeesPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        
    />
      
    </div>
  )
}

export default XPAGINATION
